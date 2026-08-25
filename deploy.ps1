<#
.SYNOPSIS
    Push the portfolio to GitHub (triggering the Netlify/Cloudflare Pages
    auto-deploy) and purge the Cloudflare edge cache so new/other visitors
    don't get served stale JS/CSS/images.

.DESCRIPTION
    Run this instead of a bare `git push` when you want the site fully live
    and fresh. Credentials come from .env.local (git-ignored, never
    committed) -- see .env.local.example for the expected format.

    This does NOT touch a visitor's own browser cache -- static assets are
    served with `max-age=14400, must-revalidate`, so a repeat visitor who
    fetched an asset in the last 4h may still see their own cached copy
    until it naturally revalidates. Purging Cloudflare closes the gap for
    everyone else.
#>

$ErrorActionPreference = "Stop"
$RepoRoot = $PSScriptRoot
$EnvFile = Join-Path $RepoRoot ".env.local"

if (-not (Test-Path $EnvFile)) {
    Write-Error ".env.local not found. Copy .env.local.example to .env.local and fill in your Cloudflare API token + zone ID."
    exit 1
}

$envVars = @{}
Get-Content $EnvFile | ForEach-Object {
    if ($_ -match '^\s*([A-Z_]+)\s*=\s*(.+)\s*$') {
        $envVars[$matches[1]] = $matches[2]
    }
}

$ApiToken = $envVars["CLOUDFLARE_API_TOKEN"]
$ZoneId = $envVars["CLOUDFLARE_ZONE_ID"]

if (-not $ApiToken -or -not $ZoneId) {
    Write-Error "CLOUDFLARE_API_TOKEN or CLOUDFLARE_ZONE_ID missing from .env.local"
    exit 1
}

Write-Output "Pushing to origin/carsonng..."
git -C $RepoRoot push origin carsonng
if ($LASTEXITCODE -ne 0) {
    Write-Error "git push failed -- aborting cache purge."
    exit 1
}

Write-Output "Purging Cloudflare cache for carsonng.com..."
$response = Invoke-RestMethod `
    -Uri "https://api.cloudflare.com/client/v4/zones/$ZoneId/purge_cache" `
    -Method Post `
    -Headers @{ "Authorization" = "Bearer $ApiToken"; "Content-Type" = "application/json" } `
    -Body '{"purge_everything": true}'

if ($response.success) {
    Write-Output "Cache purged successfully."
} else {
    Write-Error "Cache purge failed: $($response.errors | ConvertTo-Json -Compress)"
    exit 1
}

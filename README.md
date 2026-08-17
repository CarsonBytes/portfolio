# Carson Ng — Portfolio

[carsonng.com](https://carsonng.com) — AI Governance Leadership · Agentic AI Engineering · AWS Solutions Architect Professional

18 years of cross-border engineering experience (Germany + Hong Kong) across ERP systems, applied AI engineering, and scalable cloud solutions. PMP + CISA certified, AIGP (AI Governance Professional) in progress. This repo is the source for my personal portfolio site.

## AI Governance Philosophy

Across every AI project I've shipped, the same pattern shows up whether or not I set out to repeat it: **trustworthy by construction, not by policy alone.** A few concrete commitments that come out of that, grounded in NIST AI RMF and the EU AI Act rather than invented from scratch:

- **Human-in-the-loop checkpoints instead of advisory labels.** A HIGH-risk classification that doesn't stop anything isn't governance, it's a comment. Change Impact Assessor pauses the actual workflow behind a real checkpoint until a human acknowledges it.
- **Deterministic gates instead of LLM judgment calls on high-stakes decisions.** The Quantitative Trade-Analysis Platform's multi-agent LLM analyst feeds a deterministic risk gate — it informs, it doesn't decide whether capital moves.
- **Structural anti-hallucination instead of prompt-level hope.** Sprint Analyzer computes every metric with pandas and structurally bars the LLM from inventing numbers, rather than asking it nicely to be accurate.
- **Automated compliance gating, not after-the-fact review.** The AWS AI Code Review demo blocks merges on critical findings instead of leaving them as comments someone might read.

The common thread: governance mechanisms that are load-bearing parts of the system, not documentation about the system.

## Featured AI Engineering Projects

| Project | What it does | Links |
|---|---|---|
| **Change Impact Assessor** | Retrieval-grounded risk assessor for code/infra changes. HIGH-risk changes pause a LangGraph workflow behind a real human-in-the-loop checkpoint, not just an advisory label, with structural anti-hallucination guards. | [Live demo](https://carsonng.short.gy/change-impact-assessor) · [GitHub](https://carsonng.short.gy/change-impact-assessor-github) |
| **AWS AI Code Review & Security Scanning Demo** | Automated PR gate combining Amazon Q Developer (AI code review) and Amazon Inspector (security scanning). Real example: the bots caught an over-privileged IAM role, a vulnerable dependency, and a missing CloudFormation security property before merge. | [GitHub](https://carsonng.short.gy/aws-code-review-github) |
| **Quantitative Trade-Analysis Platform** | Research-driven trading platform for a diversified 22-ETF book: a walk-forward, deflated-Sharpe-tested backtester proves an edge before capital is risked; a multi-agent LLM analyst feeds a deterministic risk gate; the live dashboard now trades real money on Interactive Brokers alongside an isolated paper account. The public dashboard's "Signals & Gates" view shows the deterministic gate live — the exact reason a trade is blocked, not just pass/fail. 80+ strategy ideas tested — only one core edge survived. | [Paper Account](https://carsonng.short.gy/quant) · [GitHub](https://carsonng.short.gy/quant-trade-analysis-github) |
| **Sprint Analyzer** | AI sprint retrospective generator with a deterministic-numbers / LLM-prose split — pandas computes every metric from Jira/ClickUp exports, the LLM only writes prose. 110+ unit tests run without an API key. | [Live demo](https://carsonng.short.gy/sprint-analyzer) · [GitHub](https://carsonng.short.gy/sprint-analyzer-carsonng) |
| **Event Radar** | AI-powered event discovery for Hong Kong: two-stage-plus-embedding LLM ranking, a closed feedback loop, and hallucinated-event-ID rejection on every LLM-referenced result. 150 tests, bilingual disclaimer, Crawl-delay-compliant scraping. | [Live demo](https://carsonng.short.gy/event-radar-demo) · [GitHub](https://carsonng.short.gy/event-radar-github) |
| **AI Regulation Radar** | Monitors EU AI Act, NIST AI RMF, and HK PCPD sources, diffs legal text changes, and generates plain-English impact assessments via RAG + LLM. Public/private views are the same app filtered by content sensitivity, not just access. | [Live demo](https://carsonng.short.gy/ai-regulation-radar) |
| **Command Deck** | A personal ops center for a small service fleet: cross-project LLM cost tracking, health monitoring, alerting, and a deliberate quarantine/restart-eligibility gate distinguishing an intentional pause from a genuine liveness failure. | [Live demo](https://carsonng.short.gy/command-deck) · [GitHub](https://carsonng.short.gy/command-deck-github) |

## Skills

- **AI / ML:** LangGraph state machines, LlamaIndex, RAG with metadata filtering, prompt engineering, Whisper fine-tuning, multi-provider LLM orchestration (Anthropic, OpenAI-compatible, DeepSeek), Supabase/pgvector, Streamlit, Gradio, NiceGUI
- **Backend & Cloud:** PHP & Laravel, Node.js & Express.js, Python, Java, REST APIs, MongoDB, Docker, AWS (EC2, CodePipeline), Terraform, GitHub Actions
- **Frontend:** React, React Native, Vue.js
- **Other:** Python & Selenium automation, Figma prototyping

## Certifications

- Project Management Professional (PMP)
- Certified Information Systems Auditor (CISA)
- AWS Certified Solutions Architect – Professional
- HashiCorp Certified: Terraform Associate (003)
- Professional Scrum Master™ II (PSM II)
- Microsoft Certified: Azure AI Engineer Associate
- Zend Certified Engineer
- AIGP – Artificial Intelligence Governance Professional *(in progress)*

## How this site is built

Static PHP → HTML source, hand-tuned tag taxonomy, real Playwright-captured screenshots (not stock art), and a few real judgment calls along the way — including a redaction decision that's a small case study in the same governance thinking described above. Details in [BUILD_LOG.md](BUILD_LOG.md).

---

## About this template

The site is built on **Developer**, a free Bootstrap 5 resume/portfolio theme by UX/UI designer [Xiaoying Riley](https://twitter.com/3rdwave_themes), used here under its free license (footer attribution required — see [theme details](https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap-theme-for-web-developers/)).

**Credits:** [Bootstrap](http://getbootstrap.com/) · [FontAwesome](http://fortawesome.github.io/Font-Awesome/) · [Vanilla RSS](https://github.com/sdepold/jquery-rss) · Profile image: [Ben Smith](https://www.flickr.com/photos/dotbenjamin/2577394151)

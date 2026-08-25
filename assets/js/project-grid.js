"use strict";

(function () {
	var projectsPath = 'assets/images/projects/';

	var projects = [
		{
			id: 'change-impact-assessor',
			title: 'Change Impact Assessor — Human-in-the-Loop AI Risk Gate',
			summary: 'Human-in-the-loop AI risk gate — HIGH-risk changes pause for real sign-off, not a label.',
			description: 'A retrieval-grounded risk assessor for code/infra changes, deployed via Docker on Hugging Face Spaces with GitHub Actions CI on every push. HIGH-risk changes pause a LangGraph workflow behind a real human-in-the-loop checkpoint — not just an advisory label — with structural anti-hallucination guards.<br><br>Verified live against a production endpoint, with CI-tracked precision/recall scored separately, not a single blended metric.',
			folder: 'change_impact_assessor',
			cover: 'cover_thumb.png',
			images: ['landing.png', 'assessment_result.png'],
			imgTitles: ['Change Impact Assessor input form', 'HIGH-risk assessment pending human sign-off'],
			buttons: [
				{ title: 'Live Demo', url: 'https://carsonng.short.gy/change-impact-assessor' },
				{ title: 'GitHub', url: 'https://carsonng.short.gy/change-impact-assessor-github' }
			],
			tags: ['Cloud/DevOps', 'AI Governance'],
			featured: false
		},
		{
			id: 'aws-code-review',
			title: 'AWS AI Code Review & Security Scanning Demo',
			summary: 'Automated PR gate: Amazon Q + Inspector block merges on real, caught vulnerabilities.',
			description: 'An automated pull-request gate combining Amazon Q Developer (AI-powered code review) and Amazon Inspector (security scanning) on AWS — every PR is reviewed and scanned before merge, with critical findings blocking until resolved, not just flagged.<br><br>Built on a real example PR: the bots caught an IAM role with AdministratorAccess, a vulnerable dependency with a known CVE, and a missing CloudFormation security property — all before merge.',
			folder: 'aws_code_review',
			cover: 'cover_thumb.png',
			images: ['pr_overview.png', 'q_developer_review.png'],
			imgTitles: ['Real PR showing automated review bots', 'Amazon Q Developer security findings'],
			buttons: [
				{ title: 'GitHub', url: 'https://carsonng.short.gy/aws-code-review-github' }
			],
			tags: ['AI Governance', 'Cloud/DevOps'],
			featured: false
		},
		{
			id: 'quant-trade-analysis',
			title: 'Quantitative Trade-Analysis Platform',
			summary: 'Deflated-Sharpe-tested backtester feeding a deterministic risk gate — live paper and real-money trading.',
			description: 'A research-driven trading platform for a diversified 22-ETF book, engineered so no capital moves on a hunch: a walk-forward, deflated-Sharpe-tested backtester proves an edge first, a multi-agent LLM analyst (regime / technical / sentiment) feeds a deterministic risk gate — not a direct trade call — and a live dashboard now trades real money on Interactive Brokers alongside a fully isolated, hard-guarded paper account.<br><br>The public dashboard shows the paper-trading instance, including the live "Signals & Gates" view — every instrument scored against explicit entry rules (strength, R:R, cooldown, de-correlation), with the exact reason a trade is blocked shown, not just a pass/fail. 80+ strategy ideas tested with out-of-sample / DSR discipline — only one core edge plus one validated satellite survived; everything else was rejected with data, not intuition.',
			folder: 'quant_dashboard',
			cover: 'cover_thumb.png',
			images: ['board.png', 'signals_gates.png'],
			imgTitles: ['Live paper-trading dashboard', 'Deterministic risk-gate status per instrument'],
			buttons: [
				{ title: 'Paper Account', url: 'https://carsonng.short.gy/quant' },
				{ title: 'GitHub', url: 'https://carsonng.short.gy/quant-trade-analysis-github' }
			],
			tags: ['AI Governance', 'Cloud/DevOps'],
			featured: true
		},
		{
			id: 'sprint-analyzer',
			title: 'Sprint Analyzer — AI Sprint Retrospective Generator',
			summary: 'Pandas computes every metric, the LLM only writes prose — no invented numbers.',
			description: 'An AI sprint retrospective generator built to give engineering leads a trustworthy read on team delivery — a deterministic-numbers / LLM-prose split means pandas computes every metric from real Jira/ClickUp exports, and the LLM is structurally barred from inventing numbers, only writing prose.<br><br>110+ unit tests run without an API key; validated against real production sprint data from teams I\'ve led.',
			folder: 'sprint_analyzer',
			cover: 'cover_thumb.png',
			images: ['landing.png'],
			imgTitles: ['Sprint Analyzer dashboard'],
			buttons: [
				{ title: 'Live Demo', url: 'https://carsonng.short.gy/sprint-analyzer' },
				{ title: 'GitHub', url: 'https://carsonng.short.gy/sprint-analyzer-carsonng' }
			],
			tags: ['AI Governance', 'Technical Leadership'],
			featured: false
		},
		{
			id: 'event-radar',
			title: 'Event Radar — AI Event Discovery',
			summary: 'AI event discovery for Hong Kong with a closed feedback loop and hallucination rejection.',
			description: 'An AI-powered event discovery assistant for Hong Kong that I conceived, built, and now operate end-to-end: tell it what you\'re into and it surfaces matching events, ranked and explained by an LLM via two-stage-plus-embedding ranking (keyword filter → semantic similarity → LLM rerank on the shortlist only) to keep API costs sane. A closed feedback loop (thumbs up/down) adjusts per-user interest weights over time, and every LLM-referenced event is validated against the real candidate set before being trusted — hallucinated IDs are rejected, not displayed.<br><br>150 tests, a bilingual disclaimer, and Crawl-delay-compliant scraping — operated, not just shipped once: real production bugs found and fixed live, including a missing Cache-Control header silently serving stale JS to every visitor and an HKT day-boundary bug undercounting daily LLM usage.',
			folder: 'event_radar',
			cover: 'cover_thumb.png',
			images: ['landing.png', 'swipe.png'],
			imgTitles: ['Event Radar public demo feed', 'Swipe-deck discovery mode'],
			buttons: [
				{ title: 'Live Demo', url: 'https://carsonng.short.gy/event-radar-demo' },
				{ title: 'GitHub', url: 'https://carsonng.short.gy/event-radar-github' }
			],
			tags: ['AI Governance', 'Technical Leadership'],
			featured: false
		},
		{
			id: 'ai-regulation-radar',
			title: 'AI Regulation Radar',
			summary: 'Diffs EU AI Act, NIST, and HK PCPD text changes into plain-English impact assessments.',
			description: 'Monitors EU AI Act, NIST AI RMF, and HK PCPD regulatory sources, diffs legal text changes, and generates plain-English impact assessments via RAG + LLM. Public and private views are the same running app filtered by content sensitivity, not just access — a real architectural split between who can reach it and what they\'re shown.<br><br>Deployed on its own GCP VM behind systemd + a dedicated Cloudflare Tunnel, with a daily cron-driven check pipeline monitoring 4 regulatory sources for real text changes.',
			folder: 'ai_regulation_radar',
			cover: 'cover_thumb.png',
			images: ['landing.png', 'diff_view.png'],
			imgTitles: ['AI Regulation Radar tracked sources', 'Real EU AI Act diff, old vs. new text'],
			buttons: [
				{ title: 'Live Demo', url: 'https://carsonng.short.gy/ai-regulation-radar' }
			],
			tags: ['AI Governance', 'Cloud/DevOps'],
			featured: false
		},
		{
			id: 'command-deck',
			title: 'Command Deck',
			summary: 'Ops center for a personal SaaS fleet — cost tracking, health checks, and a real quarantine gate.',
			description: 'A personal ops center for a small fleet of live services: cross-project LLM cost tracking, service-health monitoring, and Telegram alerting, evolved into real agent-safety infrastructure. A deliberate quarantine/restart-eligibility gate distinguishes "an operator paused this on purpose" from "this process is actually dead," so automated recovery never fights a deliberate hold.<br><br>Monitors 9 services across the whole personal SaaS fleet with live uptime tracking, auto-heal, and an incident log — the Governance tab shown here captures a real quarantine lock engaged on a live service, not a mocked-up state.',
			folder: 'command_deck',
			cover: 'cover_thumb.png',
			images: ['cost_usage.png', 'landing.png', 'governance.png'],
			imgTitles: ['Cost & usage — cross-project LLM spend tracking', 'Command Deck fleet overview', 'Governance tab — active quarantine/lock state'],
			buttons: [
				{ title: 'Live Demo', url: 'https://carsonng.short.gy/command-deck' },
				{ title: 'GitHub', url: 'https://carsonng.short.gy/command-deck-github' }
			],
			tags: ['AI Governance', 'Cloud/DevOps', 'Technical Leadership'],
			featured: true
		}
	];

	function imgPath(project, file) {
		return projectsPath + project.folder + '/' + file;
	}

	function uniqueTags() {
		var seen = [];
		projects.forEach(function (p) {
			p.tags.forEach(function (t) {
				if (seen.indexOf(t) === -1) seen.push(t);
			});
		});
		return seen;
	}

	function renderFilterNav() {
		var nav = document.getElementById('project-filter-nav');
		if (!nav) return;
		var ul = document.createElement('ul');
		ul.className = 'nav nav-tabs clearfix';

		function addTab(label, isCurrent) {
			var li = document.createElement('li');
			li.className = isCurrent ? 'current' : '';
			var a = document.createElement('a');
			a.href = '#';
			a.className = 'filter';
			a.textContent = label;
			a.dataset.filter = label;
			li.appendChild(a);
			ul.appendChild(li);
			return a;
		}

		var allTab = addTab('All', true);
		var tabs = [allTab];
		uniqueTags().forEach(function (tag) {
			tabs.push(addTab(tag, false));
		});

		ul.addEventListener('click', function (e) {
			var a = e.target.closest('a.filter');
			if (!a) return;
			e.preventDefault();
			tabs.forEach(function (t) {
				t.parentElement.classList.remove('current');
			});
			a.parentElement.classList.add('current');
			applyFilter(a.dataset.filter);
		});

		nav.appendChild(ul);
	}

	function applyFilter(tag) {
		var cards = document.querySelectorAll('#project-grid .project-card');
		cards.forEach(function (card) {
			var show = tag === 'All' || card.dataset.tags.split(',').indexOf(tag) !== -1;
			card.hidden = !show;
		});
	}

	function renderGrid() {
		var grid = document.getElementById('project-grid');
		if (!grid) return;

		projects.forEach(function (project, index) {
			var card = document.createElement('article');
			card.className = 'project-card' + (project.featured ? ' featured-project' : '');
			card.dataset.tags = project.tags.join(',');
			card.dataset.index = index;
			card.tabIndex = 0;
			card.setAttribute('role', 'button');
			card.setAttribute('aria-label', 'View details for ' + project.title);

			var thumbWrap = document.createElement('div');
			thumbWrap.className = 'project-card-thumb';

			if (project.featured) {
				var badge = document.createElement('span');
				badge.className = 'featured-badge';
				badge.innerHTML = '<i class="fas fa-star"></i>Featured';
				thumbWrap.appendChild(badge);
			}

			var img = document.createElement('img');
			img.src = imgPath(project, project.cover);
			img.alt = project.imgTitles[0] || project.title;
			img.loading = 'lazy';
			thumbWrap.appendChild(img);

			var body = document.createElement('div');
			body.className = 'project-card-body';

			var title = document.createElement('h3');
			title.className = 'project-card-title';
			title.textContent = project.title;

			var summary = document.createElement('p');
			summary.className = 'project-card-summary';
			summary.textContent = project.summary;

			var tagRow = document.createElement('div');
			tagRow.className = 'project-card-tags';
			project.tags.forEach(function (t) {
				var chip = document.createElement('span');
				chip.className = 'project-card-tag';
				chip.textContent = t;
				tagRow.appendChild(chip);
			});

			body.appendChild(title);
			body.appendChild(summary);
			body.appendChild(tagRow);

			card.appendChild(thumbWrap);
			card.appendChild(body);

			card.addEventListener('click', function () {
				openModal(index);
			});
			card.addEventListener('keydown', function (e) {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					openModal(index);
				}
			});

			grid.appendChild(card);
		});
	}

	// ---- Modal / detail view ----

	var modal, modalImage, modalCaption, modalCounter, modalTitle, modalDescription, modalButtons, modalPrev, modalNext, modalClose, modalBackdrop;
	var currentProject = null;
	var currentImageIndex = 0;

	function cacheModalRefs() {
		modal = document.getElementById('project-modal');
		if (!modal) return;
		modalImage = modal.querySelector('.project-modal-image');
		modalCaption = modal.querySelector('.project-modal-caption');
		modalCounter = modal.querySelector('.project-modal-counter');
		modalTitle = modal.querySelector('.project-modal-title');
		modalDescription = modal.querySelector('.project-modal-description');
		modalButtons = modal.querySelector('.project-modal-buttons');
		modalPrev = modal.querySelector('.project-modal-prev');
		modalNext = modal.querySelector('.project-modal-next');
		modalClose = modal.querySelector('.project-modal-close');
		modalBackdrop = modal.querySelector('.project-modal-backdrop');
	}

	function renderModalImage() {
		var project = currentProject;
		var file = project.images[currentImageIndex];
		modalImage.src = imgPath(project, file);
		modalImage.alt = project.imgTitles[currentImageIndex] || project.title;
		modalCaption.textContent = project.imgTitles[currentImageIndex] || '';
		modalCounter.textContent = project.images.length > 1
			? (currentImageIndex + 1) + ' / ' + project.images.length
			: '';
		var multi = project.images.length > 1;
		modalPrev.hidden = !multi;
		modalNext.hidden = !multi;
	}

	function openModal(index) {
		if (!modal) return;
		currentProject = projects[index];
		currentImageIndex = 0;

		modalTitle.textContent = currentProject.title;
		modalDescription.innerHTML = currentProject.description;

		modalButtons.innerHTML = '';
		currentProject.buttons.forEach(function (btn) {
			var a = document.createElement('a');
			a.href = btn.url;
			a.target = '_blank';
			a.rel = 'noopener';
			a.className = 'btn btn-cta-secondary';
			a.textContent = btn.title;
			modalButtons.appendChild(a);
		});

		renderModalImage();

		modal.hidden = false;
		document.body.classList.add('project-modal-open');
	}

	function closeModal() {
		if (!modal) return;
		modal.hidden = true;
		document.body.classList.remove('project-modal-open');
		currentProject = null;
		if (window.location.hash) {
			history.replaceState(null, '', window.location.pathname + window.location.search);
		}
	}

	function showRelativeImage(delta) {
		if (!currentProject || currentProject.images.length < 2) return;
		var count = currentProject.images.length;
		currentImageIndex = (currentImageIndex + delta + count) % count;
		renderModalImage();
	}

	function initModalEvents() {
		if (!modal) return;
		modalClose.addEventListener('click', closeModal);
		modalBackdrop.addEventListener('click', closeModal);
		modalPrev.addEventListener('click', function () { showRelativeImage(-1); });
		modalNext.addEventListener('click', function () { showRelativeImage(1); });
		document.addEventListener('keydown', function (e) {
			if (modal.hidden) return;
			if (e.key === 'Escape') closeModal();
			if (e.key === 'ArrowLeft') showRelativeImage(-1);
			if (e.key === 'ArrowRight') showRelativeImage(1);
		});
	}

	function openFromHash() {
		var hash = window.location.hash.replace('#', '');
		var index = parseInt(hash, 10);
		if (!isNaN(index) && index >= 0 && index < projects.length) {
			openModal(index);
		}
	}

	document.addEventListener('DOMContentLoaded', function () {
		renderFilterNav();
		renderGrid();
		cacheModalRefs();
		initModalEvents();
		openFromHash();
	});

	window.addEventListener('hashchange', openFromHash);
})();

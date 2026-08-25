"use strict";

(function () {
	var projectsPath = 'assets/images/projects/';

	var aiProjects = [
		{
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
			tags: ['Human-in-the-Loop Checkpoints'],
			featured: false
		},
		{
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
			tags: ['Automated Compliance Gating'],
			featured: false
		},
		{
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
			tags: ['Deterministic Gates over LLM Judgment'],
			featured: true
		},
		{
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
			tags: ['Structural Anti-Hallucination'],
			featured: false
		},
		{
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
			tags: ['Structural Anti-Hallucination'],
			featured: false
		},
		{
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
			tags: ['Automated Compliance Gating'],
			featured: false
		},
		{
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
			tags: ['Deterministic Gates over LLM Judgment'],
			featured: true
		}
	];

	var otherProjects = [
		{
			title: 'e-Learning for HKSARS — Government LMS Upgrade at Scale',
			summary: 'Led a government LMS upgrade serving 500+ daily users at 99% uptime.',
			description: 'Government-adopted Moodle-based learning management system for HKSAR — I led the Moodle v2 → v3 upgrade using Node.js and MongoDB, supporting 500+ daily users at 99% uptime.<br><br>Plugin and theme customizations met specific government requirements; code or interface access available on request.',
			folder: 'moodle',
			cover: 'landing_blurred_thumb.jpg',
			images: ['landing_blurred.jpg', 'home_blurred.jpg', 'course_list_blurred.jpg', 'course_intro.png', 'resource_list_blurred.png', 'lib_admin.png', 'lib_records_blurred.png'],
			imgTitles: ['Landing page', 'Home page', 'Course list', 'Course introduction', 'Resource list page', 'Links for Library admin role', 'Library book record list page'],
			buttons: [
				{ title: 'Live', url: 'https://carsonng.short.gy/elc-hksars-live' }
			],
			tags: ['Enterprise Systems'],
			featured: false
		},
		{
			title: 'Thermometer Interface — Smart Cooking Companion App (UX Prototype)',
			summary: 'Figma prototype validating a smart thermometer app\'s UX before a line of code was written.',
			description: 'An interactive Figma prototype for a smart cooking thermometer\'s companion app, built to pin down client requirements before a single line of app code was written — validating the interaction design and color system with stakeholders up front to avoid costly rework.<br><br>Figma source available on request.',
			folder: 'thermometer',
			cover: 'landing.jpg',
			images: ['landing_large.jpg', 'indicator2.jpg', 'setup_cook.jpg', 'paired_devices.jpg', 'dark_mode.jpg'],
			imgTitles: ['indicator 1', 'indicator 2', 'Setup Cook', 'Paired device list', 'Dark Mode'],
			buttons: [
				{ title: 'UIs in PDF', url: projectsPath + 'thermometer/ui.pdf' }
			],
			tags: ['Mobile & Product Design'],
			featured: false
		},
		{
			title: 'Andy Lau Fan Club App — Mobile Development for a HK Icon',
			summary: 'Mobile app for a Hong Kong icon and his official fan club.',
			description: 'Mobile app development for Andy Lau — a renowned Hong Kong actor and singer — and his fan club, Andy World Club.<br><br>Code and additional screenshots available on request.',
			folder: 'awc',
			cover: 'logo.jpg',
			images: ['landing.jpg', 'event_detail.jpg', 'popup.jpg', 'event_application.jpg', 'list_detail.jpg'],
			imgTitles: ['Landing page', 'Event detail', 'Popup', 'Event Application', 'List detail'],
			buttons: [],
			tags: ['Mobile & Product Design'],
			featured: false
		},
		{
			title: 'Dashijie E-Commerce — Laravel Refactor + AWS CI/CD',
			summary: 'Laravel refactor + AWS CI/CD scaling to 1,000+ daily API requests.',
			description: 'Refactored this Hong Kong e-commerce platform with Laravel and stood up its CI/CD pipeline — AWS EC2, CodePipeline, and Terraform — scaling it to 1,000+ daily API requests and improving transaction speed by 40%.<br><br>Ongoing customizations to the database, CMS, and coupon system for seasonal catalog changes; code and interface available on request.',
			folder: 'dsj',
			cover: 'front_thumb.PNG',
			images: ['front.PNG', 'magnifier.PNG', 'icon_design.PNG', 'cms.png'],
			imgTitles: ['Front page', 'Magnifier function in product detail page', 'Icon design', 'CMS'],
			buttons: [
				{ title: 'Live', url: 'https://carsonng.short.gy/dashijie-live' }
			],
			tags: ['E-Commerce & Payments'],
			featured: false
		},
		{
			title: 'Customized ERP — Hong Kong Technology Voucher Programme',
			summary: 'Client ERP systems delivered under Hong Kong\'s Technology Voucher Programme.',
			description: 'Custom Enterprise Resource Planning (ERP) systems delivered under Hong Kong\'s Technology Voucher Programme (TVP) — I owned requirements gathering and delivery for each client\'s unique accounting, HRM, and support-ticket workflows.<br><br>Demo credentials: admin@company.com / 123456. Code and interface available on request.',
			folder: 'erp',
			cover: 'accounting_dashboard_thumb.PNG',
			images: ['accounting_dashboard.PNG', 'login.PNG', 'role_permissions.PNG', 'support_ticket_system.PNG', 'chat_messenger.PNG', 'edit_insurance_policy.PNG', 'export_renewal_notice.PNG'],
			imgTitles: ['Accounting dashboard', 'login', 'Role permissions', 'Support ticket system', 'Chat messenger', 'Edit insurance policy', 'Export renewal notice'],
			buttons: [
				{ title: 'Demo', url: 'https://carsonng.short.gy/customized-erp-demo' }
			],
			tags: ['Enterprise Systems'],
			featured: false
		},
		{
			title: 'Property Management ERP — HRM & Task Management for Housing Estates',
			summary: 'Node.js ERP for HRM and task management across housing estates.',
			description: 'Internal property management ERP built on Node.js, adopted by a property management enterprise for HRM and task management across housing estates — I led requirements and delivery, with configurable options for other clients\' needs.<br><br>Code and interface available on request.',
			folder: 'elpms',
			cover: 'front.PNG',
			images: ['front.PNG', 'main_blurred.png', 'main_manager_blurred.png', 'search_blurred.png', 'complaint_blurred.png', 'users_manager_blurred.png'],
			imgTitles: ['Login', 'Front page', 'Main management', 'Search', 'Complaint', 'Users management'],
			buttons: [],
			tags: ['Enterprise Systems'],
			featured: false
		},
		{
			title: 'Poster Catalog — Joomla E-Commerce Build',
			summary: 'Joomla-built e-commerce catalog, live for demo access.',
			description: 'Poster catalog built on Joomla, live for demo access (username: demo / password: Testing!).<br><br>Backend panel available on request.',
			folder: 'sensai',
			cover: 'product_thumb.PNG',
			images: ['product.PNG', 'ss_main.jpg', '2.gif', '3.gif'],
			imgTitles: ['Product gallery', 'Front Page', 'Magnifier', 'Mapping between image area and table content'],
			buttons: [
				{ title: 'Live', url: 'https://carsonng.short.gy/poster-catalog-live' }
			],
			tags: ['E-Commerce & Payments'],
			featured: false
		},
		{
			title: 'Urban Projects — Architecture Studio Portfolio Site',
			summary: 'Architecture-studio portfolio site with a custom image carousel.',
			description: 'Architecture-studio portfolio site — including a Lantau Island villa development — with a custom image carousel, built and delivered end-to-end.<br><br>CMS available on request.',
			folder: 'urbanp',
			cover: 'front_thumb.png',
			images: ['front.PNG', 'gallery.PNG', 'gallery2.PNG'],
			imgTitles: ['Front page', 'Image carousel'],
			buttons: [
				{ title: 'Live', url: 'https://carsonng.short.gy/urban-project-live' }
			],
			tags: ['CMS & Web Platforms'],
			featured: false
		},
		{
			title: 'Association of Hong Kong Nursing Staff — Magento E-Commerce',
			summary: 'Magento storefront with order sync and secure payment integration.',
			description: 'Magento-based e-commerce site with custom order-confirmation API calls, a scheduled stock/customer-data sync job, and a secure third-party payment gateway integration.<br><br>Code or backend panel available on request.',
			folder: 'ahkns',
			cover: 'front_thumb.PNG',
			images: ['front.PNG', 'products.PNG', 'product.PNG'],
			imgTitles: ['Front page', 'Product Catalog', 'Product Detail'],
			buttons: [
				{ title: 'Live (for testing)', url: 'https://carsonng.short.gy/ahkns-live-test' }
			],
			tags: ['E-Commerce & Payments'],
			featured: false
		},
		{
			title: 'Project Management App — React Native + Odoo Integration',
			summary: 'React Native + Odoo-integrated project management app.',
			description: 'React Native project-management app with multilingual support, connected to an Odoo database — I drove the UAT process end-to-end with a dedicated internal testing build before production rollout.<br><br>Code available on request.',
			folder: 'sb',
			cover: 'landing_thumb.jpg',
			images: ['landing.jpg', 'departments.jpg', 'news.jpg', 'organisation.jpg', 'profile.jpg', 'projects.jpg'],
			imgTitles: ['Landing', 'Departments', 'News', 'Organisation', 'Profile', 'Projects'],
			buttons: [],
			tags: ['Enterprise Systems'],
			featured: false
		},
		{
			title: 'Hotel Payment Management — Stripe Pre-Auth & Capture System',
			summary: 'Stripe-based pre-auth and capture system for hotel bookings.',
			description: 'Online payment management system for hotels using the Stripe API to pre-authorize or capture customer card funds.<br><br>Code or interface available on request.',
			folder: 'stripe',
			cover: 'past_thumb.PNG',
			images: ['past.PNG', 'scheduled.PNG', 'new.PNG'],
			imgTitles: ['Past capture', 'Scheduled capture', 'New customer'],
			buttons: [],
			tags: ['E-Commerce & Payments'],
			featured: false
		},
		{
			title: 'WooCommerce Storefront — Custom WordPress E-Commerce Build',
			summary: 'Custom WordPress build with full WooCommerce e-commerce.',
			description: 'WordPress site integrated with WooCommerce for full e-commerce functionality, paired with custom design work for the static content pages.<br><br>Backend panel available on request.',
			folder: 'lhc',
			cover: 'front_thumb.png',
			images: ['front.PNG', 'products.PNG', 'cart_popup.PNG'],
			imgTitles: ['Front page', 'Product Catalog', 'Cart popup'],
			buttons: [
				{ title: 'Live (for testing)', url: 'https://carsonng.short.gy/wordpress-woocommerce-demo' }
			],
			tags: ['E-Commerce & Payments'],
			featured: false
		},
		{
			title: 'NLC City Church — Custom WordPress Development',
			summary: 'Custom WordPress site, still live in production today.',
			description: 'Custom WordPress design and development for the church\'s public site, still live in production today.<br><br>Backend panel available on request.',
			folder: 'nlc',
			cover: 'logo_thumb.jpg',
			images: ['front.PNG', 'life.PNG', 'news.PNG'],
			imgTitles: ['Front page', 'Life page', 'News page'],
			buttons: [
				{ title: 'Live', url: 'http://www.nlcitychurch.org.hk/' }
			],
			tags: ['CMS & Web Platforms'],
			featured: false
		},
		{
			title: 'Cross-Market SSO — Broker Platform Authentication',
			summary: 'One login across local and foreign markets for a broker platform.',
			description: 'Single sign-on (SSO) implementation for a broker agent site, letting users access both local and foreign markets with one login instead of separate sign-ins per platform.<br><br>Code available on request.',
			folder: 'mib',
			cover: 'front_thumb.PNG',
			images: ['front.PNG', 'login.PNG', 'info.PNG'],
			imgTitles: ['Front page', 'Login page', 'Info page'],
			buttons: [
				{ title: 'Live', url: 'https://carsonng.short.gy/sso-dev-live' }
			],
			tags: ['Enterprise Systems'],
			featured: false
		},
		{
			title: 'Citic Securities Broker Site — Self-Serve CMS & Database',
			summary: 'Self-serve CMS so a broker site owner can update content directly.',
			description: 'Backend CMS and database built for a broker agent site so the owner can self-serve content and menu updates instead of relying on developer changes for every edit.<br><br>Code available on request.',
			folder: 'csb',
			cover: 'logo_thumb.jpg',
			images: ['front.PNG', 'intro.PNG', 'news.PNG'],
			imgTitles: ['Front page', 'Intro page', 'News page'],
			buttons: [
				{ title: 'Live', url: 'https://carsonng.short.gy/citic-securities-live' }
			],
			tags: ['CMS & Web Platforms'],
			featured: false
		}
	];

	// Featured projects sort first within each section (stable -- relative
	// order otherwise unchanged), so this is the one place display order is
	// decided; hash indices and card order both derive from it.
	function featuredFirst(projects) {
		return projects
			.map(function (p, i) { return { p: p, i: i }; })
			.sort(function (a, b) {
				var byFeatured = (b.p.featured ? 1 : 0) - (a.p.featured ? 1 : 0);
				return byFeatured !== 0 ? byFeatured : a.i - b.i;
			})
			.map(function (entry) { return entry.p; });
	}

	aiProjects = featuredFirst(aiProjects);
	otherProjects = featuredFirst(otherProjects);

	// Global, flat project list. Index here is what #<n> hash deep-links use
	// and what each card's data-index refers to, so the two sections share
	// one modal without needing to know about each other.
	var allProjects = aiProjects.concat(otherProjects);

	var sections = [
		{ gridId: 'project-grid', navId: 'project-filter-nav', projects: aiProjects, offset: 0 },
		{ gridId: 'other-grid', navId: 'other-filter-nav', projects: otherProjects, offset: aiProjects.length }
	];

	function imgPath(project, file) {
		return projectsPath + project.folder + '/' + file;
	}

	function uniqueTags(projects) {
		var seen = [];
		projects.forEach(function (p) {
			p.tags.forEach(function (t) {
				if (seen.indexOf(t) === -1) seen.push(t);
			});
		});
		return seen;
	}

	function renderFilterNav(section) {
		var nav = document.getElementById(section.navId);
		if (!nav) return;
		var ul = document.createElement('ul');
		ul.className = 'nav nav-tabs clearfix';

		function addTab(label, count, isCurrent) {
			var li = document.createElement('li');
			li.className = isCurrent ? 'current' : '';
			var a = document.createElement('a');
			a.href = '#';
			a.className = 'filter';
			a.textContent = count === null ? label : label + ' (' + count + ')';
			a.dataset.filter = label;
			li.appendChild(a);
			ul.appendChild(li);
			return a;
		}

		var allTab = addTab('All', section.projects.length, true);
		var tabs = [allTab];
		uniqueTags(section.projects).forEach(function (tag) {
			var count = section.projects.filter(function (p) { return p.tags.indexOf(tag) !== -1; }).length;
			tabs.push(addTab(tag, count, false));
		});

		ul.addEventListener('click', function (e) {
			var a = e.target.closest('a.filter');
			if (!a) return;
			e.preventDefault();
			tabs.forEach(function (t) {
				t.parentElement.classList.remove('current');
			});
			a.parentElement.classList.add('current');
			applyFilter(section, a.dataset.filter);
		});

		nav.appendChild(ul);
	}

	function applyFilter(section, tag) {
		var cards = document.querySelectorAll('#' + section.gridId + ' .project-card');
		cards.forEach(function (card) {
			var show = tag === 'All' || card.dataset.tags.split(',').indexOf(tag) !== -1;
			card.hidden = !show;
		});
	}

	function renderGrid(section) {
		var grid = document.getElementById(section.gridId);
		if (!grid) return;

		section.projects.forEach(function (project, localIndex) {
			var globalIndex = section.offset + localIndex;
			var card = document.createElement('article');
			card.className = 'project-card' + (project.featured ? ' featured-project' : '');
			card.dataset.tags = project.tags.join(',');
			card.dataset.index = globalIndex;
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
				openModal(globalIndex);
			});
			card.addEventListener('keydown', function (e) {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					openModal(globalIndex);
				}
			});

			grid.appendChild(card);
		});
	}

	// ---- Modal / detail view (shared across both sections) ----

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
		currentProject = allProjects[index];
		if (!currentProject) return;
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
		if (!isNaN(index) && index >= 0 && index < allProjects.length) {
			openModal(index);
		}
	}

	document.addEventListener('DOMContentLoaded', function () {
		sections.forEach(function (section) {
			renderFilterNav(section);
			renderGrid(section);
		});
		cacheModalRefs();
		initModalEvents();
		openFromHash();
	});

	window.addEventListener('hashchange', openFromHash);
})();

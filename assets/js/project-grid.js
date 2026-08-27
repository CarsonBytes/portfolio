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
			featured: true,
			featuredOrder: 1
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
			featured: true,
			featuredOrder: 0
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
		},
		{
			title: 'How This Site Is Built',
			summary: 'One PHP preprocess, one vanilla-JS module, one render path — the whole codebase stays at inspection size.',
			description: 'A deliberately bounded stack: static PHP strips legacy comment blocks into clean HTML, and a single data-driven vanilla-JS module (<code>project-grid.js</code>) renders both project grids from one data source — no build step, no framework, no bundler.<br><br>A pre-commit Playwright smoke test guards every change (23 checks); CI rebuilds from source on every push, enforces a Lighthouse performance budget (0.8+ perf, ≤300KB JS, ≤1200KB total), and ships through Netlify + Cloudflare with an automated edge-purge via <code>deploy.ps1</code>.',
			folder: 'site_architecture',
			cover: 'cover.svg',
			images: [],
			imgTitles: [],
			buttons: [
				{ title: 'GitHub', url: 'https://github.com/CarsonBytes/portfolio' }
			],
			tags: ['Open Source'],
			featured: false
		}
	];

	var caseStudies = {
		change_impact_assessor: {
			problem: 'Code/infra changes get risk labels nobody acts on — a HIGH-risk flag that doesn\u2019t stop anything is just a comment.',
			constraint: 'High-stakes calls can\u2019t rest on LLM judgment, and the assessor must never invent incidents or services.',
			decision: 'HIGH-risk output pauses the LangGraph workflow behind a real interrupt + checkpointer until a human acknowledges; approvers are chosen by 3 deterministic rules; invented names are dropped against the service catalog.',
			outcome: 'Verified live against the production endpoint; CI scores precision, recall, and classification accuracy separately.'
		},
		aws_code_review: {
			problem: 'PR review comments get read eventually — over-privileged IAM roles and vulnerable dependencies still merge.',
			constraint: 'Findings must block, not advise, and the gate must run on every PR without a human remembering to check.',
			decision: 'Amazon Q Developer review + Amazon Inspector scanning gate every pull request; critical findings block the merge until resolved.',
			outcome: 'On a real example PR the bots caught an AdministratorAccess IAM role, a known-CVE dependency, and a missing CloudFormation security property — before merge.'
		},
		quant_dashboard: {
			problem: 'Trading on an LLM\u2019s market opinion is capital moving on a hunch.',
			constraint: 'No trade without a statistically proven edge; the LLM may inform but never decide.',
			decision: 'A walk-forward, deflated-Sharpe-tested backtester proves the edge first; a multi-agent analyst feeds a deterministic risk gate with explicit entry rules (strength, R:R, cooldown, de-correlation).',
			outcome: '80+ strategy ideas tested — one core edge plus one validated satellite survived; the public dashboard shows the live gate and the exact reason each blocked trade was blocked.'
		},
		sprint_analyzer: {
			problem: 'LLM-generated sprint metrics look plausible — and are occasionally invented.',
			constraint: 'Every number must trace to a row in the source export; the LLM must never be the source of a metric.',
			decision: 'A deterministic-numbers / LLM-prose split: pandas computes all metrics from Jira/ClickUp exports, and the LLM writes prose only.',
			outcome: '110+ unit tests run without an API key; validated against real production sprint data from led teams.'
		},
		event_radar: {
			problem: 'LLM-recommended events can be hallucinated — confidently wrong IDs that destroy user trust.',
			constraint: 'Recommendations must reference only real, currently-listed events, and API cost must stay bounded.',
			decision: 'Two-stage-plus-embedding ranking (keyword filter \u2192 semantic similarity \u2192 LLM rerank on the shortlist only); every LLM-referenced event is validated against the candidate set; thumbs feedback adjusts interest weights.',
			outcome: '150 tests; hallucinated IDs rejected in production; operated live with real bugs found and fixed (stale-cache header, HKT day-boundary usage bug).'
		},
		ai_regulation_radar: {
			problem: 'Regulatory text (EU AI Act, NIST AI RMF, HK PCPD) changes quietly — manual tracking doesn\u2019t scale.',
			constraint: 'Impact assessments must be grounded in the actual text diff, not the LLM\u2019s summary of its own memory.',
			decision: 'A daily cron diffs 4 regulatory sources; RAG + LLM generates plain-English impact assessments from the changed text; public/private views are one app filtered by content sensitivity.',
			outcome: 'Deployed on a dedicated GCP VM behind systemd + a dedicated Cloudflare Tunnel, monitoring 4 sources daily.'
		},
		command_deck: {
			problem: 'Automated recovery can fight an operator — restarting a service a human paused on purpose.',
			constraint: '\u201CIntentionally paused\u201D and \u201Cactually dead\u201D must be distinguishable states; cost and health must be visible across the whole fleet.',
			decision: 'A quarantine/restart-eligibility gate separates deliberate holds from liveness failures, alongside cross-project LLM cost tracking and Telegram alerting.',
			outcome: 'Monitors 9 live services with auto-heal and an incident log; the Governance tab shows a real quarantine lock engaged on a live service.'
		}
	};

	var ciBadges = {
		change_impact_assessor: { repo: 'CarsonBytes/change_impact_assessor', workflow: 'ci.yml', label: 'CI' },
		aws_code_review: { repo: 'CarsonBytes/aws_code_review', workflow: 'inspector-pr-scan.yml', label: 'Inspector scan' }
	};

	// Featured projects sort first within each section. Among featured
	// projects, explicit featuredOrder wins (lower first); otherwise falls
	// back to original array order -- stable either way. This is the one
	// place display order is decided; hash indices and card order both
	// derive from it.
	function featuredFirst(projects) {
		return projects
			.map(function (p, i) { return { p: p, i: i }; })
			.sort(function (a, b) {
				var byFeatured = (b.p.featured ? 1 : 0) - (a.p.featured ? 1 : 0);
				if (byFeatured !== 0) return byFeatured;
				if (a.p.featured && b.p.featured) {
					var aOrder = a.p.featuredOrder !== undefined ? a.p.featuredOrder : a.i;
					var bOrder = b.p.featuredOrder !== undefined ? b.p.featuredOrder : b.i;
					if (aOrder !== bOrder) return aOrder - bOrder;
				}
				return a.i - b.i;
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

		var countEl = document.createElement('p');
		countEl.className = 'project-filter-count';
		countEl.setAttribute('aria-live', 'polite');
		nav.appendChild(countEl);
		section.countEl = countEl;
		function updateCount() {
			var visible = 0;
			document.querySelectorAll('#' + section.gridId + ' .project-card').forEach(function (c) { if (!c.hidden) visible++; });
			countEl.textContent = 'Showing ' + visible + ' of ' + section.projects.length;
			var grid = document.getElementById(section.gridId);
			var empty = grid.querySelector('.project-grid-empty');
			if (visible === 0) {
				if (!empty) {
					empty = document.createElement('div');
					empty.className = 'project-grid-empty';
					empty.innerHTML = 'No projects match this filter. <button type="button">Clear filter</button>';
					empty.querySelector('button').addEventListener('click', function () {
						tabs.forEach(function (t) { t.parentElement.classList.remove('current'); });
						tabs[0].parentElement.classList.add('current');
						applyFilter(section, 'All');
					});
					grid.appendChild(empty);
				}
				empty.hidden = false;
			} else if (empty) empty.hidden = true;
		}
		nav.appendChild(ul);
		updateCount();
		section.updateCount = updateCount;
	}

	function applyFilter(section, tag) {
		var cards = document.querySelectorAll('#' + section.gridId + ' .project-card');
		cards.forEach(function (card) {
			var show = tag === 'All' || card.dataset.tags.split(',').indexOf(tag) !== -1;
			card.hidden = !show;
		});
		if (section.updateCount) section.updateCount();
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
			card.dataset.folder = project.folder;
			card.tabIndex = 0;
			card.setAttribute('role', 'button');
			card.setAttribute('aria-label', 'View details for ' + project.title);

			var thumbWrap = document.createElement('div');
			thumbWrap.className = 'project-card-thumb skeleton';

			if (project.featured) {
				var badge = document.createElement('span');
				badge.className = 'featured-badge';
				badge.innerHTML = '<svg class="svg-icon" aria-hidden="true"><use href="#i-star"/></svg>Featured';
				thumbWrap.appendChild(badge);
			}

			var img = document.createElement('img');
			img.src = imgPath(project, project.cover);
			img.alt = project.imgTitles[0] || project.title;
			img.loading = 'lazy';
			img.addEventListener('load', function () { thumbWrap.classList.remove('skeleton'); });
			img.addEventListener('error', function () { thumbWrap.classList.remove('skeleton'); img.style.display = 'none'; thumbWrap.style.background = '#e9eef2'; thumbWrap.style.display = 'flex'; thumbWrap.style.alignItems = 'center'; thumbWrap.style.justifyContent = 'center'; thumbWrap.insertAdjacentHTML('beforeend', '<span style="font-size:12px;color:#6c757d">Image unavailable</span>'); });
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
			var cta = document.createElement('span');
			cta.className = 'project-card-cta';
			cta.textContent = 'View case study \u2192';
			body.appendChild(cta);

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

	var modal, modalImage, modalCaption, modalCounter, modalTitle, modalDescription, modalButtons, modalPrev, modalNext, modalClose, modalBackdrop, modalThumbs, modalSpinner, modalGallery;
	var currentProject = null;
	var currentImageIndex = 0;
	var lastFocusedEl = null;

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
		modalGallery = modal.querySelector('.project-modal-gallery');
		modalTitle.id = 'project-modal-title';
		modal.querySelector('.project-modal-dialog').setAttribute('aria-labelledby', 'project-modal-title');
		modalSpinner = document.createElement('div');
		modalSpinner.className = 'project-modal-spinner';
		modalSpinner.hidden = true;
		modalGallery.appendChild(modalSpinner);
		modalThumbs = document.createElement('div');
		modalThumbs.className = 'project-modal-thumbs';
		modalThumbs.hidden = true;
		modalGallery.appendChild(modalThumbs);
	}

	function renderModalImage() {
		var project = currentProject;
		var file = project.images[currentImageIndex];
		modalSpinner.hidden = false;
		modalImage.onload = function () { modalSpinner.hidden = true; };
		modalImage.onerror = function () { modalSpinner.hidden = true; modalImage.alt = 'Image unavailable'; };
		modalImage.src = imgPath(project, file);
		modalImage.alt = project.imgTitles[currentImageIndex] || project.title;
		modalCaption.textContent = project.imgTitles[currentImageIndex] || '';
		modalCounter.textContent = project.images.length > 1
			? (currentImageIndex + 1) + ' / ' + project.images.length
			: '';
		var multi = project.images.length > 1;
		modalPrev.hidden = !multi;
		modalNext.hidden = !multi;
		renderThumbs();
	}

	function renderThumbs() {
		if (!modalThumbs || !currentProject) return;
		modalThumbs.innerHTML = '';
		if (currentProject.images.length < 2) { modalThumbs.hidden = true; modalCaption.style.bottom = '10px'; return; }
		modalThumbs.hidden = false;
		modalCaption.style.bottom = '68px';
		currentProject.images.forEach(function (file, idx) {
			var t = document.createElement('img');
			t.src = imgPath(currentProject, file);
			t.alt = currentProject.imgTitles[idx] || '';
			t.className = 'project-modal-thumb' + (idx === currentImageIndex ? ' active' : '');
			t.addEventListener('click', function () { currentImageIndex = idx; renderModalImage(); });
			modalThumbs.appendChild(t);
		});
	}

	function trapFocus(e) {
		if (modal.hidden || e.key !== 'Tab') return;
		var focusable = modal.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
		if (!focusable.length) return;
		var first = focusable[0], last = focusable[focusable.length - 1];
		if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
		else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
	}

	function openModal(index) {
		if (!modal) return;
		currentProject = allProjects[index];
		if (!currentProject) return;
		currentImageIndex = 0;

		modalTitle.textContent = currentProject.title;
		var cs = caseStudies[currentProject.folder];
		if (cs) {
			modalDescription.innerHTML =
				'<div class="case-study">' +
				'<div class="case-row"><span class="case-label">Problem</span><span>' + cs.problem + '</span></div>' +
				'<div class="case-row"><span class="case-label">Constraint</span><span>' + cs.constraint + '</span></div>' +
				'<div class="case-row"><span class="case-label">Governance decision</span><span>' + cs.decision + '</span></div>' +
				'<div class="case-row"><span class="case-label">Outcome</span><span>' + cs.outcome + '</span></div>' +
				'</div>';
		} else {
			modalDescription.innerHTML = currentProject.description;
		}

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
		var ci = ciBadges[currentProject.folder];
		if (ci) {
			var badgeLink = document.createElement('a');
			badgeLink.href = 'https://github.com/' + ci.repo + '/actions/workflows/' + ci.workflow;
			badgeLink.target = '_blank';
			badgeLink.rel = 'noopener';
			badgeLink.className = 'ci-badge';
			var badgeImg = document.createElement('img');
			badgeImg.src = 'https://github.com/' + ci.repo + '/actions/workflows/' + ci.workflow + '/badge.svg';
			badgeImg.alt = ci.label + ' status badge';
			badgeImg.loading = 'lazy';
			badgeLink.appendChild(badgeImg);
			modalButtons.appendChild(badgeLink);
		}
		renderModalImage();

		modal.hidden = false;
		document.body.classList.add('project-modal-open');
		lastFocusedEl = document.activeElement;
		modalClose.focus();
		document.addEventListener('keydown', trapFocus);
		if (window.location.hash !== '#' + currentProject.folder) {
			history.replaceState(null, '', '#' + currentProject.folder);
		}
	}

	function closeModal() {
		if (!modal) return;
		modal.hidden = true;
		document.body.classList.remove('project-modal-open');
		document.removeEventListener('keydown', trapFocus);
		currentProject = null;
		if (lastFocusedEl && lastFocusedEl.focus) try { lastFocusedEl.focus(); } catch(e) {}
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
		var hash = decodeURIComponent(window.location.hash.replace('#', ''));
		if (!hash) return;
		var index = parseInt(hash, 10);
		if (!isNaN(index) && index >= 0 && index < allProjects.length) {
			openModal(index);
			return;
		}
		var bySlug = -1;
		for (var i = 0; i < allProjects.length; i++) {
			if (allProjects[i].folder === hash) { bySlug = i; break; }
		}
		if (bySlug !== -1) openModal(bySlug);
	}

	function loadStatusDots() {
		fetch('assets/data/status.json')
			.then(function (r) { return r.ok ? r.json() : null; })
			.then(function (data) {
				if (!data || !data.services) return;
				document.querySelectorAll('.project-card').forEach(function (card) {
					var state = data.services[card.dataset.folder];
					if (state !== 'up' && state !== 'degraded') return;
					var thumb = card.querySelector('.project-card-thumb');
					if (!thumb) return;
					var dot = document.createElement('span');
					dot.className = 'status-dot' + (state === 'degraded' ? ' status-degraded' : '');
					dot.innerHTML = '<span class="status-dot-pulse"></span>' + (state === 'up' ? 'Live' : 'Degraded');
					thumb.appendChild(dot);
				});
			})
			.catch(function () {});
	}

	function injectProjectJsonLd() {
		aiProjects.forEach(function (p) {
			var urlBtn = p.buttons.filter(function (b) { return /demo|paper|live/i.test(b.title); })[0] || p.buttons[0];
			if (!urlBtn) return;
			var el = document.createElement('script');
			el.type = 'application/ld+json';
			el.textContent = JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'SoftwareApplication',
				'name': p.title,
				'description': p.summary,
				'url': urlBtn.url,
				'applicationCategory': 'WebApplication',
				'operatingSystem': 'Web',
				'author': { '@type': 'Person', 'name': 'Carson N.', 'url': 'https://carsonng.com/' }
			});
			document.head.appendChild(el);
		});
	}

	document.addEventListener('DOMContentLoaded', function () {
		sections.forEach(function (section) {
			renderFilterNav(section);
			renderGrid(section);
		});
		sections.forEach(function (section) {
			if (section.updateCount) section.updateCount();
		});
		cacheModalRefs();
		initModalEvents();
		openFromHash();
		injectProjectJsonLd();
		loadStatusDots();
	});

	window.addEventListener('hashchange', openFromHash);
})();

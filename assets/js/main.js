"use strict";

localStorage.setItem("darkSwitch", "dark");

/* Vanilla RSS - https://github.com/sdepold/vanilla-rss */

/* Github Calendar - https://github.com/IonicaBizau/github-calendar */
//new GitHubCalendar("#github-graph", "IonicaBizau", { responsive: true });
//new GitHubCalendar("#github-graph", "carsonng", { responsive: true, tooltips: true, cache: 10 });


/* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
//GitHubActivity.feed({ username: "mdo", selector: "#ghfeed" });
//GitHubActivity.feed({ username: "innoverz", selector: "#ghfeed" });
//GitHubActivity.feed({ username: "carsonng", selector: "#ghfeed" });

const $moodleGallery = document.getElementsByClassName('moodle_screenshots');
for (let i = 0; i < $moodleGallery.length; i++) {
	const moodleGallery = lightGallery($moodleGallery[i], {
		plugins: [lgThumbnail],
		download: false,
		thumbnail: true,
		animateThumb: false,
		zoomFromOrigin: false,
		allowMediaOverlap: true,
		toggleThumb: true,
		dynamic: true,
		dynamicEl: [
			{
				src: 'assets/images/projects/moodle/landing_blurred.jpg',
				thumb: 'assets/images/projects/moodle/landing_blurred_thumb.jpg',
				subHtml: '<p>Landing page</p>',
			},
			{
				src: 'assets/images/projects/moodle/home_blurred.jpg',
				thumb: 'assets/images/projects/moodle/home_blurred.jpg',
				subHtml: '<p>Home page</p>',
			},
			{
				src: 'assets/images/projects/moodle/course_list_blurred.jpg',
				thumb: 'assets/images/projects/moodle/course_list_blurred.jpg',
				subHtml: '<p>Course list</p>',
			},
			{
				src: 'assets/images/projects/moodle/course_intro.png',
				thumb: 'assets/images/projects/moodle/course_intro.png',
				subHtml: '<p>Course introduction</p>',
			},
			{
				src: 'assets/images/projects/moodle/resource_list_blurred.png',
				thumb: 'assets/images/projects/moodle/resource_list_blurred.png',
				subHtml: '<p>Resource list page</p>',
			},
			{
				src: 'assets/images/projects/moodle/lib_admin.png',
				thumb: 'assets/images/projects/moodle/lib_admin.png',
				subHtml: '<p>Links for Library admin role</p>',
			},
			{
				src: 'assets/images/projects/moodle/lib_records_blurred.png',
				thumb: 'assets/images/projects/moodle/lib_records_blurred.png',
				subHtml: '<p>Library book record list page</p>',
			},
		],
	});
	$moodleGallery[i].addEventListener('click', function (e) {
		e.preventDefault();
		moodleGallery.openGallery();
		return false;
	});
}

const $eCommerceGallery = document.getElementsByClassName('e-commerce_screenshots');
for (let i = 0; i < $eCommerceGallery.length; i++) {
	const eCommerceGallery = lightGallery($eCommerceGallery[i], {
		plugins: [lgThumbnail],
		download: false,
		thumbnail: true,
		animateThumb: false,
		zoomFromOrigin: false,
		allowMediaOverlap: true,
		toggleThumb: true,
		dynamic: true,
		dynamicEl: [
			{
				src: 'assets/images/projects/e-commerce/ahkns_home_blurred.jpg',
				thumb: 'assets/images/projects/e-commerce/ahkns_home_blurred.jpg',
				subHtml: '<p>Example 1</p>',
			},
			{
				src: 'assets/images/projects/e-commerce/dsj_home_blurred.jpg',
				thumb: 'assets/images/projects/e-commerce/dsj_home_blurred.jpg',
				subHtml: '<p>Example 2</p>',
			},
			{
				src: 'assets/images/projects/e-commerce/ss_main.jpg',
				thumb: 'assets/images/projects/e-commerce/ss_main.jpg',
				subHtml: '<p>Example 3</p>',
			},
		],
	});
	$eCommerceGallery[i].addEventListener('click', function (e) {
		e.preventDefault();
		eCommerceGallery.openGallery();
		return false;
	});
}

const $pmpGallery = document.getElementsByClassName('pmp_screenshots');
for (let i = 0; i < $pmpGallery.length; i++) {
	const pmpGallery = lightGallery($pmpGallery[i], {
		plugins: [lgThumbnail],
		download: false,
		thumbnail: true,
		animateThumb: false,
		zoomFromOrigin: false,
		allowMediaOverlap: true,
		toggleThumb: true,
		dynamic: true,
		dynamicEl: [
			{
				src: 'assets/images/projects/pmp/main_blurred.png',
				thumb: 'assets/images/projects/pmp/main_blurred.png',
				subHtml: '<p>Front page</p>',
			},
			{
				src: 'assets/images/projects/pmp/complaint_blurred.png',
				thumb: 'assets/images/projects/pmp/complaint_blurred.png',
				subHtml: '<p>Handle complaint page</p>',
			},
			{
				src: 'assets/images/projects/pmp/search_blurred.png',
				thumb: 'assets/images/projects/pmp/search_blurred.png',
				subHtml: '<p>Search page</p>',
			},
			{
				src: 'assets/images/projects/pmp/main_manager_blurred.png',
				thumb: 'assets/images/projects/pmp/main_manager_blurred.png',
				subHtml: '<p>Manage estates (Manager)</p>',
			},
			{
				src: 'assets/images/projects/pmp/users_manager_blurred.png',
				thumb: 'assets/images/projects/pmp/users_manager_blurred.png',
				subHtml: '<p>Manage users (Manager)</p>',
			},
		],
	});
	$pmpGallery[i].addEventListener('click', function (e) {
		e.preventDefault();
		pmpGallery.openGallery();
		return false;
	});
}

const $cmsGallery = document.getElementsByClassName('cms_screenshots');
for (let i = 0; i < $cmsGallery.length; i++) {
	const cmsGallery = lightGallery($cmsGallery[i], {
		plugins: [lgThumbnail],
		download: false,
		thumbnail: true,
		animateThumb: false,
		zoomFromOrigin: false,
		allowMediaOverlap: true,
		toggleThumb: true,
		dynamic: true,
		dynamicEl: [
			{
				src: 'assets/images/projects/cms/1.jpg',
				thumb: 'assets/images/projects/cms/1.jpg',
				subHtml: '<p>Product image magnifier</p>',
			},
			{
				src: 'assets/images/projects/cms/2.gif',
				thumb: 'assets/images/projects/cms/2.jpg',
				subHtml: '<p>Product image magnifier</p>',
			},
			{
				src: 'assets/images/projects/cms/3.gif',
				thumb: 'assets/images/projects/cms/3.jpg',
				subHtml: '<p>Image mapping with data table interaction</p>',
			},
		],
	});
	$cmsGallery[i].addEventListener('click', function (e) {
		e.preventDefault();
		cmsGallery.openGallery();
		return false;
	});
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function () {
	var folder = ['moodle', 'thermometer', 'awc', 'dsj', 'erp', 'elpms', 'sensai', 'urbanp', 'ahkns', 'sb', 'stripe', 'lhc', 'nlc', 'mib', 'csb'];
	var projects_path = 'assets/images/projects/';

	var images = [];
	images['moodle'] =['landing_blurred.jpg', 'home_blurred.jpg', 'course_list_blurred.jpg', 'course_intro.png', 'resource_list_blurred.png', 'lib_admin.png', 'lib_records_blurred.png'];
	images['thermometer'] = ['landing_large.jpg', 'indicator2.jpg', 'setup_cook.jpg', 'paired_devices.jpg', 'dark_mode.jpg'];
	images['awc'] = ['landing.jpg', 'event_detail.jpg', 'popup.jpg', 'event_application.jpg', 'list_detail.jpg'];
	images['dsj'] = ['front.PNG', 'magnifier.PNG', 'icon_design.PNG', 'cms.png'];
	images['erp'] = ['accounting_dashboard.PNG', 'login.PNG', 'role_permissions.PNG', 'support_ticket_system.PNG', 'chat_messenger.PNG', 'edit_insurance_policy.PNG', 'export_renewal_notice.PNG'];
	images['elpms'] = ['front.PNG', 'main_blurred.png', 'main_manager_blurred.png', 'search_blurred.png', 'complaint_blurred.png', 'users_manager_blurred.png'];
	images['sensai'] = ['product.PNG', 'ss_main.jpg', '2.gif', '3.gif'];
	images['urbanp'] = ['front.PNG', 'gallery.PNG', 'gallery2.PNG'];
	images['ahkns'] = ['front.PNG', 'products.PNG', 'product.PNG'];
	images['sb'] = ['landing.jpg', 'departments.jpg', 'news.jpg', 'organisation.jpg', 'profile.jpg', 'projects.jpg'];
	images['stripe'] = ['past.PNG', 'scheduled.PNG', 'new.PNG'];
	images['lhc'] = ['front.PNG', 'products.PNG', 'cart_popup.PNG'];
	images['nlc'] = ['front.PNG', 'life.PNG', 'news.PNG'];
	images['mib'] = ['front.PNG', 'login.PNG', 'info.PNG'];
	images['csb'] = ['front.PNG', 'intro.PNG', 'news.PNG'];

	var titles = [];
	titles['moodle'] =['Landing page', 'Home page', 'Course list', 'Course introduction', 'Resource list page', 'Links for Library admin role', 'Library book record list page']
	titles['thermometer'] = ['indicator 1', 'indicator 2', 'Setup Cook', 'Paired device list', 'Dark Mode'];
	titles['awc'] = ['Landing page', 'Event detail', 'Popup', 'Event Application', 'List detail'];
	titles['dsj'] = ['Front page', 'Magnifier function in product detail page', 'Icon design', 'CMS'];
	titles['erp'] = ['Accounting dashboard', 'login', 'Role permissions', 'Support ticket system', 'Chat messenger', 'Edit insurance policy', 'Export renewal notice'];
	titles['elpms'] = ['Login', 'Front page', 'Main management', 'Search', 'Complaint', 'Users management'];
	titles['sensai'] = ['Product gallery', 'Front Page', 'Magnifier', 'Mapping between image area and table content'];
	titles['urbanp'] = ['Front page', 'Image carousel'];
	titles['ahkns'] = ['Front page', 'Product Catalog', 'Product Detail'];
	titles['sb'] = ['Landing', 'Departments', 'News', 'Organisation', 'Profile', 'Projects'];
	titles['stripe'] = ['Past capture', 'Scheduled capture', 'New customer'];
	titles['lhc'] = ['Front page', 'Product Catalog', 'Cart popup'];
	titles['nlc'] = ['Front page', 'Life page', 'News page'];
	titles['mib'] = ['Front page', 'Login page', 'Info page'];
	titles['csb'] = ['Front page', 'Intro page', 'News page'];

	var covers = [];
	covers['moodle'] = 'landing_blurred_thumb.jpg';
	covers['thermometer'] = ['landing.jpg'];
	covers['awc'] = ['logo.jpg'];
	covers['dsj'] = ['front_thumb.PNG'];
	covers['erp'] = ['accounting_dashboard_thumb.PNG'];
	covers['sensai'] = ['product_thumb.PNG'];
	covers['urbanp'] = ['front_thumb.png'];
	covers['ahkns'] = ['front_thumb.PNG'];
	covers['sb'] = ['landing_thumb.jpg'];
	covers['stripe'] = ['past_thumb.PNG'];
	covers['lhc'] = ['front_thumb.png'];
	covers['nlc'] = ['logo_thumb.jpg'];
	covers['mib'] = ['front_thumb.PNG'];
	covers['csb'] = ['logo_thumb.jpg'];

	var thumbnail_paths = [];
	var large_paths = [];
	for (var key1 in folder) {
		/* console.log(folder[key1]) */
		large_paths[folder[key1]] = [];
		images[folder[key1]].forEach(element => {
			large_paths[folder[key1]].push(projects_path + folder[key1] + '/' + element);
		});
		thumbnail_paths[folder[key1]] = [...large_paths[folder[key1]]]
		if (folder[key1] in covers) {
			thumbnail_paths[folder[key1]][0] = projects_path + folder[key1] + '/' + covers[folder[key1]]
		}
	}
	/* console.log(thumbnail_paths)
	console.log(large_paths); */
	$("#elastic_grid_demo").elastic_grid({
		'showAllText': 'All',
		'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
		'hoverDirection': true,
		'hoverDelay': 0,
		'hoverInverse': false,
		'expandingSpeed': 500,
		'expandingHeight': 650,
		'items': [{
			'title': 'e-Learning for HKSARS',
			'description': 'Government-adopted Moodle-based learning management system for HKSAR — I led the Moodle v2 → v3 upgrade using Node.js and MongoDB, supporting 500+ daily users at 99% uptime.<br><br>Plugin and theme customization delivered to meet specific government requirements; code or interface access can be demonstrated upon request.',
			'thumbnail': thumbnail_paths['moodle'],
			'large': large_paths['moodle'],
			'img_title': titles['moodle'],
			'button_list': [{
				'title': 'Live',
				'url': 'https://carsonng.short.gy/elc-hksars-live',
				'new_window': true
			}
			],
			'tags': ['Cloud/DevOps', 'Technical Leadership']
		}, {
			'title': 'Thermometer Interface',
			'description': 'An interactive Figma prototype built to pin down client requirements before a single line of app code was written — validating the interaction design and color system with stakeholders up front to avoid costly rework.<br><br>Figma source link can be demonstrated upon request.',
			'thumbnail': thumbnail_paths['thermometer'],
			'large': large_paths['thermometer'],
			'img_title': titles['thermometer'],
			'button_list': [{
				'title': 'UIs in PDF',
				'url': projects_path + 'thermometer/ui.pdf',
				'new_window': true
			}
			],
			'tags': ['Technical Leadership', 'Full-Stack Engineering']
		}, {
			'title': 'App development for Andy Lau',
			'description': 'Mobile app development for Andy Lau, a renowned Hong Kong actor and singer, and his fan club Andy World Club.<br><br>Code or more screenshots can be demonstrated upon request.',
			'thumbnail': thumbnail_paths['awc'],
			'large': large_paths['awc'],
			'img_title': titles['awc'],
			'button_list': [
			],
			'tags': ['Full-Stack Engineering']
		}, {
			'title': 'Website development for Dashijie',
			'description': 'Refactored this Hong Kong e-commerce platform with Laravel and stood up its CI/CD pipeline — AWS EC2, CodePipeline, and Terraform — scaling it to 1,000+ daily API requests and improving transaction speed by 40%.<br><br>Ongoing customizations to the database, CMS, and coupon system for seasonal catalog changes; code and interface can be demonstrated upon request.',
			'thumbnail': thumbnail_paths['dsj'],
			'large': large_paths['dsj'],
			'img_title': titles['dsj'],
			'button_list': [{
				'title': 'Live',
				'url': 'https://carsonng.short.gy/dashijie-live',
				'new_window': true
			} /* , {
				'title': 'Interactive Prototype',
				'url': 'https://carsonng.short.gy/elc-hksars-live',
				'new_window': true
			} */
			],
			'tags': ['Cloud/DevOps', 'Technical Leadership']
		}, {
			'title': 'Customized ERP',
			'description': 'Custom Enterprise Resource Planning (ERP) systems delivered under Hong Kong\'s Technology Voucher Programme (TVP) — I owned requirements gathering and delivery for each client\'s unique accounting, HRM, and support-ticket workflows.<br><br>Demo credentials: admin@company.com / 123456. Code and interface can be demonstrated upon request.',
			'thumbnail': thumbnail_paths['erp'],
			'large': large_paths['erp'],
			'img_title': titles['erp'],
			'button_list': [{
				'title': 'Demo',
				'url': 'https://carsonng.short.gy/customized-erp-demo',
				'new_window': true
			}
			],
			'tags': ['Technical Leadership', 'Full-Stack Engineering']
		}, {
			'title': 'Property Management System',
			'description': 'Internal property management ERP built on Node.js, adopted by a property management enterprise for HRM and task management across housing estates — I led requirements and delivery, with configurable options for other clients\' needs.<br><br>Code and interface can be demonstrated upon request.',
			'thumbnail': thumbnail_paths['elpms'],
			'large': large_paths['elpms'],
			'img_title': titles['elpms'],
			'button_list': [
			],
			'tags': ['Technical Leadership', 'Full-Stack Engineering']
		}, {
			'title': 'Poster catalog',
			'description': 'Poster catalog built on the Joomla framework, live for demo access (username: demo / password: Testing!).<br><br>Backend panel can be demonstrated upon request.',
			'thumbnail': thumbnail_paths['sensai'],
			'large': large_paths['sensai'],
			'img_title': titles['sensai'],
			'button_list': [{
				'title': 'Live',
				'url': 'https://carsonng.short.gy/poster-catalog-live',
				'new_window': true
			}
			],
			'tags': ['Full-Stack Engineering']
		}, {
			'title': 'Urban Project',
			'description': 'Architecture-portfolio website with a custom image carousel, built and delivered end-to-end.<br><br>CMS can be demonstrated upon request.',
			'thumbnail': thumbnail_paths['urbanp'],
			'large': large_paths['urbanp'],
			'img_title': titles['urbanp'],
			'button_list': [{
				'title': 'Live',
				'url': 'https://carsonng.short.gy/urban-project-live',
				'new_window': true
			} /*, {
				'title': 'Interactive Prototype',
				'url': 'https://carsonng.short.gy/elc-hksars-live',
				'new_window': true
			} */
			],
			'tags': ['Full-Stack Engineering']
		}, {
			'title': 'Association of Hong Kong Nursing Staff',
			'description': 'Magento-based e-commerce site with custom order-confirmation API calls, a scheduled stock/customer-data sync job, and a secure third-party payment gateway integration.<br><br>Code or backend panel can be demonstrated upon request.',
			'thumbnail': thumbnail_paths['ahkns'],
			'large': large_paths['ahkns'],
			'img_title': titles['ahkns'],
			'button_list': [{
				'title': 'Live (for testing)',
				'url': 'https://carsonng.short.gy/ahkns-live-test',
				'new_window': true
			} /*, {
				'title': 'Interactive Prototype',
				'url': 'https://carsonng.short.gy/elc-hksars-live',
				'new_window': true
			} */
			],
			'tags': ['Full-Stack Engineering']
		}, {
			'title': 'App for Project Management',
			'description': 'React Native project-management app with multilingual support, connected to an Odoo database — I drove the UAT process end-to-end with a dedicated internal testing build before production rollout.<br><br>Code can be demonstrated upon request.',
			'thumbnail': thumbnail_paths['sb'],
			'large': large_paths['sb'],
			'img_title': titles['sb'],
			'button_list': [],
			'tags': ['Technical Leadership', 'Full-Stack Engineering']
		}, {
			'title': 'Management interface connected with Stripe payment',
			'description': 'Online payment management system for hotels using the Stripe API to pre-authorize or capture customer card funds.<br><br>Code or interface can be demonstrated upon request.',
			'thumbnail': thumbnail_paths['stripe'],
			'large': large_paths['stripe'],
			'img_title': titles['stripe'],
			'button_list': [/*{
				'title': 'Live',
				'url': 'https://eahkns.nurse.org.hk/',
				'new_window': true
			} , {
				'title': 'Interactive Prototype',
				'url': 'https://carsonng.short.gy/elc-hksars-live',
				'new_window': true
			} */
			],
			'tags': ['Full-Stack Engineering']
		}, {
			'title': 'Wordpress + WooCommerce',
			'description': 'WordPress site integrated with WooCommerce for full e-commerce functionality, paired with custom design work for the static content pages.<br><br>Backend panel can be demonstrated upon request.',
			'thumbnail': thumbnail_paths['lhc'],
			'large': large_paths['lhc'],
			'img_title': titles['lhc'],
			'button_list': [{
				'title': 'Live (for testing)',
				'url': 'https://carsonng.short.gy/wordpress-woocommerce-demo',
				'new_window': true
			}
			],
			'tags': ['Full-Stack Engineering']
		}, {
			'title': 'Wordpress development',
			'description': 'Custom WordPress site design and development for static content presentation.<br><br>Backend panel can be demonstrated upon request.',
			'thumbnail': thumbnail_paths['nlc'],
			'large': large_paths['nlc'],
			'img_title': titles['nlc'],
			'button_list': [{
				'title': 'Live',
				'url': 'http://www.nlcitychurch.org.hk/',
				'new_window': true
			}
			],
			'tags': ['Full-Stack Engineering']
		}, {
			'title': 'Single sign-on development',
			'description': 'Single sign-on (SSO) implementation for a broker agent site, letting users access both local and foreign markets with one login instead of separate sign-ins per platform.<br><br>Code can be demonstrated upon request.',
			'thumbnail': thumbnail_paths['mib'],
			'large': large_paths['mib'],
			'img_title': titles['mib'],
			'button_list': [{
				'title': 'Live',
				'url': 'https://carsonng.short.gy/sso-dev-live',
				'new_window': true
			}
			],
			'tags': ['Full-Stack Engineering']
		}, {
			'title': 'Maintenance for Citic Securities',
			'description': 'Backend CMS and database built for a broker agent site so the owner can self-serve content and menu updates instead of relying on developer changes for every edit.<br><br>Code can be demonstrated upon request.',
			'thumbnail': thumbnail_paths['csb'],
			'large': large_paths['csb'],
			'img_title': titles['csb'],
			'button_list': [{
				'title': 'Live',
				'url': 'https://carsonng.short.gy/citic-securities-live',
				'new_window': true
			}
			],
			'tags': ['Full-Stack Engineering']
		}
		]
	})

	$("#elastic_grid_demo").imagesLoaded(function () {
		if ($(location).attr('hash').substring(1) != '') {
			$('li[data-id="' + $(location).attr('hash').substring(1) + '"] a').trigger('click');
		}
	});

	$('body').on('mouseenter', 'img.related_photo', function () {
		$(this).tooltip('show')
	})

	$(window).on('hashchange', function () {
		if ($(location).attr('hash').substring(1) != '') {
			$('li[data-id="' + $(location).attr('hash').substring(1) + '"] a').trigger('click');
		}
	})

	document.getElementById('currentYear').textContent = new Date().getFullYear();
});
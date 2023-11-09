"use strict";

localStorage.setItem("darkSwitch", "dark");

/* Vanilla RSS - https://github.com/sdepold/vanilla-rss */

/* const rss = new RSS(
	document.querySelector("#rss-feeds"),
	//Change this to your own rss feeds
	"https://feeds.feedburner.com/TechCrunch/startups",
	{
		// how many entries do you want?
		// default: 4
		// valid values: any integer
		limit: 3,


		// will request the API via https
		// default: false
		// valid values: false, true
		ssl: true,

		// outer template for the html transformation
		// default: "<ul>{entries}</ul>"
		// valid values: any string
		layoutTemplate: "<div class='items'>{entries}</div>",

		// inner template for each entry
		// default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
		// valid values: any string
		entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>',

	}
);
rss.render(); */


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

$(function() {
	$("#elastic_grid_demo").elastic_grid({
		'showAllText': 'All',
		'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
		'hoverDirection': true,
		'hoverDelay': 0,
		'hoverInverse': false,
		'expandingSpeed': 500,
		'expandingHeight': 500,
		'items': [{
				'title': 'Azuki bean',
				'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail': ['jquery-elastic-grid-master/images/small/1.jpg', 'jquery-elastic-grid-master/images/small/2.jpg', 'jquery-elastic-grid-master/images/small/3.jpg', 'jquery-elastic-grid-master/images/small/10.jpg', 'jquery-elastic-grid-master/images/small/11.jpg'],
				'large': ['https://youtu.be/-6Xl9tBWt54', 'jquery-elastic-grid-master/images/large/2.jpg', 'jquery-elastic-grid-master/images/large/3.jpg', 'jquery-elastic-grid-master/images/large/10.jpg', 'jquery-elastic-grid-master/images/large/11.jpg'],
				'img_title': ['jquery elastic grid 1 ', 'jquery elastic grid 2', 'jquery elastic grid 3', 'jquery elastic grid 4', 'jquery elastic grid 5'],
				'button_list': [{
						'title': 'Demo',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					},
					{
						'title': 'Download',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': false
					}
				],
				'tags': ['Self Portrait']
			},
			{
				'title': 'Swiss chard pumpkin',
				'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail': ['jquery-elastic-grid-master/images/small/4.jpg', 'jquery-elastic-grid-master/images/small/5.jpg', 'jquery-elastic-grid-master/images/small/6.jpg', 'jquery-elastic-grid-master/images/small/7.jpg'],
				'large': ['jquery-elastic-grid-master/images/large/4.jpg', 'jquery-elastic-grid-master/images/large/5.jpg', 'jquery-elastic-grid-master/images/large/6.jpg', 'jquery-elastic-grid-master/images/large/7.jpg'],
				'img_title': ['jquery elastic grid 6 ', 'jquery elastic grid 7 ', 'jquery elastic grid 8', 'jquery elastic grid 9', 'jquery elastic grid 9'],
				'button_list': [{
						'title': 'Demo',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					},
					{
						'title': 'Download',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					}
				],
				'tags': ['Landscape']
			},
			{
				'title': 'Spinach winter purslane',
				'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail': ['jquery-elastic-grid-master/images/small/15.jpg', 'jquery-elastic-grid-master/images/small/8.jpg', 'jquery-elastic-grid-master/images/small/9.jpg', 'jquery-elastic-grid-master/images/small/10.jpg'],
				'large': ['jquery-elastic-grid-master/images/large/15.jpg', 'jquery-elastic-grid-master/images/large/8.jpg', 'jquery-elastic-grid-master/images/large/9.jpg', 'jquery-elastic-grid-master/images/large/10.jpg'],
				'img_title': ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
				'button_list': [{
						'title': 'Demo',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					},
					{
						'title': 'Download',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					}
				],
				'tags': ['Self Portrait', 'Landscape']
			},
			{
				'title': 'Aubergine napa cabbage',
				'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail': ['jquery-elastic-grid-master/images/small/12.jpg', 'jquery-elastic-grid-master/images/small/13.jpg', 'jquery-elastic-grid-master/images/small/14.jpg', 'jquery-elastic-grid-master/images/small/15.jpg', 'jquery-elastic-grid-master/images/small/16.jpg'],
				'large': ['jquery-elastic-grid-master/images/large/12.jpg', 'jquery-elastic-grid-master/images/large/13.jpg', 'jquery-elastic-grid-master/images/large/14.jpg', 'jquery-elastic-grid-master/images/large/15.jpg', 'jquery-elastic-grid-master/images/large/16.jpg'],
				'img_title': ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
				'button_list': [{
						'title': 'Demo',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					},
					{
						'title': 'Download',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					}
				],
				'tags': ['Portrait']
			},
			{
				'title': 'Swiss chard pumpkin',
				'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail': ['jquery-elastic-grid-master/images/small/17.jpg', 'jquery-elastic-grid-master/images/small/18.jpg', 'jquery-elastic-grid-master/images/small/19.jpg', 'jquery-elastic-grid-master/images/small/20.jpg'],
				'large': ['jquery-elastic-grid-master/images/large/17.jpg', 'jquery-elastic-grid-master/images/large/18.jpg', 'jquery-elastic-grid-master/images/large/19.jpg', 'jquery-elastic-grid-master/images/large/20.jpg'],
				'img_title': ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
				'button_list': [{
						'title': 'Demo',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					},
					{
						'title': 'Download',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					}
				],
				'tags': ['Landscape']
			},
			{
				'title': 'Spinach winter purslane',
				'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail': ['jquery-elastic-grid-master/images/small/13.jpg', 'jquery-elastic-grid-master/images/small/15.jpg', 'jquery-elastic-grid-master/images/small/11.jpg', 'jquery-elastic-grid-master/images/small/10.jpg'],
				'large': ['jquery-elastic-grid-master/images/large/13.jpg', 'jquery-elastic-grid-master/images/large/15.jpg', 'jquery-elastic-grid-master/images/large/11.jpg', 'jquery-elastic-grid-master/images/large/10.jpg'],
				'img_title': ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
				'button_list': [{
						'title': 'Demo',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					},
					{
						'title': 'Download',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					}
				],
				'tags': ['Vintage']
			},
			{
				'title': 'Spinach winter purslane',
				'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail': ['jquery-elastic-grid-master/images/small/7.jpg', 'jquery-elastic-grid-master/images/small/8.jpg', 'jquery-elastic-grid-master/images/small/9.jpg', 'jquery-elastic-grid-master/images/small/10.jpg'],
				'large': ['jquery-elastic-grid-master/images/large/7.jpg', 'jquery-elastic-grid-master/images/large/8.jpg', 'jquery-elastic-grid-master/images/large/9.jpg', 'jquery-elastic-grid-master/images/large/10.jpg'],
				'img_title': ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
				'button_list': [{
						'title': 'Demo',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					},
					{
						'title': 'Download',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					}
				],
				'tags': ['Portrait']
			},
			{
				'title': 'Azuki bean',
				'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail': ['jquery-elastic-grid-master/images/small/16.jpg', 'jquery-elastic-grid-master/images/small/13.jpg', 'jquery-elastic-grid-master/images/small/14.jpg', 'jquery-elastic-grid-master/images/small/15.jpg', 'jquery-elastic-grid-master/images/small/16.jpg'],
				'large': ['jquery-elastic-grid-master/images/large/16.jpg', 'jquery-elastic-grid-master/images/large/13.jpg', 'jquery-elastic-grid-master/images/large/14.jpg', 'jquery-elastic-grid-master/images/large/15.jpg', 'jquery-elastic-grid-master/images/large/16.jpg'],
				'img_title': ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
				'button_list': [{
						'title': 'Demo',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					},
					{
						'title': 'Download',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					}
				],
				'tags': ['Vintage']
			},
			{
				'title': 'Swiss chard pumpkin',
				'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail': ['jquery-elastic-grid-master/images/small/18.jpg', 'jquery-elastic-grid-master/images/small/18.jpg', 'jquery-elastic-grid-master/images/small/19.jpg', 'jquery-elastic-grid-master/images/small/20.jpg'],
				'large': ['jquery-elastic-grid-master/images/large/18.jpg', 'jquery-elastic-grid-master/images/large/18.jpg', 'jquery-elastic-grid-master/images/large/19.jpg', 'jquery-elastic-grid-master/images/large/20.jpg'],
				'img_title': ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
				'button_list': [{
						'title': 'Demo',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					},
					{
						'title': 'Download',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					}
				],
				'tags': ['Landscape']
			},
			{
				'title': 'Winter purslane',
				'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail': ['jquery-elastic-grid-master/images/small/11.jpg', 'jquery-elastic-grid-master/images/small/15.jpg', 'jquery-elastic-grid-master/images/small/11.jpg', 'jquery-elastic-grid-master/images/small/10.jpg'],
				'large': ['jquery-elastic-grid-master/images/large/11.jpg', 'jquery-elastic-grid-master/images/large/15.jpg', 'jquery-elastic-grid-master/images/large/11.jpg', 'jquery-elastic-grid-master/images/large/10.jpg'],
				'img_title': ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
				'button_list': [{
						'title': 'Demo',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					},
					{
						'title': 'Download',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					}
				],
				'tags': ['Portrait']
			},
			{
				'title': 'Spinach winter purslane',
				'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail': ['jquery-elastic-grid-master/images/small/3.jpg', 'jquery-elastic-grid-master/images/small/15.jpg', 'jquery-elastic-grid-master/images/small/11.jpg', 'jquery-elastic-grid-master/images/small/10.jpg'],
				'large': ['jquery-elastic-grid-master/images/large/3.jpg', 'jquery-elastic-grid-master/images/large/15.jpg', 'jquery-elastic-grid-master/images/large/11.jpg', 'jquery-elastic-grid-master/images/large/10.jpg'],
				'img_title': ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
				'button_list': [{
						'title': 'Demo',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					},
					{
						'title': 'Download',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					}
				],
				'tags': ['Vintage']
			},
			{
				'title': 'Spinach winter purslane',
				'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail': ['jquery-elastic-grid-master/images/small/5.jpg', 'jquery-elastic-grid-master/images/small/8.jpg', 'jquery-elastic-grid-master/images/small/9.jpg', 'jquery-elastic-grid-master/images/small/10.jpg'],
				'large': ['jquery-elastic-grid-master/images/large/5.jpg', 'jquery-elastic-grid-master/images/large/8.jpg', 'jquery-elastic-grid-master/images/large/9.jpg', 'jquery-elastic-grid-master/images/large/10.jpg'],
				'img_title': ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
				'button_list': [{
						'title': 'Demo',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					},
					{
						'title': 'Download',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					}
				],
				'tags': ['Portrait', 'Landscape']
			},
			{
				'title': 'Azuki bean',
				'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail': ['jquery-elastic-grid-master/images/small/6.jpg', 'jquery-elastic-grid-master/images/small/13.jpg', 'jquery-elastic-grid-master/images/small/14.jpg', 'jquery-elastic-grid-master/images/small/15.jpg', 'jquery-elastic-grid-master/images/small/16.jpg'],
				'large': ['jquery-elastic-grid-master/images/large/6.jpg', 'jquery-elastic-grid-master/images/large/13.jpg', 'jquery-elastic-grid-master/images/large/14.jpg', 'jquery-elastic-grid-master/images/large/15.jpg', 'jquery-elastic-grid-master/images/large/16.jpg'],
				'img_title': ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
				'button_list': [{
						'title': 'Demo',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					},
					{
						'title': 'Download',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					}
				],
				'tags': ['Vintage']
			},
			{
				'title': 'Swiss chard pumpkin',
				'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail': ['jquery-elastic-grid-master/images/small/8.jpg', 'jquery-elastic-grid-master/images/small/18.jpg', 'jquery-elastic-grid-master/images/small/19.jpg', 'jquery-elastic-grid-master/images/small/20.jpg'],
				'large': ['jquery-elastic-grid-master/images/large/8.jpg', 'jquery-elastic-grid-master/images/large/18.jpg', 'jquery-elastic-grid-master/images/large/19.jpg', 'jquery-elastic-grid-master/images/large/20.jpg'],
				'img_title': ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
				'button_list': [{
						'title': 'Demo',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					},
					{
						'title': 'Download',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					}
				],
				'tags': ['Landscape']
			},
			{
				'title': 'Spinach winter purslane',
				'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail': ['jquery-elastic-grid-master/images/small/9.jpg', 'jquery-elastic-grid-master/images/small/15.jpg', 'jquery-elastic-grid-master/images/small/11.jpg', 'jquery-elastic-grid-master/images/small/10.jpg'],
				'large': ['jquery-elastic-grid-master/images/large/9.jpg', 'jquery-elastic-grid-master/images/large/15.jpg', 'jquery-elastic-grid-master/images/large/11.jpg', 'jquery-elastic-grid-master/images/large/10.jpg'],
				'img_title': ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
				'button_list': [{
						'title': 'Demo',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					},
					{
						'title': 'Download',
						'url': 'http://porfolio.bonchen.net/',
						'new_window': true
					}
				],
				'tags': ['Vintage', 'Landscape']
			}

		]
	});
});
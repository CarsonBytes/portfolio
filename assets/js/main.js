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
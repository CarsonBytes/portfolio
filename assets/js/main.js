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
new GitHubCalendar("#github-graph", "carsonng", { responsive: true, tooltips: true, cache: 10 });


/* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
//GitHubActivity.feed({ username: "mdo", selector: "#ghfeed" });
//GitHubActivity.feed({ username: "innoverz", selector: "#ghfeed" });
//GitHubActivity.feed({ username: "carsonng", selector: "#ghfeed" });


const $dynamicGallery = document.getElementById('dynamic-gallery-demo');
const dynamicGallery = lightGallery($dynamicGallery, {
	addClass: 'lg-can-toggle',
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
			src: 'assets/images/projects/project-1.png',
			thumb: 'assets/images/projects/project-1.png',
			subHtml: '<h4>Image 1 title</h4><p>Image 1 descriptions.</p>',
		},
		{
			src: 'assets/images/projects/project-2.png',
			thumb: 'assets/images/projects/project-2.png',
			subHtml: '<h4>Image 2 title</h4><p>Image 2 descriptions.</p>',
		},
		{
			src: 'assets/images/projects/project-3.png',
			thumb: 'assets/images/projects/project-3.png',
			subHtml: '<h4>Image 3 title</h4><p>Image 3 descriptions.</p>',
		},
	],
});
$dynamicGallery.addEventListener('click', function (e) {
	e.preventDefault();
	// Starts with third item.(Optional).
	// This is useful if you want use dynamic mode with
	// custom thumbnails (thumbnails outside gallery),
	//dynamicGallery.openGallery(2);
	dynamicGallery.openGallery();
	return false;
});


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
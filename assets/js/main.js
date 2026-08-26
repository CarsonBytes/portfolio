"use strict";

if (localStorage.getItem("darkSwitch") === null && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
	localStorage.setItem("darkSwitch", "dark");
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.getElementById('currentYear').textContent = new Date().getFullYear();

(function () {
	var backBtn = document.getElementById('backToTop');
	if (backBtn) {
		window.addEventListener('scroll', function () {
			if (window.scrollY > 800) backBtn.classList.add('visible');
			else backBtn.classList.remove('visible');
		}, { passive: true });
		backBtn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
	}
	var navLinks = document.querySelectorAll('.section-nav a');
	var sections = [];
	navLinks.forEach(function (a) {
		var id = a.getAttribute('href').slice(1);
		var el = document.getElementById(id);
		if (el) sections.push({ id: id, el: el, link: a });
	});
	if (sections.length && 'IntersectionObserver' in window) {
		var obs = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					var id = entry.target.id;
					navLinks.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + id); });
				}
			});
		}, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
		sections.forEach(function (s) { obs.observe(s.el); });
		navLinks.forEach(function (a) {
			a.addEventListener('click', function (e) {
				e.preventDefault();
				var target = document.getElementById(a.getAttribute('href').slice(1));
				if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				history.replaceState(null, '', a.getAttribute('href'));
			});
		});
	}
})();

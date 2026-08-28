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
	var ticking = false;
	function updateActive() {
		var nav = document.querySelector('.section-nav');
		var navBottom = nav ? nav.offsetHeight + 8 : 60;
		var best = null, bestDist = Infinity;
		navLinks.forEach(function (a) {
			var el = document.getElementById(a.getAttribute('href').slice(1));
			if (!el) return;
			var d = el.getBoundingClientRect().top - navBottom;
			var dist = d <= 0 ? 10000 - d : d + 10000;
			if (dist < bestDist) { bestDist = dist; best = a; }
		});
		navLinks.forEach(function (l) { l.classList.toggle('active', l === best); });
		ticking = false;
	}
	if (navLinks.length) {
		window.addEventListener('scroll', function () {
			if (!ticking) { requestAnimationFrame(updateActive); ticking = true; }
		}, { passive: true });
		window.addEventListener('resize', updateActive);
		navLinks.forEach(function (a) {
			a.addEventListener('click', function (e) {
				e.preventDefault();
				navLinks.forEach(function (l) { l.classList.remove('active'); });
				a.classList.add('active');
				var target = document.getElementById(a.getAttribute('href').slice(1));
				if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				history.replaceState(null, '', a.getAttribute('href'));
				setTimeout(updateActive, 350);
			});
		});
		updateActive();
	}
})();

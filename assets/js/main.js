"use strict";

if (localStorage.getItem("darkSwitch") === null && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
	localStorage.setItem("darkSwitch", "dark");
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.getElementById('currentYear').textContent = new Date().getFullYear();

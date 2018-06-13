'use strict';

function Slider(mainMenu) {
	mainMenu.querySelector('li').classList.add('slide-current');
	const next = mainMenu.querySelector('a[data-action="next"]');
	const prev = mainMenu.querySelector('a[data-action="prev"]');
	const first = mainMenu.querySelector('a[data-action="first"]');
	const last = mainMenu.querySelector('a[data-action="last"]');

	prev.classList.add('disabled');
	first.classList.add('disabled');

	next.addEventListener('click', (event) => moveSlider(true));
	prev.addEventListener('click', (event) => moveSlider(false));
	first.addEventListener('click', (event) => lastSlider(false));
	last.addEventListener('click', (event) => lastSlider(true));

	function moveSlider(activeSlide) {
		const currentSlide = mainMenu.querySelector('.slide-current');
		const activatedSlide = activeSlide ? currentSlide.nextElementSibling : currentSlide.previousElementSibling;

		currentSlide.classList.remove('slide-current');
		activatedSlide.classList.add('slide-current'); 

		next.classList.toggle('disabled', activatedSlide.nextElementSibling == null);
		last.classList.toggle('disabled', activatedSlide.nextElementSibling == null);
		prev.classList.toggle('disabled', activatedSlide.previousElementSibling == null);
		first.classList.toggle('disabled', activatedSlide.previousElementSibling == null);
}

	function lastSlider(activeSlide) {
		const currentSlide = mainMenu.querySelector('.slide-current');
		const activatedSlide = activeSlide ? currentSlide.parentElement.lastElementChild : currentSlide.parentElement.firstElementChild;
		currentSlide.classList.remove('slide-current');
		activatedSlide.classList.add('slide-current'); 

		next.classList.toggle('disabled', activatedSlide.nextElementSibling == null);
		last.classList.toggle('disabled', activatedSlide.nextElementSibling == null);
		prev.classList.toggle('disabled', activatedSlide.previousElementSibling == null);
		first.classList.toggle('disabled', activatedSlide.previousElementSibling == null);
	}
}

const slider = document.querySelectorAll('.slider');
Array.from(slider).forEach(item => Slider(item));


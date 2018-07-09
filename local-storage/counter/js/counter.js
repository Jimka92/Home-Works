'use strict';

const counter = document.querySelector('#counter');
const addCount = document.querySelector('#increment');
const removeCount = document.querySelector('#decrement');
const resetCount = document.querySelector('#reset');

function calcCounter (event) {
	let count = localStorage.getItem('count');

	if (event.target.id === 'increment') {
		counter.textContent = ++count;
		removeCount.disabled = false;
	}

	if ((event.target.id === 'decrement') && !removeCount.disabled) {
		counter.textContent = --count;
	}

	count === 0 ? minusCount.disabled = true : removeCount.disabled = false;
	localStorage.setItem('count', count);
}

function resetCounter () {
	localStorage.setItem('count', 0);
	counter.textContent = localStorage.getItem('count');
	removeCount.disabled = true;
}

localStorage.getItem('count') ? counter.textContent = localStorage.getItem('count') : localStorage.setItem('count', 0);
localStorage.getItem('count') === '0' ? removeCount.disabled = true : removeCount.disabled = false;

addCount.addEventListener('click', calcCounter);
removeCount.addEventListener('click', calcCounter);
resetCount.addEventListener('click', resetCounter);

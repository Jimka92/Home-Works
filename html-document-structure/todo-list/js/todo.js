'use strict';

const mainTodo = document.querySelector('.todo-list');
const done = mainTodo.querySelector('.done');
const undone = mainTodo.querySelector('.undone');
const inputs = mainTodo.querySelectorAll('input');

function todo() {
		console.log(this.hasAttribute('checked'))

		if (this.hasAttribute('checked')) {
			undone.appendChild(this.parentElement)
			this.removeAttribute('checked');
		} else {
			done.appendChild(this.parentElement);
			this.setAttribute('checked', true);
		}
	}
Array.from(inputs).forEach(input => input.addEventListener('click',todo));
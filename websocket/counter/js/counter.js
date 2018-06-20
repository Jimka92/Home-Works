'use strict';

const outputCounter = document.querySelector('.counter');
const outputErrors = document.querySelector('.errors');
const connection = new WebSocket('wss://neto-api.herokuapp.com/counter');

connection.addEventListener('message', event => {
	let message = JSON.parse(event.data);
	outputCounter.innerText = `${message.connections}`;
	outputErrors.value = `${message.errors}`;
});

window.addEventListener('beforeunload', () => {
	connection.close(1000)
})

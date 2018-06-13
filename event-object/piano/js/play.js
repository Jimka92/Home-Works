"use strict";

// Перечислим звуки клавиш

const higher = ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3'];
const lower = ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3'];
const middle = ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3'];

const setOfSounds = document.getElementsByClassName('set')[0]; //первый элемент коллекции
const keyPiano = document.getElementsByTagName('li'); //коллекция тэгов списка
const player = document.getElementsByTagName('audio'); //коллекция вудио тегов

const arrayKeyPiano = Array.from(keyPiano); //создадим массив из элементов коллекции

function song(event){
	if (event.altKey){ // при нажатой alt 
		setOfSounds.classList.remove('middle'); //удаляем и добавляем классы
		setOfSounds.classList.remove('lower');
		setOfSounds.classList.add('higher');
		player[arrayKeyPiano.indexOf(this)].src = `sounds/higher/${higher[arrayKeyPiano.indexOf(this)]}`; //прописываем путь к файлу 
		player[arrayKeyPiano.indexOf(this)].play(); 
	}else if (event.shiftKey){ //когда зажата клавиша shiftKey 
			setOfSounds.classList.remove('middle');
			setOfSounds.classList.remove('higher');
			setOfSounds.classList.add('lower');
			player[arrayKeyPiano.indexOf(this)].src = `sounds/lower/${lower[arrayKeyPiano.indexOf(this)]}`;
			player[arrayKeyPiano.indexOf(this)].play();
	}else{ // во всех иных случаях
		setOfSounds.classList.remove('lower');
		setOfSounds.classList.remove('higher');
		setOfSounds.classList.add('middle');
		player[arrayKeyPiano.indexOf(this)].src = `sounds/middle/${middle[arrayKeyPiano.indexOf(this)]}`;
		player[arrayKeyPiano.indexOf(this)].play();
	}
}

// Перебираем элементы массива
for (const key of arrayKeyPiano){
	key.addEventListener('click', song); // Добавляем обработчик событий
}

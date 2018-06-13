"use strict";

const list = document.getElementsByTagName('li');
const listArray = Array.from(list);

listArray.forEach((item) =>{
	const audio = item.getElementsByTagName('audio')[0];
	item.onclick = () => {
		audio.play();
	};
});
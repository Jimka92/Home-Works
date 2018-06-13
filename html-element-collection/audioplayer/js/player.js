'use strict';

let data = [ //список песен
	{
		titleSong: 'LA Chill Tour',
		url: 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Chill Tour.mp3'
	},
	{
		titleSong:'This is it band',
		url: 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This is it band.mp3'
	},
	{
		titleSong:'LA Fusion Jam',
		url: 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Fusion Jam.mp3'
	}
]


const controls = document.getElementsByClassName('controls')[0]; 
const title = controls.getElementsByClassName('title')[0];

const mediaplayer = document.getElementsByClassName('mediaplayer')[0];
const player = mediaplayer.getElementsByTagName('audio')[0];

const playState = document.getElementsByClassName('playstate')[0];

const play = playState.getElementsByClassName('fa-play')[0];
const pause = playState.getElementsByClassName('fa-pause')[0];

const stop = document.getElementsByClassName('stop')[0];

const backward = document.getElementsByClassName('back')[0];
const forward = document.getElementsByClassName('next')[0];


//const mediaplayer = document.getElementsByClassName('mediaplayer')[0];



// Хотел использовать JSON но почему-то не получилось. 
// Завершается ошибкой "переменная data не определена".
// Хотя в консоль информацию выводит
/*
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("test.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});


*/

let step = -1; //счетчик

function nextSong(){
	step += 1; //счетчик увеличиваем на 1 
	if (step === data.length) { // если доспигли конца массива
		step = 0; // обнуляем счетчик
	}

	title.title = data[step].titleSong; //в title записываем название песни
	player.src = data[step].url;	// в scr  путь

	if (!mediaplayer.classList.contains('play')) { // если в списке классов нет play
		player.pause(); // останавливаем 
	} else {
	 	player.play();// иначе проигрываем  
           }
}

function prevSong(){
	step -= 1;	//счетчик уменьшаем на 1 
	if (step < 0) {
		step = data.length-1;
	}

	title.title = data[step].titleSong;
	player.src = data[step].url;

	if (!mediaplayer.classList.contains('play')) {
		player.pause();
	} else {
	 	player.play();
    	   }
}

function playSong(){ //функция проигрывания музыки
	if (player.paused == true) { // если стоит на паузе 
		play.style.display = 'none' //прячем кнопку play
		pause.style.display = 'inline-block' // показываем кнопку пауза
		mediaplayer.classList.add('play'); // в список классов добавляем класс play
		player.play(); // запускаем проигрыватель
	 } else {
	 	pause.style.display = 'none'
		play.style.display = 'inline-block'
		mediaplayer.classList.remove('play');// из списка классов удаляем класс play
		player.pause();
           }
}



//останавливаем музыку
stop.onclick = () => {
	player.pause(); //ставим на паузу
	player.currentTime = 0; // время сбрасываем на 0
	pause.style.display = 'none'
	play.style.display = 'inline-block'
	mediaplayer.classList.remove('play');
}

nextSong(); 
//pause.onclick = playSong;
//play.onclick = playSong;
playState.onclick = playSong;
forward.onclick = nextSong;
backward.onclick = prevSong;



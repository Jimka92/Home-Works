'use strict';

// Открытие меню //
const menu = document.getElementsByTagName('nav')[0];

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.altKey && event.code === 'KeyT') {
    menu.classList.toggle('visible');
  } else {
    return;
  }
});

// Реализация пасхалки //
const secret = document.getElementsByClassName('secret')[0];
const netologyCode = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];
let step = 0;

document.addEventListener('keydown', (event) => {
  if (event.code === netologyCode[step]) {
    step++;
  } else {
    step = 0;
  }
  
  if (step === netologyCode.length) {
    secret.classList.add('visible');
  }
});
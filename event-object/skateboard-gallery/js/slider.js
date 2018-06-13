'use strict';

const galeryNavigation = document.getElementById('nav'); //Ссылка на элемент
const links = document.getElementsByTagName('a'); // Коллекция из тегов
const galleryView = document.getElementById('view'); // Ссылка на элемент


function view(event){
  event.preventDefault(); // Отмена действия
  galleryView.src = this.href // Путь
  if (this.classList.contains('gallery-current')){
   return;
  }
  
  
  for (const link of links){ // Перебор коллекции элементов
    link.classList.remove('gallery-current') // удаление элемента из атрибута
    link.removeAttribute('class') // удаление пустого атрибута
  }
  this.classList.add('gallery-current'); //добавление элементов в класс
}


Array.from(links).forEach(link => link.addEventListener('click', view));
// Создаем массив и дял каждого элемента обработчик


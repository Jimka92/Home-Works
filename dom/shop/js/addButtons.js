'use strict';

const addButtons = document.querySelectorAll('.add');
const cartCount = document.querySelector('#cart-count');
const cartTotalPrice = document.querySelector('#cart-total-price');
let counter = 0;
let totalPrice = 0;

function addItemBox(){
	cartCount.innerHTML = ++counter;
	totalPrice += +this.dataset.price;
	cartTotalPrice.innerHTML = getPriceFormatted(totalPrice);	
}

for (const key of addButtons){ 
	key.addEventListener('click', addItemBox); 
}

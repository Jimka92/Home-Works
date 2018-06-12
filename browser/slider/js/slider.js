'use strict';

var imgArray = [
'airmax-jump.png',
'airmax-on-foot.png',
'airmax-playground.png',
'airmax-top-view.png',
'airmax.png']

const slider = document.getElementById('slider');
let step = 0;

function showSlider(){
	if (step === imgArray.length) {
		step = 0;
	}
	slider.src = `i/${imgArray[step]}`;
	step += 1;
}

setInterval(showSlider, 5000);

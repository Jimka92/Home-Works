"use strict";

var imgNike = ['airmax-jump.png','airmax-on-foot.png','airmax-playground.png','airmax-top-view.png','airmax.png']

const slider = document.getElementById('slider');
let toStep = 0;

function showSlide() {
  if (toStep === imgNike.length) {
    toStep = 0;
}
  
  slider.src = `i/${imgNike[toStep]}`;
	toStep += 1;
}

setInterval(showSlide, 5000);

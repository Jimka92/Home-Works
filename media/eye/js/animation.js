'use strict';

const eyeBall = document.querySelector('.big-book__eye');
const eyePupil = document.querySelector('.big-book__pupil');

window.addEventListener('mousemove', event => {
 const bodyBCR = document.body.getBoundingClientRect();

  // Окно браузера
  const windowSize = {
    width: window.innerWidth,
    height: document.documentElement.clientHeight
  };

  // Размеры глаза
  const eyeBallBCR = eyeBall.getBoundingClientRect();
  const eyeBallSize = {
    width: eyeBallBCR.width,
    height: eyeBallBCR.height
  };

  // Положения глаза
  const eyeBallCenterPosition = {
    x: (eyeBallBCR.left - bodyBCR.left) + (eyeBallSize.width / 2),
    y: (eyeBallBCR.top - bodyBCR.top) + (eyeBallSize.height / 2)
  };

  // Позиция курсора
  const mousePos = {
    x: event.pageX,
    y: event.pageY
  };

  const pupilPositionX = function() {
    // Определение отступов до края экрана
    const positionXOffsetRange = {
     from: -eyeBallCenterPosition.x,
      to: windowSize.width - eyeBallCenterPosition.x
    };

    // Положение относительно оси X
    const differenceX = mousePos.x - eyeBallCenterPosition.x;

    //Соотношение координат по оси X
    const positionXPercent = (function () {
      if (differenceX < 0) {
        return (-(differenceX / positionXOffsetRange.from) * 100);
       } else if (differenceX > 0) {
        
        return ((differenceX / positionXOffsetRange.to) * 100);
      }
       return 0;
    })();

    return positionXPercent;
  };

  const pupilPositionY = function() {
    // Положение относительно оси Y
    const differenceY = mousePos.y - eyeBallCenterPosition.y;

    //Соотношение относительно центра глаза по оси Y
    const positionYPercent = (function () {
      
      if (differenceY < 0) {
        const eyeBallOffsetFromWindowTop = (eyeBallBCR.top + (eyeBallSize.height / 2));
       return ((differenceY / eyeBallOffsetFromWindowTop) * 100);

      } else if (differenceY > 0) {
        
        const eyeBallOffsetFromWindowBottom = windowSize.height - (eyeBallBCR.bottom - (eyeBallSize.height / 2));
        
        return ((differenceY / eyeBallOffsetFromWindowBottom) * 100);
      }

      return 0;
    })();

    return positionYPercent;
  };

  const pupilPositionXPercent =  pupilPositionX();
  const pupilPositionYPercent =  pupilPositionY();

  const pupilSize = function () {
    // Приводим проценты к положительным числам
    const pointX = pupilPositionXPercent * Math.sign(pupilPositionXPercent);
    const pointY = pupilPositionYPercent * Math.sign(pupilPositionYPercent);

    const calculatedSize = ((100 - ((pointX + pointY) / 2)) * 0.03);

    return calculatedSize >= 1 ? calculatedSize : 1;
  };

  eyePupil.style.setProperty('--pupil-x', `${pupilPositionXPercent * 0.3}px`);
  eyePupil.style.setProperty('--pupil-y', `${pupilPositionYPercent * 0.3}px`);
  eyePupil.style.setProperty('--pupil-size', pupilSize());
});

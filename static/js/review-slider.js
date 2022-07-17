const buttonLeft = $('.button--left');
const buttonRight = $('.button--right');
let slider = $('.reviews__slider');
let slides = $('.reviews__slider--item');

function moveLeft() {
  for (let slide = 0; slide < slides.length; slide++) {
    slides[slide].classList.add('move-left');
  };
  setTimeout(() => {
    slider.append(slides[0]);
    for (let slide = 0; slide < slides.length; slide++) {
      slides[slide].classList.remove('move-left');
    };
  }, 600);
  slides = $('.reviews__slider--item');
};

function moveRight() {
  for (let slide = 0; slide < slides.length; slide++) {
    slides[slide].classList.add('move-right');
  };
  setTimeout(() => {
    slider.prepend(slides[slides.length - 1]);
    for (let slide = 0; slide < slides.length; slide++) {
      slides[slide].classList.remove('move-right');
    };
  }, 600);
  slides = $('.reviews__slider--item');
};

buttonLeft.on('click', () => {
  moveLeft();
})

buttonRight.on ('click', () => {
  moveRight();
})

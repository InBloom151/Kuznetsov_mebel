const buttonLeftItem = $('.item__button--left');
const buttonRightItem = $('.item__button--right');
let sliderItem = $('.item__slider--wrapper');
let slidesItem = $('.item__slider--item');

function moveLeft() {
  for (let slide = 0; slide < slidesItem.length; slide++) {
    slidesItem[slide].classList.add('move-left--item');
  };
  setTimeout(() => {
    sliderItem.append(slidesItem[0]);
    for (let slide = 0; slide < slidesItem.length; slide++) {
      slidesItem[slide].classList.remove('move-left--item');
    };
  }, 600);
  slidesItem = $('.item__slider--item');
};

function moveRight() {
  for (let slide = 0; slide < slidesItem.length; slide++) {
    slidesItem[slide].classList.add('move-right--item');
  };
  setTimeout(() => {
    sliderItem.prepend(slidesItem[slidesItem.length - 1]);
    for (let slide = 0; slide < slidesItem.length; slide++) {
      slidesItem[slide].classList.remove('move-right--item');
    };
  }, 600);
  slidesItem = $('.item__slider--item');
};

buttonLeftItem.on('click', () => {
  moveLeft();
})

buttonRightItem.on ('click', () => {
  moveRight();
})

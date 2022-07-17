function burgerAction() {
  let burger = $('.menu');
  let menu = $('.menu-top-header__list');
  let mainMenu = $('.top-header__menu');
  let burgerMenu = $('.menu__body');
  let menuItem = $('.menu-top-header__item');

  burger.click(function() {
    if (burger.hasClass('menu-open')) {
      burger.removeClass('menu-open');
      mainMenu.append(menu);
      menuItem.css('display', '').addClass('menu-top-header__active');
    } else {
      burger.addClass('menu-open');
      burgerMenu.append(menu);
      menuItem.css('display', 'flex').removeClass('menu-top-header__active');
    };
  })
};

burgerAction();


const slide_1 = $('#slide_1');
const slide_2 = $('#slide_2');
const slide_3 = $('#slide_3');

const button_1 = $('#slide_button_1');
const button_2 = $('#slide_button_2');
const button_3 = $('#slide_button_3');

let actions = {
  showFirst: function() {
    slide_1.removeClass('_animate');
    slide_2.addClass('_animate');
    slide_3.addClass('_animate');

    button_1.addClass('_pressed');
    button_2.removeClass('_pressed');
    button_3.removeClass('_pressed');
  },
  showSecond: function() {
    slide_1.addClass('_animate');
    slide_2.removeClass('_animate');
    slide_3.addClass('_animate');

    button_1.removeClass('_pressed');
    button_2.addClass('_pressed');
    button_3.removeClass('_pressed');
  },
  showThird: function() {
    slide_1.addClass('_animate');
    slide_2.addClass('_animate');
    slide_3.removeClass('_animate');

    button_1.removeClass('_pressed');
    button_2.removeClass('_pressed');
    button_3.addClass('_pressed');
  },
};

button_1.on('click', () => {
  actions.showFirst();
});
button_2.on('click', () => {
  actions.showSecond();
});
button_3.on('click', () => {
  actions.showThird();
});

function autoSlider() {
  if (button_1.hasClass('_pressed')) {
    return actions.showSecond();
  } else if (button_2.hasClass('_pressed')) {
    return actions.showThird();
  } else if (button_3.hasClass('_pressed')) {
    return actions.showFirst();
  };
};

function moveLineBar(position) {
  let slider = $('.linebar__front');

  slider.css('transform', `translateX(${position}px)`);
};

setInterval(() => {
  autoSlider();
}, 10000)

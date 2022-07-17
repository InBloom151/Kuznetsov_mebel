const lineBarLine = $('.linebar__back');
const lineBarSlider = $('.linebar__front');
const lineBarButton_1 = $('#lineBarButton_1');
const lineBarButton_2 = $('#lineBarButton_2');
const lineBarButton_3 = $('#lineBarButton_3');
const kitchen = $('.galery__wrapper--kitchen');
const woodrobe = $('.galery__wrapper--woodrobe');
const cabinet = $('.galery__wrapper--cabinet');

lineBarButton_1.on('click', () => {
  lineBarSlider.css('transform', 'translateX(0)');

  !lineBarButton_1.hasClass('button_pressed') ? lineBarButton_1.addClass('button_pressed') : null;
  lineBarButton_2.removeClass('button_pressed');
  lineBarButton_3.removeClass('button_pressed');

  kitchen.hasClass('hide') ? kitchen.removeClass('hide') : null;
  woodrobe.addClass('hide');
  cabinet.addClass('hide');
});

lineBarButton_2.on('click', () => {
  lineBarSlider.css('transform', `translateX(${lineBarLine.width()/3 + 1.5}px)`);

  !lineBarButton_2.hasClass('button_pressed') ? lineBarButton_2.addClass('button_pressed') : null;
  lineBarButton_1.removeClass('button_pressed');
  lineBarButton_3.removeClass('button_pressed');

  woodrobe.hasClass('hide') ? woodrobe.removeClass('hide') : null;
  kitchen.addClass('hide');
  cabinet.addClass('hide');
});

lineBarButton_3.on('click', () => {
  lineBarSlider.css('transform', `translateX(${(lineBarLine.width()/3 + 1.5)*2}px)`);

  !lineBarButton_3.hasClass('button_pressed') ? lineBarButton_3.addClass('button_pressed') : null;
  lineBarButton_2.removeClass('button_pressed');
  lineBarButton_1.removeClass('button_pressed');

  cabinet.hasClass('hide') ? cabinet.removeClass('hide') : null;
  kitchen.addClass('hide');
  woodrobe.addClass('hide');
});
 

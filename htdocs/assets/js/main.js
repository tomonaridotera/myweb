"use strict";

$('#js-open-menu').on('click', function () {
  $('#js-menu-wrap').show();
});
$('#js-close-menu').on('click', function () {
  $('#js-menu-wrap').hide();
});
$('#js-toggleBtn').on('click', function () {
  if ($(this).hasClass('en')) {
    $(this).removeClass('en').text('English');
    $('#js-en').slideUp();
    $('#js-jp').slideDown();
  } else {
    $(this).addClass('en').text('Japanese');
    $('#js-jp').slideUp();
    $('#js-en').slideDown();
  }
});
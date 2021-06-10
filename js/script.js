

$(function() {
  var imgHeight = $('.kv-wrapper').outerHeight();

  $(".burger-btn").on('click', function(){
    if( $(window).scrollTop() < imgHeight){

      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
    }else {

      $(this).addClass('black');
      $('.nav-list').addClass('black');
      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
    }
  });

  $(window).on('load scroll', function() {
    if ($(window).scrollTop() < imgHeight) {
      $('.site-title').removeClass('black');
    }else {
      $('.site-title').addClass('black');
    }

    if ($(window).scrollTop() < imgHeight) {
      $('.burger-btn').removeClass('black');
      $('.nav-list').removeClass('black');
    }else {
      $('.burger-btn').addClass('black');
      $('.nav-list').addClass('black');
    }
  });


});
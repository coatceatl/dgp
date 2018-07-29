$(document).ready(function() {

  $('#search').click(function() {
    $('.menu').addClass('hidden');
    $('.menu-search').addClass('search-open');
  });

  $('#close').click(function() {
    $('.menu').removeClass('hidden');
    $('.menu-search').removeClass('search-open');
  });

  $(window).scroll(function() {
    if($(this).scrollTop() >= 126) {
      $('.navbar-menu').addClass('stickytop');
    }
    else{
      $('.navbar-menu').removeClass('stickytop');
    }
  });

  $('#myCarousel').carousel({
    pause: true,
    interval: 4000,
  });

  $('#myTab a[href="home"]').tab('show');

  $('.multi-item-carousel').carousel({
    interval: false
  });

  $('.multi-item-carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<4;i++) {
      next=next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    }
  });

  ymaps.ready(init);

  function init(){
    var myMap = new ymaps.Map('map', {
      center: [55.66599957, 37.75337950],
      zoom: 16
    });
  }
});



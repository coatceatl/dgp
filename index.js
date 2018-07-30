$(document).ready(function() {

  /* search menu */

  $('#search').click(function() {
    $('.menu').addClass('hidden');
    $('.menu-search').addClass('search-open');
  });

  $('#close').click(function() {
    $('.menu').removeClass('hidden');
    $('.menu-search').removeClass('search-open');
  });

  /* sticky menu */

  $(window).scroll(function() {
    if($(this).scrollTop() >= 126) {
      $('.navbar-menu').addClass('stickytop');
    }
    else{
      $('.navbar-menu').removeClass('stickytop');
    }
  });

  /* tabs */

  var tab = $('#myTab');
  var num = tab.find('.nav-tabs li').length - 1;

  $('.next').click(function(){
    var cur = tab.find('li.active');
    var index = cur.index();

    if(index == num) {
      var next = tab.find('.nav-tabs').find('li').eq(0);
    }
    else {
      var next = cur.next('li');
    }

    next.find('a').tab('show');
    });

  $('.prev').click(function(){
    var cur = tab.find('li.active');
    var index = cur.index();

    if(index == 0) {
      var next = tab.find('.nav-tabs').find('li').eq(num);
    }
    else {
      var next = cur.prev('li');
    }

    next.find('a').tab('show');
  });

  /* carousel icons sources */

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

  /* yandex map */

  ymaps.ready(init);

  function init(){
    var myMap = new ymaps.Map('map', {
      center: [55.66599957, 37.75337950],
      zoom: 16
    });
  }
});



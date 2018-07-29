$(document).ready(function() {

  $('#search').click(function() {
    $('.menu').toggleClass('hidden');
    $('.menu-search').toggleClass('open');
  });

  $('#myCarousel').carousel({
    pause: true,
    interval: 4000,
  });

  $('#carouselSources').carousel({
  });

  ymaps.ready(init);

  function init(){
    var myMap = new ymaps.Map('map', {
      center: [55.66599957, 37.75337950],
      zoom: 16
    });
  }
});

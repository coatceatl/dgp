$(document).ready(function() {
  $('#myCarousel').carousel({
    pause: true,
    interval: 4000,
  });

  $('#carouselSources[data-type="multi"] .item').carousel ({
    pause: true,
    interval: 4000,
  });
});

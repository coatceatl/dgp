$(document).ready(function() {
  $('#myCarousel').carousel({
    pause: true,
    interval: 4000,
  });

  $('.carouselSources[data-type='multi'] .item-sources').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<3;i++) {
      next=next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    }
  });
});

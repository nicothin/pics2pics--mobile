jQuery( document ).ready(function($) {

  // alert('11');
  $('.price__sizes-item').on('click', function(){
    $('.price__sizes-item').removeClass('price__sizes-item--active');
    $(this).addClass('price__sizes-item--active');
    resizePriceSizeDemo();
  });

  resizePriceSizeDemo();

  $(window).on('resize', function() {
    resizePriceSizeDemo();
  });

  function resizePriceSizeDemo() {
    var active = $('.price__sizes-item--active');
    if( $(document).width() >= 640 ) {
      var w = active.data('w');
      var h = active.data('h');
      $('#price-size-demo').width(w).height(h);
    }
    else {
      var w = active.data('w') * 100 / 640 + 'vw';
      var h = active.data('h') * 100 / 640 + 'vw';
      $('#price-size-demo').width(w).height(h);
    }
  }

});

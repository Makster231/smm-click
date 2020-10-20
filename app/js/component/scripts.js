(function ($, window, document) {

  function compaines (){
    $(".js_companies_slider").slick({
      infinite: true,
      slidesToShow: 4,
      lazyLoad: 'progressive',
      slidesToScroll: 1,
      arrows: false,
      dots: false
    });
  }



  $(() => {
    //show content after loaded page
    $("body").css("opacity", "1");
    //Activate compaines slider
    compaines ()
    // activate lazy load
    $(".lazy").Lazy({
      threshold: 750,
    });
  });
})(window.jQuery, window, document);

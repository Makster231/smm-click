"use strict";

(function ($, window, document) {
  var $element = $('.js_application_steps');
  var counter = 0;
  var $rocket_block = $(".js_scroll");

  function activateRocket() {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var offset = $element.offset().top;

      if (scroll > offset && counter === 0) {
        $rocket_block.removeClass("js_rocket_hide");
      } else {
        $rocket_block.addClass("js_rocket_hide");
      }
    });
  }

  function goTohref() {
    $("body").on("click", ".js_scroll", function (event) {
      event.preventDefault();
      var id = $(this).attr("data-href"),
          top = $(id).offset().top;
      $("body,html").animate({
        scrollTop: top
      }, 500);
    });
  }

  $(function () {
    goTohref();
    activateRocket();
  });
})(window.jQuery, window, document); // (function ($, window, document) {
//     function nav (){
//         $(".js_header-nav li, .js_header-nav ul").mouseover(function(){
//             let $this = $(this);
//             $this.closest(".js_header-nav").addClass("js_active");
//         })
//         $(".js_header-nav li").mouseleave(function(){
//             let $this = $(this);
//             $this.closest(".js_header-nav").removeClass("js_active");
//         })
//     }
//       $(() => {
//         nav ()
//       });
//     })(window.jQuery, window, document);


(function ($, window, document) {
  $(function () {
    $("head").prepend('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />', '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" />');
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  function compaines() {
    $(".js_companies_slider").slick({
      infinite: true,
      slidesToShow: 4,
      lazyLoad: 'progressive',
      slidesToScroll: 1,
      arrows: false,
      dots: false
    });
  }

  $(function () {
    //show content after loaded page
    $("body").css("opacity", "1"); //Activate compaines slider

    compaines(); // activate lazy load

    $(".lazy").Lazy({
      threshold: 750
    });
  });
})(window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map

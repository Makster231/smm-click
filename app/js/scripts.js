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


$(document).ready(function () {
  if (document.querySelector('.js_main-page')) {
    var AnimationScene = function AnimationScene(section, tween, durationTime, offsetValue) {
      var scene = new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.55,
        duration: durationTime,
        offset: offsetValue
      }).reverse(true).setTween(tween).addTo(controller);
    }; // header


    var controller = new ScrollMagic.Controller();

    if (document.querySelector('.js_header_container-bottom')) {
      var tl_team_header = new TimelineMax();
      tl_team_header.from('.js_header_container-bottom--1, .js_header_container-bottom--2, .js_header_container-bottom--3, .js_header_container-bottom--4', 0.9, {
        x: '-40%',
        opacity: 0
      });
      AnimationScene('.js_header_container-bottom', tl_team_header);
    } // application


    if (document.querySelector('.js_application_steps')) {
      var _tl_team_header = new TimelineMax();

      _tl_team_header.from('.js_application-step--1', 0.4, {
        x: '-40%',
        opacity: 0
      });

      _tl_team_header.from('.js_application-step--2', 0.4, {
        x: '40%',
        opacity: 0
      });

      _tl_team_header.from('.js_application-step--3', 0.4, {
        x: '40%',
        y: '-40%',
        opacity: 0
      });

      AnimationScene('.js_application_steps', _tl_team_header);
    } // warranty


    if (document.querySelector('.js_warranty_bottom')) {
      var _tl_team_header2 = new TimelineMax();

      _tl_team_header2.from('.js_warranty_bottom-block--1', 0.4, {
        x: '-40%',
        opacity: 0
      });

      _tl_team_header2.from('.js_warranty_bottom-block--2', 0.4, {
        y: '40%',
        opacity: 0
      });

      _tl_team_header2.from('.js_warranty_bottom-block--3', 0.4, {
        x: '40%',
        opacity: 0
      });

      AnimationScene('.js_warranty_bottom', _tl_team_header2);
    } // cases


    if (document.querySelector('.js_cases-block--1')) {
      var _tl_team_header3 = new TimelineMax();

      _tl_team_header3.from('.js_cases-block--1', 0.6, {
        x: '-40%',
        opacity: 0
      });

      _tl_team_header3.from('.js_cases-block--2', 0.6, {
        x: '40%',
        opacity: 0
      });

      AnimationScene('.js_cases-block--1', _tl_team_header3);
    }

    if (document.querySelector('.js_cases-block--4')) {
      var _tl_team_header4 = new TimelineMax();

      _tl_team_header4.from('.js_cases-block--3', 0.6, {
        x: '-40%',
        opacity: 0
      });

      _tl_team_header4.from('.js_cases-block--4', 0.6, {
        x: '40%',
        opacity: 0
      });

      AnimationScene('.js_cases-block--4', _tl_team_header4);
    } //Promotion pages


    if (document.querySelector('.js_promotion_slider')) {
      var _tl_team_header5 = new TimelineMax();

      _tl_team_header5.from('.js_promotion_slider-item--1', 0.6, {
        y: '40%',
        opacity: 0
      });

      _tl_team_header5.from('.js_promotion_slider-item--2', 0.6, {
        y: '40%',
        opacity: 0
      });

      _tl_team_header5.from('.js_promotion_slider-item--3', 0.9, {
        y: '40%',
        opacity: 0
      });

      AnimationScene('.js_promotion_slider', _tl_team_header5);
    }
  }
});

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
      slidesToScroll: 2,
      dots: true
    });
  }

  function noDigits() {
    $("input[type=text]").on("keyup", function () {
      var $this = $(this);
      var inputVal = "";
      var str = $this.val();
      var arr = str.split('');

      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "0" || arr[i] === "1" || arr[i] === "2" || arr[i] === "3" || arr[i] === "4" || arr[i] === "5" || arr[i] === "6" || arr[i] === "7" || arr[i] === "8" || arr[i] === "9") {
          arr.splice(-1, 1);
          $this.val(inputVal);
        } else {
          inputVal += arr[i];
          $this.val(inputVal);
        }
      }
    });
  }

  $(function () {
    //show content after loaded page
    $("body").css("opacity", "1"); //Activate compaines slider

    compaines(); //Activate lazy load

    $(".lazy").Lazy({
      threshold: 750
    }); //Add masks to input text 

    noDigits(); //Activate popup modal after 30s
    // if(!$(".js_thank-you").length && !$(".js_page-404").length){
    //   setTimeout(function() {
    //     $.fancybox.open($("#modal_time"), {
    //       touch: false
    //     });
    //   }, 45000);
    // }
  });
})(window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map

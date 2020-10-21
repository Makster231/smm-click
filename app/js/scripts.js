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
  function burgerMenu() {
    $(".js_header_nav-mob--burger").click(function () {
      var $this = $(this);

      if (!$this.hasClass("js_active")) {
        $("body").addClass("js_burger-active");
        $this.addClass("js_active");
      } else {
        $("body").removeClass("js_burger-active");
        $this.removeClass("js_active");
      }
    });
  }

  $(function () {
    burgerMenu();
  });
})(window.jQuery, window, document); // $(document).ready(() => {
//   if (document.querySelector('.js_main-page')) {
//     const controller = new ScrollMagic.Controller();
//     function AnimationScene(section, tween, durationTime, offsetValue) {
//       const scene = new ScrollMagic.Scene({
//         triggerElement: section,
//         triggerHook: 0.55,
//         duration: durationTime,
//         offset: offsetValue,
//       })
//         .reverse(true)
//         .setTween(tween)
//         .addTo(controller);
//     }
//     // header
//     if (document.querySelector('.js_header_container-bottom')) {
//       const tl_team_header = new TimelineMax();
//       tl_team_header.from('.js_header_container-bottom--1, .js_header_container-bottom--2, .js_header_container-bottom--3, .js_header_container-bottom--4', 0.9, {
//         x: '-40%',
//         opacity: 0,
//       });
//       AnimationScene('.js_header_container-bottom', tl_team_header);
//     }
//     // application
//     if (document.querySelector('.js_application_steps')) {
//       const tl_team_header = new TimelineMax();
//       tl_team_header.from('.js_application-step--1', 0.4, {
//         x: '-40%',
//         opacity: 0,
//       });
//       tl_team_header.from('.js_application-step--2', 0.4, {
//         x: '40%',
//         opacity: 0,
//       });
//       tl_team_header.from('.js_application-step--3', 0.4, {
//         x: '40%',
//         y: '-40%',
//         opacity: 0,
//       });
//       AnimationScene('.js_application_steps', tl_team_header);
//     }
//     // warranty
//     if (document.querySelector('.js_warranty_bottom')) {
//         const tl_team_header = new TimelineMax();
//         tl_team_header.from('.js_warranty_bottom-block--1', 0.4, {
//           x: '-40%',
//           opacity: 0,
//         });
//         tl_team_header.from('.js_warranty_bottom-block--2', 0.4, {
//           y: '40%',
//           opacity: 0,
//         });
//         tl_team_header.from('.js_warranty_bottom-block--3', 0.4, {
//           x: '40%',
//           opacity: 0,
//         });
//         AnimationScene('.js_warranty_bottom', tl_team_header);
//     }
//     // cases
//     if (document.querySelector('.js_cases-block--1')) {
//         const tl_team_header = new TimelineMax();
//         tl_team_header.from('.js_cases-block--1', 0.6, {
//             x: '-40%',
//             opacity: 0,
//         });
//         tl_team_header.from('.js_cases-block--2', 0.6, {
//             x: '40%',
//             opacity: 0,
//         });
//         AnimationScene('.js_cases-block--1', tl_team_header);
//     }
//     if (document.querySelector('.js_cases-block--4')) {
//         const tl_team_header = new TimelineMax();
//         tl_team_header.from('.js_cases-block--3', 0.6, {
//             x: '-40%',
//             opacity: 0,
//         });
//         tl_team_header.from('.js_cases-block--4', 0.6, {
//             x: '40%',
//             opacity: 0,
//         });
//         AnimationScene('.js_cases-block--4', tl_team_header);
//     }
//     //Promotion pages
//     if (document.querySelector('.js_promotion_slider')) {
//       const tl_team_header = new TimelineMax();
//       tl_team_header.from('.js_promotion_slider-item--1', 0.6, {
//           y: '40%',
//           opacity: 0,
//       });
//       tl_team_header.from('.js_promotion_slider-item--2', 0.6, {
//         y: '40%',
//           opacity: 0,
//       });
//       tl_team_header.from('.js_promotion_slider-item--3', 0.9, {
//         y: '40%',
//           opacity: 0,
//       });
//       AnimationScene('.js_promotion_slider', tl_team_header);
//   }
//   }
// });


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
      dots: true,
      responsive: [{
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }]
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

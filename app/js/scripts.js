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
})(window.jQuery, window, document);

(function ($, window, document) {
  function preventDefault(e) {
    e.preventDefault();
  }

  function disableScroll() {
    document.body.addEventListener('touchmove', preventDefault, {
      passive: false
    });
  }

  function enableScroll() {
    document.body.removeEventListener('touchmove', preventDefault, {
      passive: false
    });
  }

  function burgerMenu() {
    $(".js_header_nav-mob--burger").click(function () {
      var $this = $(this);

      if (!$this.hasClass("js_active")) {
        $("body").addClass("js_burger-active");
        $this.addClass("js_active");
        disableScroll();
      } else {
        $("body").removeClass("js_burger-active");
        $this.removeClass("js_active");
        enableScroll();
      }
    });
  }

  $(function () {
    if ($(window).width() < 640) {
      burgerMenu();
    }
  });
})(window.jQuery, window, document);

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


    if ($(window).width() > 640) {
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
      }
    } else {
      if (document.querySelector('.js_application-step--1')) {
        var _tl_team_header2 = new TimelineMax();

        _tl_team_header2.from('.js_application-step--1', 0.4, {
          x: '-40%',
          opacity: 0
        });

        AnimationScene('.js_application-step--1', _tl_team_header2);
      }

      if (document.querySelector('.js_application-step--2')) {
        var _tl_team_header3 = new TimelineMax();

        _tl_team_header3.from('.js_application-step--2', 0.4, {
          x: '40%',
          opacity: 0
        });

        AnimationScene('.js_application-step--2', _tl_team_header3);
      }

      if (document.querySelector('.js_application-step--3')) {
        var _tl_team_header4 = new TimelineMax();

        _tl_team_header4.from('.js_application-step--3', 0.4, {
          x: '-40%',
          opacity: 0
        });

        AnimationScene('.js_application-step--3', _tl_team_header4);
      }
    } // warranty
    // application


    if ($(window).width() > 640) {
      if (document.querySelector('.js_warranty_bottom')) {
        var _tl_team_header5 = new TimelineMax();

        _tl_team_header5.from('.js_warranty_bottom-block--1', 0.4, {
          x: '-40%',
          opacity: 0
        });

        _tl_team_header5.from('.js_warranty_bottom-block--2', 0.4, {
          y: '40%',
          opacity: 0
        });

        _tl_team_header5.from('.js_warranty_bottom-block--3', 0.4, {
          x: '40%',
          opacity: 0
        });

        AnimationScene('.js_warranty_bottom', _tl_team_header5);
      }
    } else {
      if (document.querySelector('.js_warranty_bottom-block--1')) {
        var _tl_team_header6 = new TimelineMax();

        _tl_team_header6.from('.js_warranty_bottom-block--1', 0.4, {
          x: '-40%',
          opacity: 0
        });

        AnimationScene('.js_warranty_bottom-block--1', _tl_team_header6);
      }

      if (document.querySelector('.js_warranty_bottom-block--2')) {
        var _tl_team_header7 = new TimelineMax();

        _tl_team_header7.from('.js_warranty_bottom-block--2', 0.4, {
          x: '40%',
          opacity: 0
        });

        AnimationScene('.js_warranty_bottom-block--2', _tl_team_header7);
      }

      if (document.querySelector('.js_warranty_bottom-block--3')) {
        var _tl_team_header8 = new TimelineMax();

        _tl_team_header8.from('.js_warranty_bottom-block--3', 0.4, {
          x: '-40%',
          opacity: 0
        });

        AnimationScene('.js_warranty_bottom-block--3', _tl_team_header8);
      }
    } // cases


    if ($(window).width() > 640) {
      if (document.querySelector('.js_cases-block--1')) {
        var _tl_team_header9 = new TimelineMax();

        _tl_team_header9.from('.js_cases-block--1', 0.6, {
          x: '-40%',
          opacity: 0
        });

        _tl_team_header9.from('.js_cases-block--2', 0.6, {
          x: '40%',
          opacity: 0
        });

        AnimationScene('.js_cases-block--1', _tl_team_header9);
      }

      if (document.querySelector('.js_cases-block--4')) {
        var _tl_team_header10 = new TimelineMax();

        _tl_team_header10.from('.js_cases-block--3', 0.6, {
          x: '-40%',
          opacity: 0
        });

        _tl_team_header10.from('.js_cases-block--4', 0.6, {
          x: '40%',
          opacity: 0
        });

        AnimationScene('.js_cases-block--4', _tl_team_header10);
      }
    } else {
      if (document.querySelector('.js_cases-block--1')) {
        var _tl_team_header11 = new TimelineMax();

        _tl_team_header11.from('.js_cases-block--1', 0.4, {
          y: '40%',
          opacity: 0
        });

        AnimationScene('.js_cases-block--1', _tl_team_header11);
      }

      if (document.querySelector('.js_cases-block--2')) {
        var _tl_team_header12 = new TimelineMax();

        _tl_team_header12.from('.js_cases-block--2', 0.4, {
          y: '40%',
          opacity: 0
        });

        AnimationScene('.js_cases-block--2', _tl_team_header12);
      }

      if (document.querySelector('.js_cases-block--3')) {
        var _tl_team_header13 = new TimelineMax();

        _tl_team_header13.from('.js_cases-block--3', 0.4, {
          y: '40%',
          opacity: 0
        });

        AnimationScene('.js_cases-block--3', _tl_team_header13);
      }

      if (document.querySelector('.js_cases-block--4')) {
        var _tl_team_header14 = new TimelineMax();

        _tl_team_header14.from('.js_cases-block--4', 0.4, {
          y: '40%',
          opacity: 0
        });

        AnimationScene('.js_cases-block--4', _tl_team_header14);
      }
    } //Promotion pages


    if ($(window).width() > 640) {
      if (document.querySelector('.js_promotion_slider')) {
        var _tl_team_header15 = new TimelineMax();

        _tl_team_header15.from('.js_promotion_slider-item--1', 0.6, {
          y: '40%',
          opacity: 0
        });

        _tl_team_header15.from('.js_promotion_slider-item--2', 0.6, {
          y: '40%',
          opacity: 0
        });

        _tl_team_header15.from('.js_promotion_slider-item--3', 0.9, {
          y: '40%',
          opacity: 0
        });

        AnimationScene('.js_promotion_slider', _tl_team_header15);
      }
    } else {
      if (document.querySelector('.js_promotion_slider-item--1')) {
        var _tl_team_header16 = new TimelineMax();

        _tl_team_header16.from('.js_promotion_slider-item--1', 0.6, {
          x: '40%',
          opacity: 0
        });

        AnimationScene('.js_promotion_slider-item--1', _tl_team_header16);
      }

      if (document.querySelector('.js_promotion_slider-item--2')) {
        var _tl_team_header17 = new TimelineMax();

        _tl_team_header17.from('.js_promotion_slider-item--2', 0.6, {
          x: '-40%',
          opacity: 0
        });

        AnimationScene('.js_promotion_slider-item--2', _tl_team_header17);
      }

      if (document.querySelector('.js_promotion_slider-item--3')) {
        var _tl_team_header18 = new TimelineMax();

        _tl_team_header18.from('.js_promotion_slider-item--3', 0.6, {
          x: '40%',
          opacity: 0
        });

        AnimationScene('.js_promotion_slider-item--3', _tl_team_header18);
      }
    }
  }

  if (document.querySelector('.js_thank-you')) {
    var _AnimationScene = function _AnimationScene(section, tween, durationTime, offsetValue) {
      var scene = new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.55,
        duration: durationTime,
        offset: offsetValue
      }).reverse(true).setTween(tween).addTo(_controller);
    }; // thank you


    var _controller = new ScrollMagic.Controller();

    if (document.querySelector('.js_thank-you')) {
      var _tl_team_header19 = new TimelineMax();

      _tl_team_header19.from('.js_thank-you--anim1, .js_thank-you--anim2, .js_thank-you--anim3', 0.9, {
        y: '60%',
        opacity: 0
      });

      _tl_team_header19.from('.js_thank-you--anim4', 0.6, {
        x: '-10%',
        opacity: 0
      });

      _tl_team_header19.from('.js_thank-you--anim5', 0.6, {
        x: '10%',
        opacity: 0
      });

      _AnimationScene('.js_thank-you', _tl_team_header19);
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

  function casesSlider() {
    $(".js_cases_block-description").on("click", function () {
      $(".js_modal_cases-info--slider").slick({
        dots: true,
        arrows: false
      });
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

    compaines(); //Activate cases slider

    casesSlider(); //Add masks to input text 

    noDigits(); //Activate lazy load

    $(".lazy").Lazy({
      threshold: 750
    }); //Activate popup modal after 45s

    if (!$(".js_thank-you").length && !$(".js_page-404").length) {
      setTimeout(function () {
        $.fancybox.open($("#modal_time"), {
          touch: false
        });
      }, 45000);
    }
  });
})(window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map

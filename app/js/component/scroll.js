
(function ($, window, document) {

    var $element = $('.js_application_steps');
    let counter = 0;
    var $rocket_block = $(".js_scroll");
    
    function activateRocket(){
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            var offset = $element.offset().top
            if (scroll > offset && counter === 0) {
              $rocket_block.removeClass("js_rocket_hide");
            }else{
              $rocket_block.addClass("js_rocket_hide");
            }
          });
    }

    function goTohref(){
        $("body").on("click",".js_scroll", function(event) {
            event.preventDefault();
            var id = $(this).attr("data-href"),
                top = $(id).offset().top;
        
            $("body,html").animate({ scrollTop: top }, 500);
            });
    }
    $(() => {
      goTohref();
        activateRocket();
    });
})(window.jQuery, window, document);

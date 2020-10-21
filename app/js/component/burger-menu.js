(function ($, window, document) {

    
    function preventDefault(e) {
    e.preventDefault();
    }
    
    function disableScroll() {
    document.body.addEventListener('touchmove', preventDefault, {passive: false});
    }
    
    function enableScroll() {
    document.body.removeEventListener('touchmove', preventDefault, {passive: false});
    }

    function burgerMenu(){
        $(".js_header_nav-mob--burger").click(function(){
            let $this = $(this);
            if(!$this.hasClass("js_active")){
                $("body").addClass("js_burger-active");
                $this.addClass("js_active");
                disableScroll();
            }else{
                $("body").removeClass("js_burger-active");
                $this.removeClass("js_active");
                enableScroll();
            }
        })
    }
    $(() => {
        if($(window).width() < 640){
            burgerMenu();
        }
    });
})(window.jQuery, window, document);
    
(function ($, window, document) {

    function burgerMenu(){
        $(".js_header_nav-mob--burger").click(function(){
            let $this = $(this);
            if(!$this.hasClass("js_active")){
                $("body").addClass("js_burger-active");
                $this.addClass("js_active");
            }else{
                $("body").removeClass("js_burger-active");
                $this.removeClass("js_active");
            }
        })
    }
    $(() => {
        if($(window).width() < 640){
            burgerMenu();
        }
    });
})(window.jQuery, window, document);
    
(function ($, window, document) {

  function compaines (){
    $(".js_companies_slider").slick({
      infinite: true,
      slidesToShow: 4,
      lazyLoad: 'progressive',
      slidesToScroll: 2,
      dots: true
    });
  }

  
  function noDigits() {
    $("input[type=text]").on("keyup",function(){
      let $this = $(this);

      var inputVal = ""; 
      var str = $this.val();
      var arr = str.split('');

     for(let i = 0; i < arr.length; i++){
       if(arr[i] === "0" || arr[i] === "1" ||arr[i] === "2" || arr[i] === "3" ||arr[i] === "4" || arr[i] === "5" ||arr[i] === "6" || arr[i] === "7" ||arr[i] === "8" || arr[i] === "9"){
          arr.splice(-1,1);
         $this.val(inputVal)
       }else{
        inputVal += arr[i];
        $this.val(inputVal)
       }

     }
    })
  }

  $(() => {
    //show content after loaded page
    $("body").css("opacity", "1");
    //Activate compaines slider
    compaines ()
    //Activate lazy load
    $(".lazy").Lazy({
      threshold: 750,
    });
    //Add masks to input text 
    noDigits();
    //Activate popup modal after 30s
    // if(!$(".js_thank-you").length && !$(".js_page-404").length){
    //   setTimeout(function() {
    //     $.fancybox.open($("#modal_time"), {
    //       touch: false
    //     });
    //   }, 45000);
    // }
  });
})(window.jQuery, window, document);

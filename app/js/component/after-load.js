(function($, window, document) {
    $(() => {
      $("head").prepend(
        '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />',
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" />',
      );
    });
  })(window.jQuery, window, document);
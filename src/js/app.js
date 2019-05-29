(function($) {
  $(document).ready(() => {
    
    // Change the active form (sign in or sign up)
    $('.btn-first').on('click', function () {
      $('.btn-last').removeClass('active');
      $('.title.last').removeClass('active');
      $('form.last').removeClass('active');
      $(this).addClass(' active');
      $('.title.first').addClass(' active');
      $('form.first').addClass(' active');
    });

    $('.btn-last').on('click', function () {
      $('.btn-first').removeClass('active');
      $('.title.first').removeClass('active');
      $('form.first').removeClass('active');
      $(this).addClass(' active');
      $('.title.last').addClass(' active');
      $('form.last').addClass(' active');
    });

  });
})(jQuery);
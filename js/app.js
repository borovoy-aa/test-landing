$(function() {
    $('input').on('change', function() {
      var input = $(this);
      if (input.val().length) {
        input.addClass('selected');
      } else {
        input.removeClass('selected');
      }
    });
    
    setTimeout(function() {
      $('#fname').trigger('focus');
    }, 500);
  });
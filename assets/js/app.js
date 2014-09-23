/*
 * jQuery, Velocity and Backstretch
 */
(function(){

  // Backstretch image
  $.backstretch("assets/bkg-images/night1.jpg");

  $('.switch-light').on('click', function() {
    $('body').removeClass('dark');
    $('body').addClass('light');
    $.backstretch("assets/bkg-images/sun1.jpg");
  });

  $('.switch-dark').on('click', function() {
    $('body').removeClass('light');
    $('body').addClass('dark');
    $.backstretch("assets/bkg-images/night1.jpg");
  });

})();
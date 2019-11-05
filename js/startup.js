$(document).ready(function() {
  // add images/gifs
  $('#release-img-container').prepend('<img src="img/talk_that_way.jpg" alt="new release" style="display: block;margin: auto;"></img>');
  $('#release-gif-container').prepend('<img src="img/skeletal.gif" alt="new release" style="display: block;margin: auto;"></img>');

  // fade in content
  $('#page-header').fadeIn(1000);
  $('#beat-spotlight').fadeIn(2000);
  $('#releases-spotlight').fadeIn(2500);
});

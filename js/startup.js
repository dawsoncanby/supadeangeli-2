$(document).ready(function() {

  // create release carousel and link modals
  Object.keys(linkMetaObjs).forEach((e) => {
    LinkModal.createModal(linkMetaObjs[e]);
  });
  ReleaseCarousel.createCarousel(linkMetaObjs);

  // modal click listener
  // TODO: make each icon individual
  $('#release-img').click(() => {
    $('#streaming-select-modal-skeletal').modal('show');
  });

  // setup beats
  beatMetadata.beats.forEach((e) => {
    var beat = $('<li class="beat-list-item list-group-item list-group-item-action">' + e + '</li>');
    beat.click(() => {
      Player.load('beats/' + e);
    });
    $('#beat-spotlight-list').append(beat);
  });

  $("#beat-search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#beat-spotlight-list li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  // setup control bar
  $('#play-button').click(() => {
    Player.toggleAudio();
  });

  // show page
  $('#loading-page').remove();
  $('.show-after-page-load').fadeIn(200);
});

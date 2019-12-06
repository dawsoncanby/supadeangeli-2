var ReleaseCarousel = {

  // create and return a carousel for displaying releases
  createCarousel: function(releaseObjs) {
    var items = '';
    Object.keys(releaseObjs).forEach((e, i) => {
      items = items +
      `<div class="carousel-item ${i == 0 ? 'active' : ''}">
        <div class="release-item h-100">yerr</div>
      </div>`;
    });

    var carousel = $(`
      <div id="release-carousel" class="carousel slide h-100" data-ride="carousel">
        <div class="carousel-inner h-100">
          ${items}
        </div>
        <a class="carousel-control-prev" href="#release-carousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#release-carousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    `);
    $('#release-img-container').append(carousel);
  }
};

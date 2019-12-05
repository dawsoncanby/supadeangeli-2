var LinkModal = {
  // create a modal and add it to the page
  createModal: function(modalObj) {
    var links = '';
    Object.keys(modalObj.links).forEach((e) => {
      links = links + `<a href="${modalObj.links[e]}" class="list-group-item list-group-item-action">${e}</a>`
    });
    var modalElem = $(`<div class="modal fade" id="streaming-select-modal-${modalObj.id}" tabindex="-1" role="dialog" aria-labelledby="streaming-select-modal-label" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${modalObj.message}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="list-group">
              ${links}
            </div>
          </div>
          <div class="modal-footer">${modalObj.title}</div>
        </div>
      </div>
    </div>`);

    $('body').append(modalElem);
  }
};

// modalObjs for different songs/videos
var linkModalObjs = {
  "talk that way": {
    "id": "talk-that-way",
    "message": "Select a Streaming Service",
    "title": "Talk That Way - Supa Squidds",
    "links": {
      "soundcloud": "https://soundcloud.com/supasquidds/talk-that-way",
      "spotify": "https://open.spotify.com/track/3vUcwnXfPwH8svPTp4Ez5o?si=b63N8wq3QuiRXY7AZkL-wA",
      "apple music": "https://music.apple.com/us/album/talk-that-way-single/1481901449?app=music&ign-mpt=uo%3D4"
    }
  },
  "skeletal": {
    "id": "skeletal",
    "message": "Watch Now",
    "title": "Skeletal - Supa Squidds",
    "links": {
      "youtube": "https://youtu.be/ROygtYxgTr4"
    }
  }
};

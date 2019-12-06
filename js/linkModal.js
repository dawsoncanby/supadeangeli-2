var LinkModal = {
  // create a modal and add it to the page
  createModal: function(modalObj) {
    var links = '';
    Object.keys(modalObj.links).forEach((e) => {
      links = links + `<a href="${modalObj.links[e]}" class="list-group-item list-group-item-action">${e}</a>`
    });
    var modalElem = $(`
      <div class="modal fade" id="streaming-select-modal-${modalObj.id}" tabindex="-1" role="dialog" aria-labelledby="streaming-select-modal-label" aria-hidden="true">
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
      </div>
    `);

    $('body').append(modalElem);
  }
};

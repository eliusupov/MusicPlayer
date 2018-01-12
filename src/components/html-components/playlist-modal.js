const playlistModal =
	`
	<div class="modal fade" id="playlist-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="exampleModalLabel">Add New Playlist</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <form class="playlist-form" action="">
			      <div class="modal-body d-flex align-items-center flex-column">
			        <div>
				        <div class="form-group d-flex justify-content-between">
							    <label for="playlist-name">Playlist Name:</label>
							    <input type="text" class="form-control" id="playlist-name" name="playlist-name" placeholder="eg: chill">
							  </div>
								<div class="form-group d-flex justify-content-between">
							    <label for="playlist-url">Image URL:</label>
							    <input type="text" class="form-control" id="playlist-url" name="playlist-url" placeholder="eg: www.monkey.com.song.mp3">
							  </div>
							</div>
							<div>
								<img src="https://qph.ec.quoracdn.net/main-qimg-fd5b328e4e0bd56b0d587bbf5ad47ba4-c" alt="" style="width: 50%; height: 50%;">
							</div>
			      </div>
		      </form>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
		        <button id="playlist-modal-next" type="button" data-toggle="modal" data-target="#playlist-modal2" class="btn btn-outline-success">Next</button>
		      </div>
	      </div>
	  </div>
	</div>
	`;

export default playlistModal;

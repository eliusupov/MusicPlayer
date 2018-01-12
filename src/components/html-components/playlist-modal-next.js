const playlistModalNext =
	`
	<div class="modal fade" id="playlist-modal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="exampleModalLabel">Add Songs</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <form class="song-form" action="">
			      <div id="modal-next-body" class="modal-body d-flex justify-content-between align-items-center flex-column">
				        <div class="form-group d-flex justify-content-between">
							    <label for="song-name">Song Name:</label>
							    <input type="text" class="form-control" id="song-name" name="song-name" placeholder="eg: monkey">
							  </div>
								<div class="form-group d-flex justify-content-between">
							    <label for="song-url">Song URL:</label>
							    <input type="text" class="form-control" id="song-url" name="song-url" placeholder="eg: www.monkey.com/img">
							  </div>
			      </div>
		      </form>
		      <div>
							<button id="add-songs-btn" class="btn btn-outline-success">
								<i class="fas fa-plus"></i>
								Add More Songs
							</button>
						</div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
		        <button id="modal-close-btn" type="button" class="btn btn-outline-success">Done</button>
		      </div>
	    </div>
	  </div>
	</div>
	`;

export default playlistModalNext;

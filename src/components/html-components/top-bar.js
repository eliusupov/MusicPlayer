const topBar =
	`
	<div class="container d-flex justify-content-between">
		<button type="button" data-toggle="modal" data-target="#playlist-modal" class="btn btn-outline-success">
				<span>
					<i class="fas fa-plus"></i>
				</span>
			Add New Playlist
		</button>
		<div class="col-lg-3">
			<div class="input-group">
				<input type="text" class="form-control" placeholder="Search for playlist">
				<span class="input-group-btn">
	          <button class="btn btn-outline-success" type="button">Go!</button>
	      </span>
			</div>
		</div>
	</div>
	`;

export default topBar;

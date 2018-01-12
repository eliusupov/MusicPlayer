import song from '../../assets/songs/believe.mp3';

const selectedPlayer =
	`
	<div class="selected-player d-flex justify-content-between">
		<div class="album">
			<span id="album-header2" class="album-header h3">123nnnnnnnnnnnnnnnnnnnnnnnnnnnvbnnnnnnnbbbnnnnn41111156</span>
				<span class="album-button">
					<a><i class="fas fa-pen-square" style="font-size: 25px"></i></a>
					<a><i class="fas fa-times-circle" style="font-size: 25px"></i></a>
				</span>
					<i class="play-button fas fa-play mt-auto" style="font-size: 55px"></i></i>
		</div>
		<div class="selected-playlist align-self-center mr-auto">
			<audio id="audio" controls>
				<source src="${song}" type="audio/mp3">
			</audio>
			<div class="h3">
				Now Playing:
			</div>
			<ul class="d-flex align-items-center flex-column">
				<li>
					1.312345123123
				</li>
				<li>
					1.312345123123
				</li>
				<li>
					1.312345123123
				</li>
				<li>
					1.312345123123
				</li>
			</ul>
		</div>
	</div>
	`;

export default selectedPlayer;

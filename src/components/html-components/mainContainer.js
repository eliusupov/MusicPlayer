import selectedPlayer from './selected-player';
import playlist from './playlist';

const mainContainer =
	`
	<div class="container main-container">
		<ul class="playlist-list"></ul>
		${playlist(1) + selectedPlayer}
	</div>
	`;

export default mainContainer;

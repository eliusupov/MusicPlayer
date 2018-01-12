import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import CircleType from 'circletype';
import './index.html';
import './style/font-awesome/fontawesome-all.min';
import './style/style.css';
import htmlData from './components/htmlData';
import { initiateHtml, addMoreSongs, songInputValues, playlistInputValues, makePlaylistObj } from './components/helperFunctions';
import songInputs from './components/html-components/song-inputs';

$(document).ready(() => {
initiateHtml('app', htmlData);

$('#add-songs-btn').click(() => addMoreSongs(songInputs));
$('#modal-close-btn').click(() => {
	const data = makePlaylistObj(playlistInputValues(), songInputValues());
	fetch('http://localhost/MusicPlayer/api/playlist', {
		method: 'POST',
		body: data,
	});
	fetch('http://localhost/MusicPlayer/api/playlist').then(res => res.json()).then(res => console.log(res.data));
});

const circleType = new CircleType(document.getElementById('album-header1'));
circleType.radius(180);
const circleType2 = new CircleType(document.getElementById('album-header2'));
circleType2.radius(180);


function lol2k() {
	$('#playlist-modal').modal('toggle');
}

// document.getElementById('audio').src = song;

const button = $('#playlist-modal-next');
button.click(lol2k);
});


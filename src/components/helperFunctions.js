import $ from "jquery";

const initiateHtml = (id, data) => {
	document.getElementById(id).innerHTML = data.join('');
};

const addMoreSongs = (template) => {
	$('#modal-next-body').append(template);
};

const playlistInputValues = () => {
	const formInputs = Array.from($('.playlist-form :input')).map(item => item.value);
	return {
		name: formInputs[0],
		image: formInputs[1],
	};
};

const songInputValues = () => {
	const songFormInputs = Array.from($('.song-form :input')).map(item => item.value);
	const songs = [];
	for (let i = 0; i < songFormInputs.length; i++) {
		const songObj = {
			name: songFormInputs[0],
			url: songFormInputs[1],
		};
		if (i === 1) {
			i = 0;
			songFormInputs.splice(0, 2);
			songs.push(songObj);
		}
	}
	return songs;
};

const makePlaylistObj = (playlist, songs) => {
	return JSON.stringify({
		name: playlist.name,
		image: playlist.image,
		songs,
	});
};

const addPlaylist = () => {
	console.log(this);
};

export {
	initiateHtml,
	addMoreSongs,
	songInputValues,
	playlistInputValues,
	makePlaylistObj,
};

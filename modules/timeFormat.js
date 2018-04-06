function changeTime(time) {
	var hours = Math.floor(time / 3600);

	time %= 3600;

	var minutes = Math.floor(time / 60);
	var seconds = Math.floor(time % 60);

	return hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds';
}

exports.print = changeTime;

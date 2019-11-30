function playKey(event) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

	console.log(audio);
	if (!audio) return;
	audio.currentTime = 0; //Rewind to the start
	audio.play();
	key.classList.add('playing');
	key.classList.remove('playing');
	key.classList.toggle('playing');
}
function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
	key.addEventListener('transitionend', removeTransition);
});
window.addEventListener('keydown', playKey);

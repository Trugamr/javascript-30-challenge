// play ket function
function playKey(e) {
    console.log(e);
    // making so it would work click too
    const audio = document.querySelector(`audio[data-key="${ e.target.dataset.key || e.keyCode }"]`);
    const key = document.querySelector(`.key[data-key="${ e.target.dataset.key || e.keyCode }"]`);
    if(!audio) return; // stop function if no audio
    key.classList.add('playing');
    audio.currentTime = 0; //rewind to start
    audio.volume = 0.2;
    audio.play();
}

// remove transition on transform complete
function removeTransition(e) {
     // skip if not transform
    if(e.propertyName !== 'transform') return; // skip if not transform
    this.classList.remove('playing');
}

// listening for keypress
window.addEventListener('keydown', playKey);

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', playKey);
    // removing transition
    key.addEventListener('transitionend', removeTransition);
});

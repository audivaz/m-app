const playPauseButton = document.getElementById('play-pause');
const progress = document.getElementById('progress');
const currentTimeElement = document.getElementById('current-time');
const totalTimeElement = document.getElementById('total-time');
const volumeControl = document.getElementById('volume');
const qualitySelect = document.getElementById('quality');
const audio = document.getElementById('audio');

let isPlaying = false;

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
});

audio.addEventListener('timeupdate', () => {
    updateProgress();
});

volumeControl.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

qualitySelect.addEventListener('change', (e) => {
    console.log('Quality changed to:', e.target.value);
    // Implement quality change logic here
});

function updateProgress() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = progressPercent + '%';
    currentTimeElement.textContent = formatTime(currentTime);
    totalTimeElement.textContent = formatTime(duration);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

updateProgress();

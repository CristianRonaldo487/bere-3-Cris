const song = document.getElementById("loveSong");
const toggle = document.getElementById("musicToggle");
const label = toggle.querySelector("span");

function updateMusicButton(isPlaying) {
  toggle.setAttribute("aria-pressed", String(isPlaying));
  label.textContent = isPlaying ? "Pausar canción" : "Reproducir canción";
}

async function playSong() {
  try {
    await song.play();
    updateMusicButton(true);
  } catch {
    updateMusicButton(false);
  }
}

toggle.addEventListener("click", () => {
  if (song.paused) playSong();
  else {
    song.pause();
    updateMusicButton(false);
  }
});

song.addEventListener("play", () => updateMusicButton(true));
song.addEventListener("pause", () => updateMusicButton(false));

// The browser may allow automatic playback or require the first user gesture.
playSong();

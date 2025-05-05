// Set up the audio player with the buttons to control it
const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");

// Create an array of songs so that I can add more later
const songs = ["media/winters-ice.mp3"];
let currentSongIndex = 0;

currentSongIndex = (currentSongIndex + 1) % songs.length;
audio.src = songs[currentSongIndex];
audio.load();

// Create functions to control the audio player
function playSong() {
  audio.play();
}
function pauseSong() {
  audio.pause();
}
function stopSong() {
  audio.pause();
  // If the song is stopped, reset the track's progress to 0
  audio.currentTime = 0;
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  audio.src = songs[currentSongIndex];
  playSong();
}
function previousSong() {
  currentSongIndex = (currentSongIndex - 1) % songs.length;
  audio.src = songs[currentSongIndex];
  playSong();
} 
// Add event listeners to the buttons that execute the functions
playButton.addEventListener("click", playSong);
pauseButton.addEventListener("click", pauseSong);
stopButton.addEventListener("click", stopSong);
nextButton.addEventListener("click", nextSong);
previousButton.addEventListener("click", previousSong);
function myFunction() {
    // Declare variables
    var input, filter, tables, table, tr, td, i, j, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    tables = ["resourceTable", "recipeTable"]; // IDs of both tables
  
    // Loop through both tables
    for (j = 0; j < tables.length; j++) {
      table = document.getElementById(tables[j]);
      if (!table) continue; // Skip if the table doesn't exist
  
      tr = table.getElementsByTagName("tr");
  
      // Loop through all table rows and filter based on input
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0]; // Adjust index if needed
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }  

function sortTable(tableId, n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById(tableId); // Ensure the correct table ID
    switching = true;
    dir = "asc"; // Set initial sorting direction

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

/*
I misspoke earlier. I had planned an extra page for the music player at one point, but
I altered my goal to keep the music player within the home page (but make it look more like an embeeded player).
The idea was to have a square or rectangular player with its own solid background, and it would read the track name
based upon the current index of the playlist. I waffled back and forth between YouTube tutorials and error-checking with ChatGPT, for errors I couldn't detect just by looking at the code. */

/* Here were my sources for the music player:
https://dev.to/ctrlcoding/how-to-create-a-simple-audio-player-in-html-javascript-and-css-4l2e
...I didn't keep track of my other sources, and I can't seem to find them now. I apologize for that. I watched at least three videos on it, though, and even when I followed their instructions, it didn't come out quite right. Some even tried going into a different kind of editor, but it didn't make sense to me, so I moved on to different videos.
I know more about the code now than I did when I started, so I did another review before sending this, but I still can't get it to work.
*/

// Set up the audio player with the buttons to control it
const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");

// Create an array of songs so that I can add more later
const songs = ["media/Enshrined-in-Winters-Ice.mp3"];
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
var video = document.getElementById("background-video");

video.addEventListener(
  "ended",
  function () {
    this.currentTime = 0;
    this.playbackRate = -1;
    this.play();
  },
  false
);

video.addEventListener(
  "timeupdate",
  function () {
    if (this.currentTime <= 0) {
      this.playbackRate = 1;
    }
  },
  false
);

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("mlb2-6933698").style.display = "block";
  }, 1000); // Delay of 1 second. Adjust as needed.
});

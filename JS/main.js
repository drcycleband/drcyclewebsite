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

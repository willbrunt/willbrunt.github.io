
var toggle = function(/** @type { Element } */ summary) {
    const details = summary.parentElement;

      players = details.querySelectorAll("video");
      console.log("Found " + players.length + " videos!");
      if (players.length != 0) {
          players.array.forEach(video => {
              if (video.paused) {
                  console.log("playing");
                  video.play();
              } else {
                  console.log("pausing");
                  video.pause();
              }
          });
      }
};

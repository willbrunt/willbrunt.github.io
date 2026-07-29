
var toggle = function(/** @type { Element } */ summary) {
    const details = summary.parentElement;

      frame = details.querySelector("iframe");
      players = frame.contentWindow.document.body.querySelectorAll("video");
      console.log("Found " + players.length + " videos!");
      console.log(players);
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

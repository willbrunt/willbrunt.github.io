
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var toggle = function(/** @type { Element } */ summary) {
    const details = summary.parentElement;

      vid = details.querySelector("iframe");
      vid.playVideo();
      // players = frame.contentWindow.document.body.querySelectorAll("video");
      // console.log("Found " + players.length + " videos!");
      // console.log(players);
      // if (players.length != 0) {
      //     players.array.forEach(video => {
      //         if (video.paused) {
      //             console.log("playing");
      //             video.play();
      //         } else {
      //             console.log("pausing");
      //             video.pause();
      //         }
      //     });
      // }
};

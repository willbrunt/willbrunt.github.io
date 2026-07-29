
var toggle = function(/** @type { Element } */ summary) {
    const details = summary.parentElement
    const lang = details.parentElement.getElementsByClassName("out")[0];

    lang.toggleAttribute("hide")
    lang.toggleAttribute("shown");

      players = details.querySelectorAll("video");
      if (players.length != 0) {
          players.array.forEach(video => {
              if (video.paused) {
                  video.play();
              } else {
                  video.pause();
              }
          });
      }
};

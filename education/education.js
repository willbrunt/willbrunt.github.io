
// Easter egg
if (document.getElementById("noegg") == null) {
    src = "education/img/*_lizalfos.gif"
    const lizal = [
        src.replace("*", "black"),
        src.replace("*", "blue"),
        src.replace("*", "electric"),
        src.replace("*", "gold"),
        src.replace("*", "green"),
        src.replace("*", "ice"),
        src.replace("*", "rainbow"),
        src.replace("*", "red"),
        src.replace("*", "silver"),
    ];

    function preload() {
        pl = document.getElementById("preload");

        for (i = 0; i < lizal.length; i++) {
            img = document.createElement("img");
            img.src = lizal[i];
            img.className = "pre";
            pl.appendChild(img);
        }
    }
    preload();

    function egg() { 
        egg_id = "575";

        eggnt = document.getElementById("egg-img");
        eggnt.toggleAttribute("hide");

        aud = document.getElementById("audio");
        aud.fastSeek(0);

        div = document.createElement("div");
        for (i = 0; i < 100; i++) {
            img = document.createElement("img");
            img.src = lizal[Math.floor(Math.random() * lizal.length)];
            img.className = "eggzal";

            div.appendChild(img); // load onscreen so gif starts

            img.style.top = `${Math.floor(Math.random() * (738 - 80))}px`;
            img.style.left = `${Math.floor(Math.random() * 1920  - 2020)}px`;
        }

        frame = document.getElementById("frame");
        frame.appendChild(div);
        frame.setAttribute("run", "");
        div.id = "egg";
        aud.play();

        setTimeout(function() {
            aud.pause();
        }, 43000);

        setTimeout(function() {
            div.remove();
            frame.removeAttribute("run");
            eggnt.toggleAttribute("hide");

            if (window != window.top) return;

            if (!hasmeta(egg_id)) {
                addmeta(egg_id);
                add_egg();
            }
        }, 45500);
    }
} else {
    document.getElementById("egg-img").remove();
    document.getElementById("frame").remove();
    document.getElementById("preload").remove();
}
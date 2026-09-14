if (document.getElementById("noegg") == null) {
    function egg_toggle() {
        egg_id = "238";
        divs = document.getElementsByClassName("quack")
        img = divs[0];
        frame = divs[1];

        if (document.URL.split("?")[1] == null || document.URL.split("?")[1].indexOf("q") == -1) {
            if (!hasmeta(egg_id)) {
                addmeta(egg_id);
                add_egg();

                // Add warning to stop the quacking
                para = document.createElement("p");
                para.innerHTML = `
                    <p>Click the rubber ducky again to stop the quacking.</p>
                `;

                setTimeout(function () {
                    document.getElementById("egg-click").before(para);
                }, 1501);
            }
            addmeta("q");
            quackOn();
            img.setAttribute("on", "");
            frame.title = "Click again to stop quacking";
        } else {
            rmmeta("q");
            quackOff();
            img.removeAttribute("on");
        }
    }

    function init_egg() {
        if (window != window.top) return; // Very glitchy in portfolio tab

        cert = document.getElementById("cert");

        frame = document.createElement("div");
        frame.className = "quack";

        img = document.createElement("img");
        // img.className = "quack";
        img.src = "aboutme/img/quack.svg";
        frame.appendChild(img);

        div = document.createElement("div");
        div.className = "quack";
        div.style = "z-index: 6; top: calc(-48.5% - 20.5833px); cursor: crosshair;";
        div.setAttribute("onClick", "egg_toggle()");

        cert.appendChild(frame);
        cert.appendChild(div);
        
        if (hasmeta("q")) {
            img = document.getElementsByClassName("quack")[0]
            img.setAttribute("on", "");
        }
    }
    init_egg();
}
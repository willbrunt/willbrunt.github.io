
// Dropdown handler
var toggle = function(/** @type { Element } */ summary) {
    const details = summary.parentElement
    const lang = details.parentElement.getElementsByClassName("out")[0];

    lang.toggleAttribute("hide")
    lang.toggleAttribute("shown");
};

// Creates languages below the details and update their open behavior
function init() {
    // Sanity check to make sure inside & outside of details are the same
    samples = document.getElementsByClassName("sample");
    for (i = 0; i < samples.length; i++) {
        lang = samples[i].getElementsByClassName("lang")[0];

        out = document.createElement("div");
        out.className = "lang";
        out.innerHTML = "<div class='out' shown=''>" + lang.innerHTML + "</div>";

        samples[i].appendChild(out);
    }

    for (i = 0; i < samples.length; i++) {
        deet = samples[i].getElementsByTagName("details")[0];
        if (deet.hasAttribute("open")) {
            out = samples[i].getElementsByClassName("out")[0];
            out.toggleAttribute("hide");
            out.toggleAttribute("shown");
        }
    }
}

// Make every details open, state=true is open
function toggle_all(state) {
    if (typeof(state) != typeof(true)) {
        console.log("Heck off putting '" + state + "' into a bool parameter");
        return;
    }

    samples = document.getElementsByClassName("sample");
    for (i = 0; i < samples.length; i++) {
        deet = samples[i].getElementsByTagName("details")[0];
        if (state ^ deet.hasAttribute("open")) {
            deet.toggleAttribute("open");

            out = samples[i].getElementsByClassName("out")[0];
            out.toggleAttribute("hide");
            out.toggleAttribute("shown");
        }
    }
}
init();

// edit only the iframe instance of page
if (window != window.top) {
    doc = window.document;

    // Change recursive embed to an image and open
    div = doc.createElement("img");
    div.className = "inset";
    div.setAttribute("src", "programs/img/site/embed.png");
    div.setAttribute("alt", "Horsethief Canyon in Drumheller");
    div.setAttribute("title", "Horsethief Canyon in Drumheller");
    ins = doc.getElementsByClassName("inset")[0];
    ins.replaceWith(div);

    doc.getElementById("site").setAttribute("open", "");

    // Change the description of the webpage in the portfolio
    de = doc.getElementById("last").getElementsByTagName("details")[0];
    de.getElementsByTagName("summary")[0].getElementsByTagName("span")[0].innerHTML = "Recursive Website";
    de.getElementsByTagName("p")[0]
        .innerHTML = "<u>Yes, this recursive page has the same HTML.</u>";
}

if (window.top.document.getElementById("noegg") == null) {
    press = true;

    // Easter egg handler
    eggs = [];
    var egg = function(/** @type { Element } */ button) {
        PiID = "314";
        eggs.push(button.id);

        if (eggs.length > 6) {
            eggs.shift();
        }

        if (eggs.join("") == Math.round(Math.PI * 1e5).toString()) {
            if (hasmeta(PiID)) return;

            addmeta(PiID);
            add_egg();
        }

        if (press) {
            eggements = window.document.getElementsByClassName("egg")[0].getElementsByTagName("div");
            for (i = 0; i < eggements.length; i++) {
                eggements[i].style.color = "#000";
                eggements[i].style.border = "1px solid #000";
            }

            press = false;
        };
    }

    // Create easter egg in sidebar
    function init_egg() {
        if (window == window.top) {
            div = document.createElement("div")
            div.className = "egg";

            for (i = 0; i <= 9; i++) {
                col = document.createElement("div");
                col.setAttribute("title", "You feel there may be something hidden here in a different version.");
                col.setAttribute("onclick", "egg(this)");
                col.innerHTML = i;
                col.id = i;

                div.append(col);
            }

            inf = document.getElementsByClassName("sidebartexts")[0];
            inf.after(div);
        } else {
            doc = window.document;
            div = doc.createElement("div");
            div.className = "egg";
            div.id = "pi";

            div.innerHTML = "π";

            inf = doc.getElementsByClassName("sidebartexts")[0];
            inf.after(div);

            // Prevent scrollbar from large easter egg font
            inf.parentElement.parentElement.id = "viewbar";
        }
    }
    init_egg();
} else {
    function rm_disclaim() {
        if (window != window.top) return;

        p = document.getElementById("site").getElementsByTagName("p")[0];
        p.innerHTML = p.innerHTML.replace("(other than audio)", "");
        
    }
    rm_disclaim()
}

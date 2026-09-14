if (document.getElementById("noegg") == null) {
    // Add sona behind the pfp
    pfp_egg = document.createElement("div");
    pfp_egg.id = "egg-frame";
    pfp_egg.innerHTML = `
        <img id="pfp-egg" onclick="egg_activate()" src="work/egg.png" title="Reference to Anubis by Techaro">
    `;

    document.getElementsByClassName("pfp_link")[0].before(pfp_egg);
    
    setTimeout(function () {document.getElementById("pfp-egg").setAttribute("ready", "");}, 100);

    function egg_activate() {
        egg_id = "...";

        if (!hasmeta(egg_id)) {
            addmeta(egg_id);
            add_egg();
        }
    }
} else {

}
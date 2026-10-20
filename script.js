// knop
const nee = document.getElementById("nee");

// verplaats
function vlucht(e) {
    e.preventDefault();
    const marge = 16;
    const breedte = window.innerWidth - nee.offsetWidth - marge * 2;
    const hoogte = window.innerHeight - nee.offsetHeight - marge * 2;
    nee.style.position = "fixed";
    nee.style.left = marge + Math.random() * breedte + "px";
    nee.style.top = marge + Math.random() * hoogte + "px";
}

// events
if (nee) {
    nee.addEventListener("mouseenter", vlucht);
    nee.addEventListener("touchstart", vlucht, { passive: false });
    nee.addEventListener("click", vlucht);
}
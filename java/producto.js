const hamburgerMenu = document.getElementById("hamburgerMenu");
const navLinks = document.getElementById("navLinks");

hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


function irADetalles(url) {
    window.location.href = url;
}

function comprarProducto(url) {
    window.location.href = url;
}
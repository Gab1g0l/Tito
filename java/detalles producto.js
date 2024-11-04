const hamburgerMenu = document.getElementById("hamburgerMenu");
const navLinks = document.getElementById("navLinks");

hamburgerMenu.addEventListener("click", () => {
    console.log("hamburguesa clickeada");
    navLinks.classList.toggle("show");
});

function comprarProducto(url) {
    window.location.href = url;
}
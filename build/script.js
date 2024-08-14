const mobileHamburgerMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

function onToggleMenu(e) {
    const img = e.target;
    if (img.src.includes("menu")) {
        img.src = "./img/close.png";
        navLinks.classList.remove("top-[-100%]")
        navLinks.classList.add("top-[9%]")
    } else {
        img.src = "./img/menu.png";
        navLinks.classList.remove("top-[9%]")
        navLinks.classList.add("top-[-100%]")
    }
}

mobileHamburgerMenu.addEventListener("click", onToggleMenu);
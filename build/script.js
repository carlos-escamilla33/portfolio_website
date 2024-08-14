const mobileHamburgerMenu = document.querySelector(".mobile-menu");

function onToggleMenu(e) {
    const img = e.target;
    if (img.src.includes("menu")) {
        img.src = "./img/close.png";
    } else {
        img.src = "./img/menu.png";
    }
}

mobileHamburgerMenu.addEventListener("click", onToggleMenu);
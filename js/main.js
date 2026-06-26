document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("closeBtn");
    const overlay = document.getElementById("overlay");

    if (menuBtn) {
        menuBtn.addEventListener("click", function () {
            sidebar.classList.add("active");
            overlay.classList.add("active");
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        });
    }

    if (overlay) {
        overlay.addEventListener("click", function () {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        });
    }

});

const pagesBtn = document.getElementById("pagesBtn");
const pagesDropdown = document.getElementById("pagesDropdown");

if (pagesBtn) {

    pagesBtn.addEventListener("click", () => {

        pagesDropdown.classList.toggle("show");

    });

}
window.addEventListener("load", () => {

    if (!localStorage.getItem("welcomeShown")) {

        setTimeout(() => {
            document.getElementById("welcomePopup").classList.add("show");
        }, 700);

    }

});

document.getElementById("closeWelcome").onclick = function () {

    document.getElementById("welcomePopup").classList.remove("show");

    localStorage.setItem("welcomeShown", "true");

}

document.querySelectorAll(".thumbnail-list img").forEach(img => {

    img.addEventListener("click", function(){

        document.querySelector(".main-image img").src = this.src;

        document.querySelectorAll(".thumbnail-list img")
            .forEach(i => i.classList.remove("active-thumb"));

        this.classList.add("active-thumb");

    });

});
var link = document.querySelector(".search-hotel");

var popup = document.querySelector(".modal-search");

var form = popup.querySelector("form");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.toggle("modal_show");

    popup.classList.toggle("modal_hide");
});
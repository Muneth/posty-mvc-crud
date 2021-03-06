let share_btn = document.querySelectorAll(".card__footer .share-btn");
let share_footer = document.querySelectorAll(".share-footer");
let share_btn_footer = document.querySelectorAll(".share-footer .share-btn");
let share_popup = document.querySelectorAll(".share-popup");
let body = document.querySelector("body");

share_btn.forEach((button, bindex) =>
  button.addEventListener("click", () => {
    if (window.matchMedia("(max-width:50rem)").matches) {
      share_footer[bindex].classList.toggle("share-footer--active");
    } else {
      share_popup[bindex].classList.toggle("share-popup-active");
    }
  })
);

// Close share footer
share_btn_footer.forEach((button, ind) =>
  button.addEventListener("click", () => {
    share_footer[ind].classList.remove("share-footer--active");
  })
);

body.addEventListener("click", (event) =>
  share_popup.forEach((e) => {
    if (
      e.classList.contains("share-popup-active") &&
      !event.target.classList.contains("share-btn") &&
      !event.target.classList.contains("btn-img")
    ) {
      e.classList.remove("share-popup-active");
    }
  })
);

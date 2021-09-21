"use strict";

document.addEventListener(
  "DOMContentLoaded",
  (() => {
    const defaultPopups = document.querySelectorAll(".default-popup");

    if (!defaultPopups) {
      return;
    }

    const closePopupButton = document.querySelectorAll(".close-default-popup");
    const openPopupButton = document.querySelectorAll(".open-default-popup");
    const openNextPopupButton = document.querySelector(".open-next-popup");

    const openPopup = () => {
      defaultPopups.forEach((popup, id) => {
        defaultPopups[0].classList.remove("hidden");
      });
    };
    const closePopup = () => {
      defaultPopups.forEach((popup, id) => {
        defaultPopups[id].classList.add("hidden");
      });
    };

    openNextPopupButton.addEventListener("click", () => {
      defaultPopups[0].classList.add("hidden");
      defaultPopups[1].classList.remove("hidden");
    });

    openPopupButton.forEach((closeButton) => {
      closeButton.addEventListener("click", openPopup);
    });
    closePopupButton.forEach((closeButton) => {
      closeButton.addEventListener("click", closePopup);
    });
  })()
);

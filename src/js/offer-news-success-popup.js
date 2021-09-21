"use strict";

document.addEventListener(
  "DOMContentLoaded",
  (() => {
    const defaultPopupOfferNews = document.querySelector(
      ".default-popup_news-was-offered"
    );

    if (!defaultPopupOfferNews) {
      return;
    }

    const closePopupButton = document.querySelectorAll(
      ".close-default-popup_news-was-offered"
    );
    const openPopupButton = document.querySelector(
      ".open-default-popup_news-was-offered"
    );

    const openPopup = () => {
      defaultPopupOfferNews.classList.remove("hidden");
    };
    const closePopup = () => {
      defaultPopupOfferNews.classList.add("hidden");
    };

    openPopupButton.addEventListener("click", openPopup);

    closePopupButton.forEach(closeButton => {
      closeButton.addEventListener("click", closePopup);
    })
  })()
);

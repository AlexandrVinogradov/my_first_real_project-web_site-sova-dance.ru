"use strict";

import Swiper from "swiper";
import swiper from "swiper/bundle";

document.addEventListener(
  "DOMContentLoaded",
  (() => {
    let mainPage = document.querySelector(".main-page");

    if (!mainPage) {
      return;
    }

    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 23,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  })()
);

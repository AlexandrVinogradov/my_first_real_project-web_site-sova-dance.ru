'use strict';

import Swiper from 'swiper'
import swiper from 'swiper/bundle';

document.addEventListener(
  'DOMContentLoaded',
  (() => {
    let specialProjectPage = document.querySelector('.special-project-page');
    let articleItemPage = document.querySelector('.article-item-page');
    let photoAlbumPage = document.querySelector('.photo-album-page');

    if (!specialProjectPage && !articleItemPage && !photoAlbumPage) {
      return;
    }

    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });


    var swiper = new Swiper('.swiper-second', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });
  })()
);

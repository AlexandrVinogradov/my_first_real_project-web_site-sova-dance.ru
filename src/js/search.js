'use strict';

document.addEventListener(
  'DOMContentLoaded',
  (() => {
    const header = document.querySelector('.header-wrapper');

    if (!header) {
      return;
    }

    const searchButton = document.querySelector('.search-button');
    const searchBlock = document.querySelector('.header__search');
    const input = document.querySelector('.header__search_input');
    let isOpen = false;

    searchButton.addEventListener('click', () => {
      if (!isOpen) {
        searchBlock.style.height = `${searchBlock.scrollHeight + 24}px`;
        input.focus();
        isOpen = !isOpen;
      } else {
        searchBlock.style.height = `${0}px`;

        isOpen = !isOpen;
      }
    });
  })()
);

'use strict';

document.addEventListener(
  'DOMContentLoaded',
  (() => {
    const dropdown = document.querySelectorAll('.direction-dropdown__wrapper');

    if (!dropdown) {
      return;
    }
    const dropdownBody = document.querySelectorAll('.direction-dropdown__list');
    const iconArrow = document.querySelector('.icon-arrow-down__path');
    let isOpen = false;

    dropdown.forEach((dd, id) => {
      dd.addEventListener('click', () => {
        dropdownToggle(id);
      });
    });

    const dropdownToggle = (id) => {
      if (isOpen) {
        dropdownBody[id].style.height = `0px`;
        isOpen = !isOpen;
        iconToggle();
      } else {
        dropdownBody[id].style.height = `${dropdownBody[id].scrollHeight}px`;
        isOpen = !isOpen;
        iconToggle();
      }
    };

    const iconToggle = () => {
      // console.log(isOpen);
      if (isOpen) {
        iconArrow.setAttributeNS(
          'http://www.w3.org/1999/xlink',
          'href',
          'assets/img/icon-arrow-up.svg#icon-arrow-up'
        );
      } else {
        iconArrow.setAttributeNS(
          'http://www.w3.org/1999/xlink',
          'href',
          'assets/img/icon-arrow-down.svg#icon-arrow-down'
        );
      }
    };

    const closeDropdownOnClickOutSide = (e) => {
      if (isOpen && !e.target.closest('.direction-dropdown__wrapper')) {
        dropdownBody[0].style.height = `0px`;
        isOpen = !isOpen;
        iconToggle();
      }
    };

    window.addEventListener('click', closeDropdownOnClickOutSide);
  })()
);




// js/navigation.js

import { lockScroll, unlockScroll } from './utils.js';

function initializeNav(openBtnId, closeBtnSelector, menuSelector) {
    const openButton = document.querySelector(openBtnId);
    const closeButton = document.querySelector(closeBtnSelector);
    const menu = document.querySelector(menuSelector);

    if (openButton && closeButton && menu) {
        openButton.addEventListener("click", () => {
            menu.classList.add("OpenNav");
            lockScroll();
        });

        closeButton.addEventListener("click", () => {
            menu.classList.remove("OpenNav");
            unlockScroll();
        });
    }
}

export function setupNavigation() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        initializeNav("#open-mobile-nav", ".close-nav-mobile", ".nav-container-mobile");
    } else if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) {
        initializeNav("#open-tablet-nav", ".close-nav-tablet", ".nav-container-tablet");
    } else if (window.matchMedia("(min-width: 1024px)").matches) {
        initializeNav("#open-desktop-nav", ".close-nav-desktop", ".nav-container-desktop");
    }
}
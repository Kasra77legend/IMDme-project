// js/navigation.js

function setupnav(){
    // mobile navbar apear code
let MobileMenu = document.querySelector(".nav-container-mobile");
let MobileOpenButton = document.querySelector("#open-mobile-nav");
let MobileCloseButton = document.querySelector(".close-nav-mobile");

function lockScroll() {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }
  
  
  function unlockScroll() {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }


MobileOpenButton.addEventListener("click",function(){
    MobileMenu.classList.add("OpenNav")
    lockScroll()
})

MobileCloseButton.addEventListener("click",function(){
    MobileMenu.classList.remove("OpenNav")
    unlockScroll()
})


// tablet navbar apear code
let TabletMenu = document.querySelector(".nav-container-tablet");
let TabletOpenButton = document.querySelector("#open-tablet-nav");
let TabletCloseButton = document.querySelector(".close-nav-tablet");

TabletOpenButton.addEventListener("click",function(){
    TabletMenu.classList.add("OpenNav")
    lockScroll()
})

TabletCloseButton.addEventListener("click",function(){
    TabletMenu.classList.remove("OpenNav")
    unlockScroll()
})


// desktop navbar apear code
let DesktopMenu = document.querySelector(".nav-container-desktop");
let DesktopOpenButton = document.querySelector("#open-desktop-nav");
let DesktopCloseButton = document.querySelector(".close-nav-desktop");

DesktopOpenButton.addEventListener("click",function(){
    DesktopMenu.classList.add("OpenNav")
    lockScroll()
})

DesktopCloseButton.addEventListener("click",function(){
    DesktopMenu.classList.remove("OpenNav")
    unlockScroll()
})
}

export default setupnav();
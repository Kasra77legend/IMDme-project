// js/main.js


import { setupBackToTop } from "./BackToTop.js";
import { setupSignInNotification } from "./SignInNotfication.js";
import { fetchBanner } from "./Banner.js";
fetchBanner();
import { fetchUpNext } from "./Upnext.js";
fetchUpNext();
import { fetchFeaturedToday } from "./FeaturedToday.js";
fetchFeaturedToday();
import { fetchPopularActors } from "./Popularactors.js";
fetchPopularActors();
import { fetchTopTen } from "./TopTen.js";
fetchTopTen();
import { fetchInterest } from "./Intrest.js";
fetchInterest();
import { fetchBorn } from "./BornToday.js";
fetchBorn();
import { fetchMoreExplore } from "./MoreExplore.js";
fetchMoreExplore()
import { fetchExclusive } from "./Exclusive.js";
fetchExclusive()
import { fetchBoxOffice } from "./BoxOffice.js";
fetchBoxOffice()
import { fetchNews } from "./news.js";
fetchNews()
import { fetchRecent } from "./Recent.js";
fetchRecent()
lockScroll()
unlockScroll()
import { setupNavigation } from "./Navigation.js";

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupBackToTop();
  setupSignInNotification();

  // Re-run navigation setup on window resize to handle orientation changes or browser resizing
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // We only need to re-evaluate the navigation logic on resize
      setupNavigation();
    }, 250);
  });
});

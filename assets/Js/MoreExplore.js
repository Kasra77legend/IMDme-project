export async function fetchMoreExplore() {
    try {
      // Fetch data from your local json-server's 'banner' endpoint
      let data = await fetch("https://kasra77legend.github.io/IMDme-API/db.json");
      let res = await data.json();
      // Map through the data array to create an HTML string for each slide
      let moreExplore = res.moreExplore.map(function (slide) {
        return `
                <div class="swiper-slide">
                    <div class="picture">
                      <img src="${slide.featuredimage}" alt="${slide.feturedAlt}">
                    <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8H21M7 12H21M7 16H21M3 8H3.01M3 12H3.01M3 16H3.01" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                    <h2>${slide.title}</h2>
                    <h3>${slide.subtitle}</h3>
                  </div>
              `;
      });
  
      // Select all banner containers (desktop, tablet, mobile) and inject the HTML
      document
        .querySelectorAll(".more-explore-container .swiper-wrapper")
        .forEach((wrapper) => {
          wrapper.innerHTML = moreExplore.join("");
        });
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export default fetchMoreExplore();
  
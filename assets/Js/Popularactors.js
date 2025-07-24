export async function fetchPopularActors() {
    try {
      // Fetch data from your local json-server's 'banner' endpoint
      let data = await fetch("https://kasra77legend.github.io/IMDme-API/db.json");
      let res = await data.json();
      // Map through the data array to create an HTML string for each slide
      let popular = res.popular.map(function (slide) {
        return `
                <div class="swiper-slide">
                <img src="${slide.popularimage}" alt="${slide.PopularAlt}" />
                <h4>${slide.description.rate} (<svg width="10px" height="10px" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-triangle-up" fill="#67AD4B"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>1236</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M7.96,2.392 C8.541,1.812 9.482,1.812 10.064,2.392 L16.506,8.836 C17.088,9.417 17.345,10.939 15.506,10.939 L2.518,10.939 C0.616,10.939 0.936,9.418 1.517,8.836 L7.96,2.392 L7.96,2.392 Z" fill="#67AD4B" class="si-glyph-fill"> </path> </g> </g></svg> ${slide.description.vote})</h4>
                <h3>${slide.title}</h3>
              </div>
              `;
      });
  
      // Select all banner containers (desktop, tablet, mobile) and inject the HTML
      document
        .querySelectorAll(".pa-container .swiper-wrapper")
        .forEach((wrapper) => {
          wrapper.innerHTML = popular.join("");
        });
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export default fetchPopularActors();
  
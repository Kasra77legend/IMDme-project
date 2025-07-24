export async function fetchRecent() {
    try {
      // Fetch data from your local json-server's 'banner' endpoint
      let data = await fetch("https://kasra77legend.github.io/IMDme-API/db.json");
      let res = await data.json();
      // Map through the data array to create an HTML string for each slide
      let Recent = res.Recent.map(function (slide) {
        return `
                    <div class="swiper-slide">
                <img src="${slide.image_url}" alt="${slide.image_alt}" />
                <h3>${slide.title}</h3>
              </div>
                  `;
      });
  
      // Select all banner containers (desktop, tablet, mobile) and inject the HTML
      document.querySelectorAll(".recent-container .swiper-wrapper").forEach((wrapper) => {
        wrapper.innerHTML = Recent.join("");
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export default fetchRecent();
  
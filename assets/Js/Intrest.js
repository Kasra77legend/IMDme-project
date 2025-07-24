export async function fetchInterest() {
    try {
      // Fetch data from your local json-server's 'banner' endpoint
      let data = await fetch("https://kasra77legend.github.io/IMDme-API/db.json");
      let res = await data.json();
      // Map through the data array to create an HTML string for each slide
      let interest = res.interest.map(function (slide) {
        return `
                <div class="swiper-slide">
                <img src="${slide.imageUrl}" alt="${slide.altText}" />
                <h3>${slide.titleText}</h3>
              </div>
              `;
      });
  
      // Select all banner containers (desktop, tablet, mobile) and inject the HTML
      document
        .querySelectorAll(".popular-interests-container .swiper-wrapper")
        .forEach((wrapper) => {
          wrapper.innerHTML = interest.join("");
        });
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export default fetchInterest();
  
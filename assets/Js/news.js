export async function fetchNews() {
  try {
    // Fetch data from your local json-server's 'banner' endpoint
    let data = await fetch("https://kasra77legend.github.io/IMDme-API/db.json");
    let res = await data.json();
    // Map through the data array to create an HTML string for each slide
    let news = res.news.map(function (slide) {
      return `
                  <div class="swiper-slide">
                <div class="news-info">
                  <img src="${slide.image_url}" />
                  <div class="news-det">
                    <h2>${slide.description}</h2>
                    <p>${slide.subtitle}</p>
                  </div>
                </div>
              </div>
                `;
    });

    // Select all banner containers (desktop, tablet, mobile) and inject the HTML
    document.querySelectorAll(".news-container .swiper-wrapper").forEach((wrapper) => {
      wrapper.innerHTML = news.join("");
    });
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchNews();

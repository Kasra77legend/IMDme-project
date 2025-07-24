export async function fetchBorn() {
  try {
    // Fetch data from your local json-server's 'banner' endpoint
    let data = await fetch("https://kasra77legend.github.io/IMDme-API/db.json");
    let res = await data.json();
    // Map through the data array to create an HTML string for each slide
    let born = res.borntoday.map(function (slide) {
      return `
                <div class="swiper-slide">
                <img src="${slide.image}" alt="${slide.image_alt}" />
                <h3>${slide.name}</h3>
                <h4>${slide.age}</h4>
              </div>
              `;
    });

    // Select all banner containers (desktop, tablet, mobile) and inject the HTML
    document
      .querySelectorAll(".born-today-container .swiper-wrapper")
      .forEach((wrapper) => {
        wrapper.innerHTML = born.join("");
      });
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchBorn();

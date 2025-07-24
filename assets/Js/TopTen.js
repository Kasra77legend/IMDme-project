export async function fetchTopTen() {
  try {
    // Fetch data from your local json-server's 'banner' endpoint
    let data = await fetch("https://kasra77legend.github.io/IMDme-API/db.json");
    let res = await data.json();
    // Map through the data array to create an HTML string for each slide
    let topten = res.topten.map(function (slide) {
      return `
                <div class="swiper-slide">
                <img src="${slide.image}" alt="${slide.alt}" />
                <svg width="23px" height="23px" viewBox="0 0 20.00 20.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.0002"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(2.0999999999999996,2.0999999999999996), scale(0.79)"><rect x="0" y="0" width="20.00" height="20.00" rx="0" fill="#fff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.12"></g><g id="SVGRepo_iconCarrier"> <path fill="#949494" d="M18.1818182,0 C19.1859723,0 20,0.814027728 20,1.81818182 L20,18.1818182 C20,19.1859723 19.1859723,20 18.1818182,20 L1.81818182,20 C0.814027728,20 0,19.1859723 0,18.1818182 L0,1.81818182 C0,0.814027728 0.814027728,0 1.81818182,0 L18.1818182,0 Z M10.2975939,4.91062796 C9.92103616,4.91062796 9.61577577,5.21588836 9.61577577,5.59244614 L9.61577577,5.59244614 L9.615,9.299 L5.90909091,9.299131 C5.56676565,9.299131 5.28336385,9.55141232 5.23466539,9.88019509 L5.22727273,9.98094918 C5.22727273,10.357507 5.53253313,10.6627674 5.90909091,10.6627674 L5.90909091,10.6627674 L9.615,10.662 L9.61577577,14.3694522 C9.61577577,14.7117775 9.86805709,14.9951793 10.1968399,15.0438777 L10.2975939,15.0512704 C10.6741517,15.0512704 10.9794121,14.74601 10.9794121,14.3694522 L10.9794121,14.3694522 L10.979,10.662 L14.686097,10.6627674 C15.0284222,10.6627674 15.311824,10.410486 15.3605225,10.0817033 L15.3679152,9.98094918 C15.3679152,9.6043914 15.0626548,9.299131 14.686097,9.299131 L14.686097,9.299131 L10.979,9.299 L10.9794121,5.59244614 C10.9794121,5.25012088 10.7271308,4.96671909 10.398348,4.91802062 Z"></path> </g></svg>
                <div class="card-info">
                  <div class="star-part">
                    <span><svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12px" height="12px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#F5C518"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#F5C518" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"></path> </g></svg> ${slide.rating}</span>
                    <button> <svg width="13px" height="13px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#3d65e7"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#3d65e7" stroke-width="1.32" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
                  </div>
                  <div class="movie-info">
                    <h3>${slide.title}</h3>
                  </div>
                  <div class="whatchlist">
                    <button>
                      <svg width="14px" height="14px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="#476ef0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m12.75 7.75h-10m5-5v10"></path> </g></svg>
                      <span>Whatchlist</span>
                    </button>
                  </div>
                  <div class="trailer">
                    <svg width="11px" height="11px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#ffffff"></path> </g></svg>
                  <span>Trailer</span>
                  </div>

                </div>
              </div>
              `;
    });

    // Select all banner containers (desktop, tablet, mobile) and inject the HTML
    document
      .querySelectorAll(".top-ten-container .swiper-wrapper")
      .forEach((wrapper) => {
        wrapper.innerHTML = topten.join("");
      });
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchTopTen();

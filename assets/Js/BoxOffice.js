export async function fetchBoxOffice() {
    try {
      // Fetch data from your local json-server's 'banner' endpoint
      let data = await fetch("https://kasra77legend.github.io/IMDme-API/db.json");
      let res = await data.json();
      // Map through the data array to create an HTML string for each slide
      let BoxOffice = res.BoxOffice.map(function (slide) {
        return `
                  <div class="box-office-options">
                <h3>${slide.num}</h3>
                <span>|</span>
                <svg width="52px" height="52px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.9998 5.11V16.47C21.9998 17.92 20.9598 18.53 19.6898 17.83L17.7598 16.75C17.5998 16.66 17.4998 16.49 17.4998 16.31V8.99C17.4998 6.45 15.4298 4.38 12.8898 4.38H8.81984C8.44984 4.38 8.18984 3.99 8.35984 3.67C8.87984 2.68 9.91984 2 11.1098 2H18.8898C20.5998 2 21.9998 3.4 21.9998 5.11Z" fill="#292D32"></path> <path d="M12.89 5.87891H5.11C3.4 5.87891 2 7.27891 2 8.98891V20.3489C2 21.7989 3.04 22.4089 4.31 21.7089L8.24 19.5189C8.66 19.2889 9.34 19.2889 9.76 19.5189L13.69 21.7089C14.96 22.4089 16 21.7989 16 20.3489V8.98891C16 7.27891 14.6 5.87891 12.89 5.87891ZM11 12.7489H9.75V13.9989C9.75 14.4089 9.41 14.7489 9 14.7489C8.59 14.7489 8.25 14.4089 8.25 13.9989V12.7489H7C6.59 12.7489 6.25 12.4089 6.25 11.9989C6.25 11.5889 6.59 11.2489 7 11.2489H8.25V9.99891C8.25 9.58891 8.59 9.24891 9 9.24891C9.41 9.24891 9.75 9.58891 9.75 9.99891V11.2489H11C11.41 11.2489 11.75 11.5889 11.75 11.9989C11.75 12.4089 11.41 12.7489 11 12.7489Z" fill="#292D32"></path> </g></svg>
                 <div class="box-office-det">
                  <h2>${slide.title}</h2>
                  <h3>${slide.price}</h3>
                 </div>
              </div>
                `;
      });
  
      // Select all banner containers (desktop, tablet, mobile) and inject the HTML
      document
        .querySelectorAll(".box-office-content")
        .forEach((wrapper) => {
          wrapper.innerHTML = BoxOffice.join("");
        });
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export default fetchBoxOffice();
  
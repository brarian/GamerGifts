$(document).ready(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    getEtsyResults();
    
  });
});

function getEtsyResults() {
  console.log("etsy ran");
  let term = $("input").val();
  etsyURL = `https://openapi.etsy.com/v2/listings/active.js?keywords=${term}&limit=12&includes=Images:1&api_key=${
    esty.KEYSTRING
  }`;

  console.log(etsyURL);
  $.ajax({
    url: etsyURL,
    async: true,
    dataType: "jsonp",
    beforeSend: function showSpinner() {
      $(".loader").css("display", "block");
    },
    complete: function hideSpinner(){
      $(".loader").css("display", "none");
    }, 
    success: showEtsyResults,
    error: showError
  });
}

function showEtsyResults(data) {
  $(".etsy_search_results").empty();
  data.results.map((result, i) => {
    console.log(data.results);
    let image = result.Images[0].url_170x135; 
    let title =result.title;
    let url = result.url;
    let description = result.description.slice(0, 245);
    // const image_container = 
    // `<figure >
    //  <a href=${url} target="_blank"> <img src=${image} alt="${description}"></a>
    // </figure>`; 

  $(".etsy_search_results").append(
    `<div class="card" style="min-width: 20rem; max-width: 25rem"> 
      <img class="card-img-top" src="${image}" alt="card image cap"> 
        <div class="card-body"> 
          <h5 class="card-title">${title}</h5>
          <p class="card-text"> ${description}</p>
            <a href="${url}" target="_blank" class="btn btn-primary"> See More </a>  
        </div>
    </div>`
    );
  });
}

function showError() {
  $(".etsy_search_results").append(
    `<h2> There was an error processing your request</h2>`
  );
}

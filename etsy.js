function getEtsy(userInput) {
  etsyURL = `https://openapi.etsy.com/v2/listings/active.js?keywords=${userInput}&limit=12&includes=Images:1&api_key=${
    etsy.KEYSTRING
  }`;

  $.ajax({
    url: etsyURL,
    async: true,
    dataType: "jsonp",
    beforeSend: function showSpinner() {
      $(".loader").css("display", "block");
    },
    complete: function hideSpinner() {
      $(".loader").css("display", "none");
    },
    success: showEtsyResults,
    error: showError
  });
}

function showEtsyResults(data) {
  $(".etsy_search_results").empty();
  data.results.map((result, i) => {
    let image = result.Images[0].url_170x135;
    let title = result.title;
    let url = result.url;
    let description = result.description.slice(0, 245);

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

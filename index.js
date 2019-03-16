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
    dataType: "jsonp",
    success: showEtsyResults
  });
}

function showEtsyResults(data) {
  data.results.map((result, i) => {
    console.log()
    let title  = result.title; 
    let url = result.url;
    let description = result.description; 
    $(".etsy_search_results").append(`<li> ${title, url, description}</li>`);
  })
}

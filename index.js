
$(document).ready(function () {
  $('form').submit(function(e){
    e.preventDefault();
    getEtsyResults();
  })
})




function getEtsyResults() {
  console.log('etsy ran');
  let term = $("input").val();
  etsyURL = `https://openapi.etsy.com/v2/listings/active.js?keywords=${term}&limit=12&includes=Images:1&api_key=${esty.KEYSTRING}`

  console.log(etsyURL)
  $.ajax({
    url: etsyURL, 
    dataType: 'jsonp', 
    success: function(data){
      console.log(data.results)
    }
  })

}






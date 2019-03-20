$(document).ready(function() {
  $("form").submit(function(e) {
    let userInput = $("input").val();
    e.preventDefault();
    getEtsyResults(userInput);
    getTdMovie(userInput);
  });
});

function showError() {
  $(".etsy_search_results").append(
    `<h2> There was an error processing your request</h2>`
  );
}

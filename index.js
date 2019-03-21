$(document).ready(function() {
  $("form").submit(function(e) {
    let userInput = $("input").val();
    e.preventDefault();
    getEtsy(userInput);
    getTdMovie(userInput);
    getTdBooks(userInput);
    getTdMusic(userInput);
    getTdGames(userInput);

  });
});

function showError() {
  $(".etsy_search_results").append(
    `<h2> There was an error processing your request</h2>`
  );
}

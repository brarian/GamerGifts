function getTdMovie(userInput) { 
   $.ajax({
    url: 'https://tastedive.com/api/similar',
    async: true,
    jsonp: 'callback',
    dataType: 'jsonp',
    data: {
      'q': userInput,
      'k': td.ACCESSKEY,
      'limit': 20,
      'type': 'movies',
      'info': 1
    }, 
    success: showTdMovieResults, 
    error: showError

  });
}


function showTdMovieResults(data){
  console.log(data.Similar.Results)
}
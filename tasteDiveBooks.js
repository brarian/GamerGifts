function getTdBooks(userInput) { 
  $.ajax({
   url: 'https://tastedive.com/api/similar',
   async: true,
   jsonp: 'callback',
   dataType: 'jsonp',
   data: {
     'q': userInput,
     'k': td.ACCESSKEY,
     'limit': 20,
     'type': 'books',
     'info': 1
   }, 
   success: showTdMovieResults, 
   error: showError
 });
}


function showTdBooksResults(data){
 console.log(data.Similar.Results)
}
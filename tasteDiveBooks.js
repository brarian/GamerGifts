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
   success: showTdBooksResults, 
   error: showError
 });
}


function showTdBooksResults(data){
 console.log("books", data.Similar.Results)
}
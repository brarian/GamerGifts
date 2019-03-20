function getTdMusic(userInput) { 
  $.ajax({
   url: 'https://tastedive.com/api/similar',
   async: true,
   jsonp: 'callback',
   dataType: 'jsonp',
   data: {
     'q': userInput,
     'k': td.ACCESSKEY,
     'limit': 20,
     'type': 'music',
     'info': 1
   }, 
   success: showTdMusicResults, 
   error: showError
 });
}


function showTdMusicResults(data){
 console.log(data.Similar.Results)
}
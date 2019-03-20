function getTdMovie() {
  let term = $("input").val();

  console.log(term, "TD")
  let data = $.ajax({
    type: "GET", 
    url: "https://tastedive.com/api/similar",
    jsonp: "callback", 
    dataType: "jsonp", 
    data: {
      "q": term, 
      "k": td.ACCESSKEY, 
      "limit": 20, 
      "type": 'movies',
      "info": 1 
    }
  })
  console.log(Similar)
}


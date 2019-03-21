function getTdGames(userInput) {
  $.ajax({
    url: "https://tastedive.com/api/similar",
    async: true,
    jsonp: "callback",
    dataType: "jsonp",
    data: {
      q: userInput,
      k: td.ACCESSKEY,
      limit: 20,
      type: "games",
      info: 1
    },
    success: showTdGamesResults,
    error: showError
  });
}

function showTdGamesResults(data) {
  $(".games_search").empty();
  console.log(data.Similar.Results);
  data.Similar.Results.map((result, i) => {
    let name = result.Name;
    let description = result.wTeaser.slice(0, 245);
    let videoClip = result.yUrl;

    $(".games_search").append(
      `<section> 
        ${name} ${description} 
          <video width="320" height="240" muted controls>
            <source src="${videoClip}" type="video/mp4">
            <source src="${videoClip}" type="video/webm">
        </video>   
        <a href="${videoClip}" target="_blank" class="btn btn-primary"> Full Size </a>  
        <a href="" target="_blank" class="btn btn-secondary"> Check Prices </a>  
      </section>`
    );
  });
}

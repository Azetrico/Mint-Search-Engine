var sul = 'https://www.googleapis.com/customsearch/v1?q=' + new URLSearchParams(window.location.search).getAll('q') + '&cx=004515914683076720641%3Auhie5a7ygv4&key=AIzaSyD68PxO_gYStrq9WEHdxnwO_R56Wly1Nbs&searchType=image'

function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}


loadJSON(sul,
         function(data) {
           getSearchData(data)
         },
         function(xhr) { alert("An error has occoured!")}
);

function getSearchData(data) {
    var htmlse = ""
	if (data['promotions']) {
		data['promotions'].forEach(function(element){
		htmlse += '<div style="background-color: #cfb425;" class="card w-100"><div class="card-body"><p class="card-text"><strong>' + 'Promoted' + '</strong></p><h5 class="card-title">' + element['title'] + '</h5><a href="' + element['link'] + '">' + element['displayLink'] + '</a></div> </div>'
        })
	}
    data['items'].forEach(function(element){
      if (element['kind'] == "customsearch#result") {
        htmlse += '<div class="card w-100"><div class="card-body"><img style="max-width: 400; max-height: 400;" src="' + element['link'] + '</img></div></div>'
      }
    });
    document.getElementById("content").innerHTML = htmlse
}

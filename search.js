$(document).ready(function() {
    $('button').click(function() {
    	var toSearch = $("input[name=searchitem]").val();
    	var toAdd = search(toSearch)
        $('#results').append("<p>"+toAdd+"</p>");
    });
});

function search(searchItem) {
	//return "This is the string from search function";
	var xhr = new XMLHttpRequest();
	var url = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + searchItem + "?api_key=cc414580-c562-4f62-a74a-a1a8076e7a59";
	xhr.open("GET", url, false);
	xhr.send();
	//var myObject = JSON.stringify(search);
	//var obj = JSON.parse(myObject);
	var obj = JSON.parse(xhr.response);
	//var finalobj = JSON.parse(obj.response);

	
	return searchItem + ": " + obj[searchItem].id;
	
}
$(document).ready(function() {
    $('button').click(function() {
    	var toSearch = $("input[name=searchitem]").val();
    	var inputName = toSearch.toLowerCase();
    	var summonerObj = JSON.parse(search(inputName));
    	var sumIcon = summonerObj[inputName].profileIconId; 
    	var toAdd = summonerObj[inputName].name;
        $('#results').append("<h1> <img src=\"https://ddragon.leagueoflegends.com/cdn/4.16.1/img/profileicon/"+sumIcon+".png\"> "+toAdd+" -- Summoner Level: " + summonerObj[inputName].summonerLevel+"</h1>");
    });
});

function search(searchItem) {
	//return "This is the string from search function";
	var xhr = new XMLHttpRequest();
	var api_key = "cc414580-c562-4f62-a74a-a1a8076e7a59";
	// var test1 = String(searchItem);
	// var test2 = test1.toLowerCase();
	var url = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + searchItem + "?api_key=" + api_key;
	xhr.open("GET", url, false);
	xhr.send();

	//var myObject = JSON.stringify(search);
	//var obj = JSON.parse(myObject);
	//var obj = JSON.parse(xhr.response);
	//var finalobj = JSON.parse(obj.response);

	
	return xhr.response;
	
}
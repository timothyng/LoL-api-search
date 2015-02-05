$(document).ready(function() {
    $('button').click(function() {
    	var toSearch = $("input[name=searchItem]").val();
    	var summonerObj = JSON.parse(search(toSearch));
    	var sumIcon = summonerObj[toSearch].profileIconId; 
    	var toAdd = summonerObj[toSearch].name;
        $('#results').append("<h1> <img src=\"http://ddragon.leagueoflegends.com/cdn/4.4.3/img/profileicon/"+sumIcon+".png\"> "+toAdd+" Summoner Level: " + summonerObj[toSearch].summonerLevel+"</h1>");
    });
	
});

function search(searchItem) {
	//return "This is the string from search function";
	var xhr = new XMLHttpRequest();
	var api_key = "cc414580-c562-4f62-a74a-a1a8076e7a59";
	var url = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + searchItem + "?api_key=" + api_key;
	xhr.open("GET", url, false);
	xhr.send();

	//var myObject = JSON.stringify(search);
	//var obj = JSON.parse(myObject);
	//var obj = JSON.parse(xhr.response);
	//var finalobj = JSON.parse(obj.response);

	
	return xhr.response;
	
}

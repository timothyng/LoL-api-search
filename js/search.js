$(document).ready(function() {
    $('button').click(function() {
    	var toSearch = $("input[name=searchitem]").val().toLowerCase();
    	var summonerObj = JSON.parse(search(toSearch));
    	var summonerObjString = JSON.stringify(summonerObj);
    	var sumIcon = summonerObj[toSearch].profileIconId; 
    	var toAdd = summonerObj[toSearch].name;
        $('#results').append("<h1> <img src=\"http://ddragon.leagueoflegends.com/cdn/6.15.1/img/profileicon/"+sumIcon+".png\"> "+toAdd+" Summoner Level: " + summonerObj[toSearch].summonerLevel+"</h1>");
    });
});

function search(searchItem) {
	//return "This is the string from search function";
	var xhr = new XMLHttpRequest();
	var api_key = "e9499f8c-23f2-4683-90ae-c1aa2b723dcc";
	var url = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + searchItem + "?api_key=" + api_key;
	xhr.open("GET", url, false);
	xhr.send();

	// https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/Ghelzonianses?api_key=e9499f8c-23f2-4683-90ae-c1aa2b723dcc
	//var myObject = JSON.stringify(search);
	//var obj = JSON.parse(myObject);
	//var obj = JSON.parse(xhr.response);
	//var finalobj = JSON.parse(obj.response);

	
	return xhr.response;
	
}
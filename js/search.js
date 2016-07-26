$(document).ready(function() {
    $('button').click(function() {
    	var sumRequest = $("input[name=searchitem]").val().toLowerCase();
    	var summonerObj = searchSum(sumRequest);
    	// var summonerObj = JSON.parse(search(sumRequest));
    	// var sumIcon = summonerObj[sumRequest].profileIconId; 
    	// var toAdd = summonerObj[sumRequest].name;

    	// var prevMatches = JSON.parse(searchGame(summonerObj[sumRequest].id));
    	// console.log(prevMatches.games[0]);

        //$('#results').append("<img class=\"img-circle\" width=\"100\" height=\"100\" src=\"http://ddragon.leagueoflegends.com/cdn/6.15.1/img/profileicon/"+sumIcon+".png\"> "+toAdd+" Summoner Level: " + summonerObj[sumRequest].summonerLevel);
        document.getElementById("sumIcon").innerHTML = "<img class=\"img-circle\" width=\"100\" height=\"100\" src=\"http://ddragon.leagueoflegends.com/cdn/6.15.1/img/profileicon/"+summonerObj[sumRequest].profileIconId+".png\">"
        document.getElementById("sumID").innerHTML = summonerObj[sumRequest].id;
        document.getElementById("sumName").innerHTML = summonerObj[sumRequest].name;
        document.getElementById("sumLevel").innerHTML = summonerObj[sumRequest].summonerLevel;
    });
});

function searchSum(searchItem) {
	//return "This is the string from search function";
	var xhr = new XMLHttpRequest();
	var api_key = "e9499f8c-23f2-4683-90ae-c1aa2b723dcc";
	var url = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + searchItem + "?api_key=" + api_key;

	
	xhr.open("GET", url, false);
	console.log("lol2");
	console.log(xhr.status);
	xhr.send();

	// if (xhr.status != 200)
	// {
	// 	console.log(xhr.responseText);
	// 	return 0;
	// }

	// https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/Ghelzonianses?api_key=e9499f8c-23f2-4683-90ae-c1aa2b723dcc
	//var myObject = JSON.stringify(search);
	//var obj = JSON.parse(myObject);
	//var obj = JSON.parse(xhr.response);
	//var finalobj = JSON.parse(obj.response);

	//Maybe Parse into Summoner Object first and return the object?
	// return xhr.response;
	// var reponseJSON = JSON.parse(xhr.response);

	

	return JSON.parse(xhr.response);
	
	
}

function searchGame(gsumID)
{
	var xhr = new XMLHttpRequest();
	var api_key = "e9499f8c-23f2-4683-90ae-c1aa2b723dcc";
	var url = "https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/" + gsumID + "/recent?api_key=" + api_key;
	xhr.open("GET", url, false);
	xhr.send();

	return xhr.response;
}
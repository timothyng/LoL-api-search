$(document).ready(function() {
    $('button').click(function() {
    	var toSearch = $("input[name=searchitem]").val();
    	var summonerObj = JSON.parse(search(toSearch));
    	var toAdd = summonerObj[toSearch].profileIconId;
    	//Function to append the name:id to the results div
        //$('#results').append("<p>"+toAdd+"</p>");
        //$('#results').append("<p>"+toSearch+":"+toAdd+"</p>");
        document.getElementById("results").innerHTML="<p>"+toSearch+":"+toAdd+"</p><br><p><img src=\"https://ddragon.leagueoflegends.com/cdn/4.16.1/img/profileicon/"+toAdd+".png\"></p>";
        // document.getElementById("results").innerHTML="<p><img src=\"https://ddragon.leagueoflegends.com/cdn/4.16.1/img/profileicon/"+toAdd+".png\"></p>";
    
    });
});

function search(searchItem) {
	//return "This is the string from search function";
	var api_key = "e9499f8c-23f2-4683-90ae-c1aa2b723dcc";
	var xhr = new XMLHttpRequest();
	var url = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + searchItem + "?api_key=" + api_key;
	xhr.open("GET", url, false);
	xhr.send();
	var status = xhr.status;


//Generates Error code if status code 200 (success) is not returned
/*if (status != "200")
{
	if (status = "400")
			return "Error 400 - Bad Gateway";
	else if (status = "401")
			return "Error 401 - Unauthorized request";
	else if (status  = "404")
			return "Error 404 - No summonser data found for specified inputs";
	else if (status = "429")
			return "Error 429 - Rate limit exceeded";
	else if (status = "500")
			return "Error 500 - Internal Server Error";
	else if (status = "503") 
			return "Error 503 - Service unavailable";
}*/
	//obj = JSON.parse(xhr.response);
	//return "200";

	//var myObject = JSON.stringify(search);
	//var obj = JSON.parse(myObject);
	//var obj = JSON.parse(xhr.response);
	//var finalobj = JSON.parse(obj.response);

	
	//return searchItem + ": " + obj[searchItem].id;
	return xhr.response;
	
}
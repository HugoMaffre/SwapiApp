
 $(document).ready(function() {

 	//les personnages à peu près devinables
 	var array = [87,79,69,67,51,46,44,36,35,32,21,20,14,13,11,10,5,4,3,2,1];
	var alea = Math.floor(Math.random()*21);
	var character = array[alea];

	// un personnage aléatoire
 	var url = "http://swapi.co/api/people/"+character+"/";
 	navigate(url);

	/*
		tentative de trouver l'image avec dbpedia (il n'y en a pas sur swapi), mais sparql m'a tuer
		var s = "chewbacca";
		s = s.replace(" ", "_");
		findImage(s);
	*/

	$('.surrButton').click(function(){
		surrender(url);
 	});

 	$('#submit').click(function(){
 		if ($('#answer').val() != "") {
 			getLevenshteinName(url);
 		} 
 	});

 	$('#change-character').click(function(){
 		$('#answerSent').css("right","-100%");
 	});

 	$('.reload').click(function(){
 		location.reload(true);
 	});


});



function getLevenshteinName(url) {
	$.get(url, { }, function(data) {
		var answer = $('#answer').val();
		// escape de l'html
		var findReplace = [[/&/g, "&amp;"], [/</g, "&lt;"], [/>/g, "&gt;"], [/"/g, "&quot;"]]
			for(var item in findReplace)
			    answer = answer.replace(findReplace[item][0], findReplace[item][1]);
		var name = data["name"];
		var distance = similarity(answer, name);
		if(distance > 0.79) {
			$("#fail").css("display", "none");
			$("#success").css("display", "block");
		} else {
			$("#fail").css("display", "block");
			$("#success").css("display", "none");
		}
		$('#answerSent').css("right","0");
	});
}



function surrender(url) {
	$.get(url, { }, function(data) {
		var name = data["name"];
		$('#surrender').append('The answer was '+data["name"]);
		$('.surrender').css("display", "none");
		$('#retry').css("display", "block");

	});
}



 function navigate(url) {
 	$.get(url, { }, function(data) {
 		for (field in data){//pour chaque champ 
 			// Si ça contient des enfants
 			var container = $('<div/>');
 			if (data[field] != "" && field != "created" && field != "edited" && field != "url" && field != "name" && field != "vehicles") {

 				if (typeof(data[field]) == 'object') {
	 				container.append(field);
	 				container.append(elementForArray(field, data[field]))
	 				container.addClass(field);
	 			} else {
	 				// affichage d'une liste des objets contenus
	 				container.append(elementForValue(field, data[field]))
	 				container.addClass(field);
	 				container.addClass("field");

	 			}
				$("#character-infos").append(container);
 			}
	 		
	 	}
	});
 }


//span avec l'élément  avec un lien dessus quand il y en a un
 function elementForValue(name, value) {
 	var span = $("<span/>");
 	if (name)
 		span.append(name + ":");
 	//si il y a un lien
 	if (value.substr && value.substr(0,7) == "http://") {
 		//on fait un navigate sur le span au click
 		if (name = "films") {
 			titleObject(value, span);
 		} 
 		nameObject(value, span);
 	} else {
 		span.append(value);
 	}
 	
 	return span;
 }



//affichage d'une liste des enfants
 function elementForArray(name, values) {
 	var ul = $('<ul/>');
 	for (i in values){
 		var li = $('<li/>');
 		//avec un lien dessus quand il y en a un
 		li.append(elementForValue(null, values[i]))
 		ul.append(li);
 	}
 	return(ul);
}


function nameObject(url, htmlObject) {
	$.get(url, { }, function(data) {
		htmlObject.append(data["name"]);
	});
}
//au lieu d'afficher les urls
function titleObject(url, htmlObject) {
	$.get(url, { }, function(data) {
		htmlObject.append(data["title"]);
	});
}
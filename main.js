function displayLevelInfo(){
	
	var levelEntry = Number(document.getElementById('levelInput').value);

	switch(levelEntry) {

	case 1:
		document.getElementById("displayLevel").innerHTML="Level: Easy Mode";
		break;

	case 2:
		document.getElementById("displayLevel").innerHTML="Level: Normal Mode";
		break;

	case 3:
		document.getElementById("displayLevel").innerHTML="Level: Difficult Mode";
		break;

	default:
		window.alert("Invalid Section Number");
	}

}

function displayProductCategory() {
	
	var prodCategory = document.getElementById('categoryEntry').value;

	switch(prodCategory) {

	case "C":
		document.getElementById("displayCategory").innerHTML="Category: Clothing";
		break;

	case "E":
		document.getElementById("displayCategory").innerHTML="Category: Electronics";
		break;

	case "B":
		document.getElementById("displayCategory").innerHTML="Category: Books";
		break;

	default:
		window.alert("Invalid Section Number");
	}
}
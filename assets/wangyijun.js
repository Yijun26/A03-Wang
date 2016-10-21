
function Calculate(){
	var NumDesert = parseInt(document.getElementById("Desert").value);
	var NumFruit = parseInt( document.getElementById("Fruit").value);

	var TotalNumber =Number(NumDesert) +Number(NumFruit);
	window.alert("The amount of your order is " + TotalNumber);
	
}

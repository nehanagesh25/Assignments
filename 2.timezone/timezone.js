window.onload = function(){
	
	var button = document.getElementById("btn");

	button.onclick = function(){
		var d = new Date(document.getElementById("date1").value);
		var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		
		var a = weekday[d.getDay()];
		document.getElementById("demo").innerHTML=a;
	}
}
window.onload = function(){
	var button = document.getElementById("btn");
	var name = document.getElementById("name");
	var password = document.getElementById("pass");

	button.onclick = function(){
		console.log("clicked:",name.value,password.value);
     if((!name.value) || (!password.value)){
     	alert("please check the username ");
     } else{
     	alert("proceed");
     }








	}
}

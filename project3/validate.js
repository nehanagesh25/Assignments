window.onload = function(){
	var button = document.getElementById("btn");
	var name = document.getElementById("name").value;
	var password = document.getElementById("password");
	

	button.onclick = function(){
		console.log('clicked:',name.value,password.value);
		var mail=name.value.match(/^[a-zA-Z0-9_]+@[a-zA-Z0-9]\.[a-z]{2,3}$/);
     if(!mail){
     	alert("email is invalid");
     } else if (!password.value) {
     	alert("invalid");
     }else{
     	alert("login success");
     }
     	
   }
}

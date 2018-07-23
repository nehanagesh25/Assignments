window.onload = function(){
var button = document.getElementById("btn");
var name = document.getElementById("name");
var password = document.getElementById("password");
var isValid = function() {
	console.log('clicked', name.value, password.value)
	var errNameRef = document.getElementById("js-err-name-msg");
	var errPasswordRef = document.getElementById("js-err-password-msg");
	var match = name.value.match(/^[A-Za-z0-9_]+@[a-z0-9]+\.[a-z]{2,3}$/);
	if (!match) {
		errNameRef.innerHTML="Enter valid email";
		return false;
	}else if (!password.value) {
		errNameRef.innerHTML= "";
		errPasswordRef.innerHTML = "Enter valid password";
		return false;

	}else{
		errNameRef.innerHTML=errPasswordRef.innerHTML="";
		return true;

	}
	
}
name.onkeypress = function(e){
	isValid();

}
password.onkeypress =function(e){
	isValid();
	} 


button.onclick= function(){
	if(isValid()){
		alert("login succes");
	}
}
}
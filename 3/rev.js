window.onload = function(){
	var button = document.getElementById("btn");
	var rev,temp,rem=0;
	button.onclick = function(){
		var n = document.getElementById("input").value;
		temp=n;
		while(n > 0){
			rev = rev%10;
			n = parseInt(n/10);
			rem = rem*10+rev;
	
		}
		var output=document.getElementById("demo");
		output.innerHTML==rem;
	}
}
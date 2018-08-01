window.onload = function(){
	var button = document.getElementById("btn");
	
	button.onclick = function(){

		
	    var n = document.getElementById("input").value; 
	    if (n.match(/^\d+/)) {
	    var rev = 0, rem = 0;
		while(n > 0)
		{
			rev = n%10;
			rem = rem*10+rev;
			n=parseInt(n/10);
	
		}
	}
	
		var output=document.getElementById("demo");
		output.innerHTML=rem;
		
	}
}
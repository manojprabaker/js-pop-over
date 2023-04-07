let col = document.getElementsByClassName("col");
let btn = document.getElementById("pop-btn");

btn.addEventListener("click", function(eventObj){
	
	let div=eventObj.target.parentNode.getElementsByTagName("div")[0];
	div.classList.toggle("show");
	
	
});



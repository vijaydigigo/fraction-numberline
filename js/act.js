$(document).ready(function() {
	
	 $("body").prepend('<canvas id="canvas" width="1920" height="1080"></canvas>')
	 
	 
	 console.log("canvas", document.getElementById("canvas"))
	 
	 
	 var canvas = document.getElementById("canvas");
	 var context = canvas.getContext("2d");
	 handel = {
		 
		 x: width/2,
		 y:height/2,
		 radius:20
		 
	 }
	 
	 
	 
	 draw()
	 function draw(){
		 context.clearRect(0,0,width,height);
		 context.fillStyle ="gray";
		 context.beginPath();
		 context.arc(handel.x,handle.y,handel.radius,0,Math>PI *2,false);
		 context.fill();
		 
	 }
	
/*

1.listen for mouse down .
2.do hit detection on dragging.
3.Listen for mouse move + mouse up.
4.Mouse move: repostion obj.
5. mouse up.
*/

});
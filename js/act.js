$(document).ready(function() {
	

 $("body").prepend('<canvas id="canvas" width='+window.innerWidth+' height='+window.innerHeight+'></canvas>')
	 
	//$("#canvas").css({"height":window.innerHeight})
	$(".actContainer").css({"height":window.innerHeight})
	 
var scaleRatio = "";
var isValidDrop = false;
var currentLeft=0;
var canvasx = $(canvas).offset().left;
var canvasy = $(canvas).offset().top;


$(window).resize(function () {
   scaleActivity();
  
  
});


 function scaleActivity () {
console.log("scale");
				var win_h = $("body").height();
				var win_w = $("body").width();
				var h = $(".actarea").outerHeight();
				var w = $(".actarea").outerWidth();
				
				console.log(win_h,win_w,h,w)
				var ratio = Math.min(win_h/h, win_w/w);
				scaleRatio = Math.min(win_h/h, win_w/w);
				 $(".actarea").css({
					"transform": "scale("+ratio+")",
					"-ms-transform": "scale("+ratio+")",
					"-moz-transform": "scale("+ratio+")",
					"-webkit-transform": "scale("+ratio+")"
				}); 
				
				
			  $(".actarea").css({
					"top" : ( (h*scaleRatio)-h)/2 +"px",
					"left" : ((win_w - w)/2) + ((win_w - w*scaleRatio)/2) + "px"
				});  


				
 
var infoPopupRatio = Math.min(window.innerWidth/800, window.innerHeight/800);

$("#infopopup").css({
					"transform": "scale("+infoPopupRatio+")",
					"-ms-transform": "scale("+infoPopupRatio+")",
					"-moz-transform": "scale("+infoPopupRatio+")",
					"-webkit-transform": "scale("+infoPopupRatio+")"
				});  
				
				$("#info").css({"top":window.innerHeight-35+"px"})
				$("#logo").css({"top":window.innerHeight-35+"px"});
				var pos = $("#info").position().top;






  


}

scaleActivity ()
var imgArr=["one","half","third","fourth","fifth","sixth","eigth","tenth","Twelfth","Sixteenth","draw_tool","eraser","reset"]
var imgArrval=[2,4,6,8,10,12,16,20,24,32]

function createlayout(){
	
	var dragtext = "";
dragtext +=  '<img class="sidebar_background"; src="./assets/images/toolbg.png" alt="back img" >';
dragtext += '<div class="checkbox1"><input type="checkbox" name="vehicle1" value="Bike">';
dragtext +=   '<label  for="vehicle1"> Show Number Line</label></div>';
dragtext +=  '<img class="sidebar_line"; src="./assets/images/line.png" alt="back img" >';
dragtext +=  '<div class="checkbox2"> <input type="checkbox" name="vehicle2" value="Car">';
dragtext +=  ' <label for="vehicle2"> Show Fractions</label></div>';
	
	





for(var i=0; i<10; i++ ){

 dragtext +='<div val="'+imgArrval[i]+'" class="darg dargele'+(i+1)+' ">';
 
 dragtext +=  '<img val="'+imgArrval[i]+'"  acc-id="drag-container"  id="'+imgArr[i]+'" class="dragimg" src="./assets/images/'+imgArr[i]+'.png" alt="back img" >';
dragtext +=  '</div>';
}

dragtext +='<div class="drawtool">'
dragtext +=  '<img  src="./assets/images/'+imgArr[10]+'.png" alt="back img" >';
dragtext +=  '</div>';

dragtext +='<div class="erasetool">'
dragtext +=  '<img  src="./assets/images/'+imgArr[11]+'.png" alt="back img" >';
dragtext +=  '</div>';

dragtext +='<div class="resettool">'
dragtext +=  '<img  src="./assets/images/'+imgArr[12]+'.png" alt="back img" >';
dragtext +=  '</div>';




var droptext="";
droptext += '<img class="numberline"  src="./assets/images/numberline.png" alt="number_line" >';
droptext += '<img class="whitebox"  src="./assets/images/whitebox.png" alt="number_line" >';
	
droptext+="<div class='grid-container'>";
for(var i=1; i<8;  i++){
//for(var j=1; j<33;  j++)	{
droptext+="<div   row='"+i+"' class='grid-item'></div>";
//}
}
droptext+="</div>";	
	
	
	
	
$(".sidebar").html(dragtext);	
$(".dropArea").html(droptext);	
	
	addEvents()
}

createlayout()

function addEvents(){
	
	
	
	
	 $("[acc-id='drag-container']").draggable({ 
       containment: $(".actContainer"),
         helper:function(event) {	
		 //isValidDrop = false;
		// console.log($(this).attr("val"))
		 var widthval =$(this).attr("val");
            return $(this).clone().appendTo('body').css({
                'zIndex': 50,
				'width': (($(".grid-item").width())/widthval)*scaleRatio,
				
            })
        },
         revert:function()
           {
			//console.log("/////////////////",last_mousex2,last_mousey2)	
			var that = $(this);
			 $(".grid-container").find("div").each(function(){

			var  rect2 = $(this); 
			isCollapsed( last_mousex2,last_mousey2,rect2,that )

				 });
			   
		   },
           start:function(event, ui){
			   
			 var cX =  event.clientX
				var cY =  event.clientY
			   elementstartx = parseInt(cX-canvasx);
			elementstarty = parseInt(cY-canvasy);

			 $(this).draggable("option", "cursorAt", {
            left: Math.floor(this.clientWidth / 2)*scaleRatio,
            top: Math.floor(this.clientHeight / 2)*scaleRatio

			 })

			
			

           } ,
           drag:function(event, ui){  
          var cX =  event.clientX
				var cY =  event.clientY
			 last_mousex2 = mousex = parseInt(cX-canvasx);
			 last_mousey2 = mousey = parseInt(cY-canvasy);
			// console.log(last_mousex2,last_mousey2)

			 
           },          
           stop:function(event,ui)  {
			   
			    
			   
		   }
	
	
	 })
	
	
	
	
	
function isCollapsed(dragMex,dragMey, rect ,dragelement){

	//if(isValidDrop) return;
   var object_2 = rect[0].getBoundingClientRect();
  
  if (dragMex < object_2.left + object_2.width  && dragMex   > object_2.left &&
		dragMey < object_2.top + object_2.height && dragMey > object_2.top)  { 
		appendDragElement(rect,dragelement)
    }
    else{ 
	/* console.log("doesn't colide") */ 
	}
	}	
  
  
  
  
  
	function appendDragElement(strikeelement,dragelement){
		isValidDrop = false
		var currentRowNO = strikeelement.attr("row");
		//console.log("currentRowNO",currentRowNO);
		
		for(var i=0; i< currentRowNO; i++){
			
			if($(".grid-container").find(".grid-item").eq(i).children().length == 0){
				
				$(".grid-container").find(".grid-item").eq(i).append(dragelement.clone().css({
                'left': ($(".grid-container").find(".grid-item").eq(i).position().left*scaleRatio)+"px",
				'top': ($(".grid-container").find(".grid-item").eq(i).offset.top*scaleRatio)+"px",
				'position':'absolute',
				
            }));
			isValidDrop = true;	
			 break;	
			}
			
		}
		if(isValidDrop) return;
	



var elementarr=[];
strikeelement.find("img").each(function( index ) {
  elementarr.push( $(this))
});



elementarr.sort(function(a,b){
    var aLeft = a.css("left").replace("px","");
    var bLeft = b.css("left").replace("px","");
    return aLeft-bLeft;
});
console.log("elementarr",elementarr);

for(var i in elementarr){
	
	if(elementarr[i].css("left").replace("px"," ") == 0){
	if(checkIsCurrentElementLastElement(elementarr,i)){
		
	if(getRemaningWidthOfDropGrid(currentRowNO,i,elementarr) >= dragelement[0].naturalWidth*scaleRatio ){		
var left = currentLeft + "px";
var celetop =  (elementarr[elementarr.length -1].offset.top*scaleRatio)+"px";
 strikeelement.append(dragelement.clone().css({
                'left':left,
				'top': celetop,
				'position':'absolute',
				
				
            }));
		}
	}
	}
	else{
		
		
		/* console.log("dragelement[0].naturalWidth*scaleRatio",dragelement[0].naturalWidth*scaleRatio)
		var celeleft = Number(elementarr[elementarr.length -1].css("left").replace("px"," "));
		var celementwidth = Number(elementarr[elementarr.length -1].width());
		var left = celeleft + celementwidth + "px";
		var celetop =  (elementarr[elementarr.length -1].offset.top*scaleRatio)+"px";
		strikeelement.append(dragelement.clone().css({
                'left':left,
				'top': celetop,
				'position':'absolute',
				
				
            })); */
		
		
		
		
	}

/* if(elementarr[i].css("left").replace("px"," ") == 0){
	// check wheather next element present or not
	
if(elementarr.length == (i+1)){

//checkDropareawidth(strikeelement);	
var celeleft = Number(elementarr[elementarr.length -1].css("left").replace("px"," "));
var celementwidth = Number(elementarr[elementarr.length -1].width());
var left = celeleft + celementwidth + "px";
var celetop =  (elementarr[elementarr.length -1].offset.top*scaleRatio)+"px";
	  strikeelement.append(dragelement.clone().css({
                'left':left,
				'top': celetop,
				'position':'absolute',
				
				
            }));	
	
	
}

	
	
}
else{
	// if current element is not last element
	  .log(">>>>>",elementarr[i].css("left"))
	
}	 */

	
}
	
function checkIsCurrentElementLastElement(elementarr,i){
	console.log("pp3",elementarr.length,Number(i)+1)
	console.log("checkIsCurrentElementLastElement",elementarr.length == (Number(i)+1))
	return (elementarr.length == (Number(i)+1));
	
}

function getRemaningWidthOfDropGrid(currentRowNO,i,elementarr){
	var gridwidth =$(".grid-container").find(".grid-item").eq(currentRowNO).width()*scaleRatio;
	console.log("gridwidth,i",gridwidth,i);
	var elew =0;
	currentLeft =0;
		
		for(var j = 0; j <= i; j++ ){  elew += elementarr[j].width()*scaleRatio;}
		for(var k = 0; k <= i; k++ ){ console.log("currentLeft",currentLeft);  currentLeft += elementarr[k].width(); console.log("currentLeft",currentLeft); }
		
	
	
	console.log("elew",elew)
	
	return  (gridwidth - elew);
}
/*  if(strikeelement.children().length > 0){
var elementarr=[];
strikeelement.find("img").each(function( index ) {
  elementarr.push( $(this))
});



if(elementarr[0].position().left == 0 && elementarr.length == 1){
checkDropareawidth(strikeelement);	
	strikeelement.append(dragelement.clone().css({
                'left': ((elementarr[0].position().left + elementarr[0].width() ))+"px",
				'top': (elementarr[0].offset.top*scaleRatio)+"px",
				'position':'absolute',
				
            }));
	
	
}
else{
	
	checkDropareawidth(strikeelement);	
var celeleft = Number(elementarr[elementarr.length -1].css("left").replace("px"," "));
var celementwidth = Number(elementarr[elementarr.length -1].width());
var left = celeleft + celementwidth + "px";
var celetop =  (elementarr[elementarr.length -1].offset.top*scaleRatio)+"px";
	  strikeelement.append(dragelement.clone().css({
                'left':left,
				'top': celetop,
				'position':'absolute',
				
				
            })); 
}	
}
else {	
	strikeelement.append(dragelement.clone().css({
                'left': (strikeelement.position().left*scaleRatio)+"px",
				'top': (strikeelement.offset.top*scaleRatio)+"px",
				'position':'absolute',
				
            }));	
	
}; */	}	
}


	
 $("#info").unbind("click").bind("click", function() {removecustomcruser();    $("#infopopup").show(); $("#info").css({"opacity": 0.4})                    })	;
 $("#infopopup").find(".clickable").unbind("click").bind("click", function() {$("#infopopup").hide();   $("#info").css({"opacity": 1})  })	;
 
 
 function removecustomcruser(){}
 
 function checkDropareawidth(rowno){
	 console.log("row",rowno.width())
	 var elementswidth = 0;
	 
	 
 }

});
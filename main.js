
var lastpositionX,lastpositionY;

canvas=document.getElementById("mcanvas");
ctx=canvas.getContext("2d");
color="rgb(29, 216, 216)";
var width=screen.width;
var newwidth=width-70;
var newheight=screen.height-300;

if(width<992){
    canvas.width=newwidth;
    canvas.height=newheight;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",mytouchstart);

function mytouchstart(e){
    console.log("mytouch");
    color=document.getElementById("cor").value;
  //  widthofline=document.getElementById("linha").value;
     lastpositionX=e.touches[0].clientX-canvas.offsetLeft;
    lastpositionY=e.touches[0].clientY-canvas.offsetTop;
    
}

canvas.addEventListener("touchmove", my_touchmove);
 function my_touchmove(e)
 {console.log("mytouchmove");
  current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
  current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop; 
  
  ctx.beginPath();
  ctx.strokeStyle = document.getElementById("cor").value;
  ctx.lineWidth =2;

  console.log("Last position of x and y coordinates = ");
  console.log("x = " + last_position_of_x + "y = " 
       + last_position_of_y);
  ctx.moveTo(last_position_of_x, last_position_of_y);

  console.log("Current position of x and y coordinates = ");
  console.log("x  = " + current_position_of_touch_x + "y = " 
          + current_position_of_touch_y);
  ctx.lineTo(current_position_of_touch_x, 
          current_position_of_touch_y);
  ctx.stroke();
  }
  last_position_of_x = current_position_of_touch_x; 
  last_position_of_y = current_position_of_touch_y;


canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
function clear(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

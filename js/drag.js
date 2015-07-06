function start()
{
   document.addEventListener( "click", changePos, false );
}

function changePos( e )
{
   var ypos = e.clientY - document.getElementById("myImg").height; 
   var xpos = e.clientX;
   
   var newloc = "left: " + xpos + "px; top: " + ypos + "px;";
   document.getElementById("myImg").setAttribute("style", newloc); 
}

window.addEventListener( "load", start, false );

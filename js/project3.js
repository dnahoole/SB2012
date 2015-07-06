var theVideo = "";
var theSynth = "";

function init()
{
   if (document.getElementById("myVideo")) {
      var x=document.getElementById("selVideo");
      theVideo = x.options[0].value;
      changeVideo(theVideo);
   }
   if (document.getElementById("mySynth")) {
      var x=document.getElementById("selSynth");
      theSynth = x.options[0].value;
      changeSynth(theSynth);
   }
}

function changeVideo(v)
{
   theVideo = v;
// alert(theVideo);
   document.getElementById("myVideo").setAttribute("src", theVideo ); 
}

function changeSynth(v)
{
   theSynth = v;
// alert(theSynth);
   document.getElementById("mySynth").setAttribute("src", theSynth ); 
}

window.addEventListener( "load", init, false );

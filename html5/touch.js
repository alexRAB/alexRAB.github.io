document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.11.26.10";

var canvas = document.getElementById("id_canvas");

canvas.addEventListener("touchstart", on_touch_start);

function on_touch_start(e)
{
  for (var i = 0; i < e.changedTouches.length; i++)
  {
           var context = canvas.getContext("2D");
           context.beginPath();
           context.arc(e.changedTouches[i].pageX, e.changedTouches[i].pageY ,10 ,0 ,2 * Math.PI);
           context.stroke();


         }
}

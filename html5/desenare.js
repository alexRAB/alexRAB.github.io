document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.10.22.1";
document.getElementById("id_button").addEventListener("click", start);
function deseaneaza_cerc(unghi, ctx, w , h)
{
  ctx.beginPath();
  //void ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
  ctx.arc(w / 2  + 100 * Math.cos(unghi), h / 2 + 100 * Math.sin(unghi), 50 , 0, 2 * Math.PI);
  ctx.stroke();
}
//----------------------------------------------------------------
function start()
{
   var canvas = document.getElementById("id_canvas");
   var ctx =  canvas.getContext('2d');
   var unghiStart = 0 ; // in grade

   var myWorker = new Worker("calcul_prime.js");
   myWorker.onmessage = function(e)
   {
     document.getElementById("id_prime").innerHTML = e.data;
   }
   setInterval(deseaneaza_cerc, 10, unghiStart, ctx, canvas.width , canvas.height);



}
//--------------------------------------------------------------------

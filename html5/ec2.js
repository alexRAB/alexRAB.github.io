document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.10.15.3";

function rezolva()
 {
   // citire
   var a = document.getElementById("id_a").Value;
   var b = document.getElementById("id_b").Value;
   var c = document.getElementById("id_c").Value;
   // rezolvare
   var delta = b * b -4 * a * c;
   var x1_re,x1_im,x2_re,x2_im;
   if (delta >= 0 )
       {
         var x1_re = (-b + Math.sqrt(delta) )/ (2 * a);
         var x2_re = (-b - Math.sqrt(delta) )/ (2 * a);
         x1_im = x2_im = 0;
       }
   else {
       x1_re = -b / (2 * a);
       x1_im = Math.sqrt(-delta/ (2 * a));
       x2_re = -b / (2 * a);
       x2_im = -Math.sqrt(-delta/ (2 * a));
   }
   //scriere

    document.getElementById("id_x1").innerHTML = x1_re + " + " + x1_im + "i";
    document.getElementById("id_x2").innerHTML = x2_re + " + " + x2_im + "i";

 }

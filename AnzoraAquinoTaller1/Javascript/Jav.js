var html = "<div>\n";
var div = document.getElementById('box');
function bt1(){
var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var carnet = document.getElementById("carnet").value;
var docente = document.getElementById("docente").checked;
var dev = 3;
    if(nombre == ""){
        alert("Campo del nombre vacio");
       }else{
           if(apellido == ""){
                alert("Campo del apellido vacio");
              }else{
                  if(carnet == ""){
                     alert("Campo del carnet de estudiante o docente vacio");
                     }else{
                         
                         
                         if(docente == true){
                             dev = dev*2;
                             alert("Listo usted ha prestado el libro con exito!");
                             html += "<br><p>Usuario: "+nombre+" "+apellido+" carnet: "+carnet+" Fecha de devolucion:"+dev+" Dias"+" Libro: Homo Deus"+"</p>";
                             div.innerHTML = html;
                         }else{
                             alert("Listo usted ha prestado el libro con exito!");
                             html += "<br><p>Usuario: "+nombre+" "+apellido+" carnet: "+carnet+" Fecha de devolucion:"+dev+" Dias"+" Libro: Homo Deus"+"</p>";
                             div.innerHTML = html;
                         }
                         
                     }
                  
              }
       }
    
}
function bt2(){
    var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var carnet = document.getElementById("carnet").value;
var docente = document.getElementById("docente").checked;
var dev = 7;
    if(nombre == ""){
        alert("Campo del nombre vacio");
       }else{
           if(apellido == ""){
                alert("Campo del apellido vacio");
              }else{
                  if(carnet == ""){
                     alert("Campo del carnet de estudiante o docente vacio");
                     }else{
                         
                         if(docente == true){
                             dev = dev*2;
                             alert("Listo usted ha prestado el libro con exito!");
                             html += "<br><p>Usuario: "+nombre+" "+apellido+" carnet: "+carnet+" Fecha de devolucion:"+dev+" Dias"+" Libro: Don quijote de la mancha"+"</p>";
                             div.innerHTML = html;
                         }else{
                             alert("Listo usted ha prestado el libro con exito!");
                             html += "<br><p>Usuario: "+nombre+" "+apellido+" carnet: "+carnet+" Fecha de devolucion:"+dev+" Dias"+" Libro: Don quijote de la mancha"+"</p>";
                             div.innerHTML = html;
                         }
                         
                     }
                  
              }
       }
    
}
function bt3(){
    var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var carnet = document.getElementById("carnet").value;
var docente = document.getElementById("docente").checked;
var dev = 15;
    if(nombre == ""){
        alert("Campo del nombre vacio");
       }else{
           if(apellido == ""){
                alert("Campo del apellido vacio");
              }else{
                  if(carnet == ""){
                     alert("Campo del carnet de estudiante o docente vacio");
                     }else{
                         
                         if(docente == true){
                             dev = dev*2;
                             alert("Listo usted ha prestado el libro con exito!");
                             html += "<br><p>Usuario: "+nombre+" "+apellido+" carnet: "+carnet+" Fecha de devolucion:"+dev+" Dias"+" Libro: Dinamica de tesis"+"</p>";
                             div.innerHTML = html;
                         }else{
                             alert("Listo usted ha prestado el libro con exito!");
                             html += "<br><p>Usuario: "+nombre+" "+apellido+" carnet: "+carnet+" Fecha de devolucion:"+dev+" Dias"+" Libro: Dinamica de tesis"+"</p>";
                             div.innerHTML = html;
                         }
                         
                     }
                  
              }
       }
    
}
function bt4(){
    var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var carnet = document.getElementById("carnet").value;
var docente = document.getElementById("docente").checked;
var dev = 2;
    if(nombre == ""){
        alert("Campo del nombre vacio");
       }else{
           if(apellido == ""){
                alert("Campo del apellido vacio");
              }else{
                  if(carnet == ""){
                     alert("Campo del carnet de estudiante o docente vacio");
                     }else{
                         
                         if(docente == true){
                             dev = dev*2;
                             alert("Listo usted ha prestado el libro con exito!");
                             html += "<br><p>Usuario: "+nombre+" "+apellido+" carnet: "+carnet+" Fecha de devolucion:"+dev+" Dias"+" Libro: Yo , Robot"+"</p>";
                             div.innerHTML = html;
                         }else{
                             alert("Listo usted ha prestado el libro con exito!");
                             html += "<br><p>Usuario: "+nombre+" "+apellido+" carnet: "+carnet+" Fecha de devolucion:"+dev+" Dias"+" Libro: Yo , Robot"+"</p>";
                             div.innerHTML = html;
                         }
                         
                     }
                  
              }
       }
    
}

var canvas_tres = document.getElementById("lienzo-tres");
var canvas_cuatro = document.getElementById("lienzo-cuatro");
var canvas_cinco = document.getElementById("lienzo-cinco");

if (canvas_tres.getContext){
    console.log("si se soporta el contexto");
//Obtiene el contexto del objeto canvas
    var ctx_3 = canvas_tres.getContext("2d");

    ctx_3.fillStyle = "rgb(200,0,0)"; //Crear un objeto con un color de fondo
    ctx_3.fillRect(10,10,55,50); // Dibuja un objeto en la posicion x=10 y=10 ancho 55px alto 50px

    ctx_3.fillStyle = "rgba(0,200,05,0.5)"; //crear un objeto con un color de fondo
    ctx_3.fillRect(30,30,55,50); // Dibuja un objeto en la posicion x=10 y=10 ancho 55px alto 50px

    ctx_3.fillStyle = "rgba(0,0,200,0.5)"; //crear un objeto con un color de fondo
    ctx_3.fillRect(50,50,55,50); // Dibuja un objeto en la posicion x=10 y=10 ancho 55px alto 50px


}
else{
    console.log("no se soporta el contexto");
}

if (canvas_cuatro.getContext){
    console.log("si se soporta el contexto");

    var ctx_4 = canvas_cuatro.getContext("2d");

    ctx_4.beginPath() //Inicia un trazado
    ctx_4.moveTo(5,5); // Coloca el puntero en la posicion 5,5
    ctx_4.lineTo(125,125); //Traza una linea hasta la posicion 120,120
    ctx_4.strokeStyle = "#FFFFFF";
    ctx_4.stroke();
}
else{
    console.log("no se soporta el contexto");
}

if (canvas_cinco.getContext){
    console.log("si se soporta el contexto");

    var ctx_5 = canvas_cinco.getContext("2d");

    ctx_5.beginPath() //Inicia un trazado
    ctx_5.setLineDash([5,5]); // establce una linea punteada con 15 pixeles dibujados 
    ctx_5.moveTo(0,40); //coloca en x = 0, y = 40
    ctx_5.lineTo(150,40);
    ctx_5.strokeStyle = "#FFFFFF"
    ctx_5.stroke();

    ctx_5.beginPath() //Inicia un trazado
    ctx_5.setLineDash([]); // establce una linea punteada con 15 pixeles dibujados 
    ctx_5.moveTo(0,120); //coloca en x = 0, y = 40
    ctx_5.lineTo(150,120);
    ctx_5.strokeStyle = "#FFFFFF"
    ctx_5.stroke();
}
else{
    console.log("no se soporta el contexto");
}

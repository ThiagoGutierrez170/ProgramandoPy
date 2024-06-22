let intentos = 6;
let palabra = "APPLE";
let i=0;

function crearVector(texto){
    let vecPalabra=[];
    for (let i=0;i<5;i++){
    
    // Obtener el primer carácter de la cadena
    let primerCaracter = texto.charAt(0);
    
    // Remover el primer carácter de la cadena
    texto = texto.slice(1);
    
    // Agregar el primer carácter al array
    vecPalabra.push(primerCaracter);
    }
    return vecPalabra;
}
//aqui puede añadir el reseteo de la palabra para prevenir trampas 
/*
window.addEventListener('load', init);
*/
function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); //Operacion para poner el String a latras mayusculas 
    return intento;
}
function teclado(letra){
    let teclado = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
        ["Z", "X", "C", "V", "B", "N", "M", "", "", ""]
    ];  
    let head="";
    let color="";
    cabeza="<table style='border-collapse: collapse;'>";
    for (let f = 0; f < 3; f++) {
        head=head+"<tr>";
        let body="";
        for (let c = 0; c < 10; c++) {
            body=body+"<td style='border: 1px solid black;"+
            "padding: 10px;background-color: ";
            color="cadetblue";
            for(let d=0;d<10;d++){
                if (letra[d]==teclado[f][c]){
                    color="green";
                }
            }
            body=body+color+";'>"+teclado[f][c]+"</td>";
        }
        head=head+body+"</tr>";
    }
    console.log(letra);
    head=cabeza+head+"</table>";
    document.getElementById("teclado").innerHTML=head;
}
function comparar(palabra1,palabra2){
    let var1=[];
    let var2=[];

    var1=crearVector(palabra1);
    var2=crearVector(palabra2); 
    
    /*
    if (var1==var2) {
        console.log("son iguales");
    } else {
        console.log("son desiguales");
    }*/
   let aciertos=0;
   let posicion=[];
   let letra=[];
   for (let indice=0;indice<5;indice++){
        if (var1[indice]==var2[indice]){
            aciertos++;
            //posicion.push(indice);
            //letra.push(var2[indice]);
        }
   }
   for (indice1=0; indice1<5; indice1++){
        for (let indice2=0;indice2<5;indice2++){
            if (var1[indice1]==var2[indice2]){
                posicion.push(indice2);
                letra.push(var2[indice2]);
            }
        }
    }
    cabeza="<table style='border-collapse: collapse;'>";
    let body1="<tr>";
    for (let g=0;g<5;g++){
        body1=body1+"<td style='border: 1px solid black;"+
        "padding: 10px;background-color: ";
        color="cadetblue";
        if (var1[g]==var2[g]){
            color="green";
            
        }
        body1=body1+color+";'>"+var2[g]+"</td>";
    }
    body1=cabeza+body1+"</tr></table>";
    teclado(letra);
    return document.getElementById("pista").innerHTML=body1;/*document.getElementById("aciertos").innerHTML=
    "<h1>coinsidencias: "+aciertos+
    ", lugares: "+posicion+
    "; letras correctas: "+letra+"</h1>",*/ 
    
}

function intentar(){
    if (i<6){
        i++;
        console.log("intento");
        console.log(leerIntento());
        let intento=leerIntento();
        texto1=palabra;
        texto2=intento;
        comparar(texto1,texto2);
        if (palabra == intento){
            document.getElementById("alerta").innerHTML="<h1>correcto</h1>";
        }
        else {
            document.getElementById("alerta").innerHTML="<h1>incorrecto</h1>";
        }
    }
    else{
        document.getElementById("alerta").innerHTML="<h1>sin intentos</h1>";
    }
}

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);     //pued llamar una fucion al precionar el boton


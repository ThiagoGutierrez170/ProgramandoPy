//tarea 1. Operadores 
let num1 = 1;
let num2 = 2;
let num3 = 3;
let num;
if (num1>num2){
    num=num1;
}
else if(num2>num3){
    num=num2;
}
else{
    num=num3
}
console.log("el mayor numero es:",num);

//tarea 2. Funciones 
function cualEsMayor(num1,num2,num3){
    let num;
    if (num1>num2){
        num=num1;
    }
    else if(num2>num3){
        num=num2;
    }
    else{
        num=num3
    }
    return num;
}
console.log("el numero mayor es:",cualEsMayor(1,2,3))



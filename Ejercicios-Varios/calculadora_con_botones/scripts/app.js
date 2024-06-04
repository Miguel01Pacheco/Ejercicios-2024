//Referencio todos los elementos necesarios
//del HTML.
const $pantalla =document.getElementById("display");
const $uno = document.getElementById("one");
const $dos = document.getElementById("two");
const $tres = document.getElementById("three");
const $cuatro = document.getElementById("four");
const $cinco = document.getElementById("five");
const $seis = document.getElementById("six");
const $siete = document.getElementById("seven");
const $ocho = document.getElementById("eight");
const $nueve = document.getElementById("nine");
const $cero = document.getElementById("zero");
const $suma = document.getElementById("suma");
const $resta = document.getElementById("resta");
const $multiplicacion = document.getElementById("multiplicacion");
const $division = document.getElementById("division");
const $atras = document.getElementById("pop");
const $igual = document.getElementById("igual");
//Declaro los arrays necesarios para dos nuneros
//y los que funcionan como swicht para los while.
const numero1 =[];
const numero2 =[];
const primerBucle = [true];
const segundoBucle = [true];
//Funcion calcular
function calcular(num1,num2,operacion){
    if(operacion === "+"){
        return num1 + num2 ;
    }else if (operacion === "-"){
        return num1 - num2 ;
    }else if (operacion === "*"){
        return num1 * num2 ;
    }else if (operacion === "÷"){
        return num1 / num2 ;
    }
};

    
    $uno.addEventListener("click", (e)=>{
        numero1.push("1");
    });
    $suma.addEventListener("click", (e)=>{
        primerBucle[0] =false;
    });
    

console.log(numero1);
console.log("final");
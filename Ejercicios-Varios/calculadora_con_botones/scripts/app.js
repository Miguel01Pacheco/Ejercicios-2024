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
const $clear = document.getElementById("clear");
//Declaro los arrays necesarios para dos nuneros
//y los que funcionan como swicht para los while.
const numero1 =[];
const numero2 =[];
let primerNumero = true;
let segundoNumero = false;
let operacion = "";
let resultado = 0;

//Funcion calcular
function calcular(num1,num2,op){
    if(op === "+"){
        return num1 + num2 ;
    }else if (op === "-"){
        return num1 - num2 ;
    }else if (op === "*"){
        return num1 * num2 ;
    }else if (op === "/"){
        return num1 / num2 ;
    }
};

 //Escucho todos los numeros y los ingreso en un array segun corresponda, 1 o 2.   
    $uno.addEventListener("click", (e)=>{
        if(primerNumero){
        numero1.push(1);
        $pantalla.innerText =`${numero1.join("")}`;
        }else if (segundoNumero){
        numero2.push(1);
        $pantalla.innerText =`${numero1.join("")} ${operacion} ${numero2.join("")}`;}
    });
    ;$dos.addEventListener("click", (e)=>{
        if(primerNumero){
        numero1.push(2);
        $pantalla.innerText =`${numero1.join("")}`;
        }else if(segundoNumero){
        numero2.push(2);
        $pantalla.innerText =`${numero1.join("")} ${operacion}${numero2.join("")}`;    
        }
    });$tres.addEventListener("click", (e)=>{
        if(primerNumero){
        numero1.push(3);
        $pantalla.innerText =`${numero1.join("")}`;
        }else if (segundoNumero){
        numero2.push(3);
        $pantalla.innerText =`${numero1.join("")} ${operacion}${numero2.join("")}`;    
        }
    });$cuatro.addEventListener("click", (e)=>{
        if(primerNumero){
        numero1.push(4);
        $pantalla.innerText =`${numero1.join("")}`;
        }else if (segundoNumero){
        numero2.push(4);
        $pantalla.innerText =`${numero1.join("")} ${operacion}${numero2.join("")}`;    
        }
    });$cinco.addEventListener("click", (e)=>{
        if (primerNumero){
            numero1.push(5);
            $pantalla.innerText =`${numero1.join("")}`;
        }else if (segundoNumero){
        numero2.push(5);
        $pantalla.innerText =`${numero1.join("")} ${operacion}${numero2.join("")}`;    
        }   
    });$seis.addEventListener("click", (e)=>{
        if (primerNumero){
        numero1.push(6);
        $pantalla.innerText =`${numero1.join("")}`;
        }else if (segundoNumero){
        numero2.push(6);
        $pantalla.innerText =`${numero1.join("")} ${operacion}${numero2.join("")}`;     
        }
    });$siete.addEventListener("click", (e)=>{
        if (primerNumero){
        numero1.push(7);
        $pantalla.innerText =`${numero1.join("")}`;
        }else if (segundoNumero){
        numero2.push(7);
        $pantalla.innerText =`${numero1.join("")} ${operacion}${numero2.join("")}`;    
        }
    });$ocho.addEventListener("click", (e)=>{
        if (primerNumero){
        numero1.push(8);
        $pantalla.innerText =`${numero1.join("")}`;
        }else if (segundoNumero){
        numero2.push(8);
        $pantalla.innerText =`${numero1.join("")} ${operacion}${numero2.join("")}`;    
        }
    });$nueve.addEventListener("click", (e)=>{
        if (primerNumero){
        numero1.push(9);
        $pantalla.innerText =`${numero1.join("")}`;
        }else if (segundoNumero){
        numero2.push(9);
        $pantalla.innerText =`${numero1.join("")} ${operacion}${numero2.join("")}`;    
        }
    });$cero.addEventListener("click", (e)=>{
        if (primerNumero){
        numero1.push(0);
        $pantalla.innerText =`${numero1.join("")}`;
        }else if (segundoNumero){
        numero2.push(0);
        $pantalla.innerText =`${numero1.join("")} ${operacion}${numero2.join("")}`;    
        }
    });
//Escucho los botones de operaciones    
$suma.addEventListener("click",(e)=>{
    operacion = undefined;
    operacion = "+";
    $pantalla.innerText =`${numero1.join("")} ${operacion}`;
    primerNumero= false;
    segundoNumero = true ;
});   
$resta.addEventListener("click",(e)=>{
    operacion = undefined;
    operacion = "-";
    $pantalla.innerText =`${numero1.join("")} ${operacion}`;
    primerNumero = false;
    segundoNumero = true ;
});  $multiplicacion.addEventListener("click",(e)=>{
    operacion = undefined ;
    operacion = "*";
    $pantalla.innerText =`${numero1.join("")} ${operacion}`;
    primerNumero = false;
    segundoNumero = true ;
});  $division.addEventListener("click",(e)=>{
    operacion = undefined ;
    operacion = "/";
    $pantalla.innerText =`${numero1.join("")} ${operacion}`;
    primerNumero = false;
    segundoNumero = true ;
}); 
$atras.addEventListener("click",(e)=>{
    if (primerNumero){
        numero1.pop();
        $pantalla.innerText =`${numero1.join("")}`;
    }else if (segundoNumero){
        numero2.pop();
        $pantalla.innerText =`${numero2.join("")}`;
    }

}); 
$igual.addEventListener("click",(e)=>{
    primerNumero = true;
    segundoNumero = false;
    resultado = calcular(parseInt(numero1.join("")),parseInt(numero2.join("")),operacion);
    $pantalla.innerText =`${resultado}`; 
}); 
$clear.addEventListener("click",(e)=>{
    $pantalla.innerText ="";
    operacion =undefined;
    numero1.length =0;
    numero2.length = 0;
    primerNumero =true;
    segundoNumero =false;
});

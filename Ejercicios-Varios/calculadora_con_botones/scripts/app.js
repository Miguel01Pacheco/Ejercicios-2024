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
const primerNumero = true;
const segundoNumero = false;
const operacion = "+";
const resultado = [];

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
        }else if (segundoNumero){
        numero2.push(1);}
    });
    ;$dos.addEventListener("click", (e)=>{
        if(primerNumero){
        numero1.push(2);
        }else if(segundoNumero){
        numero2.push(2);    
        }
    });$tres.addEventListener("click", (e)=>{
        if(primerNumero){
        numero1.push(3);
        }else if (segundoNumero){
        numero2.push(3);    
        }
    });$cuatro.addEventListener("click", (e)=>{
        if(primerNumero){
        numero1.push(4);
        }else if (segundoNumero){
        numero2.push(4);    
        }
    });$cinco.addEventListener("click", (e)=>{
        if (primerNumero){
            numero1.push(5);
        }else if (segundoNumero){
        numero2.push(5);    
        }   
    });$seis.addEventListener("click", (e)=>{
        if (primerNumero){
        numero1.push(6);
        }else if (segundoNumero){
        numero2.push(6);    
        }
    });$siete.addEventListener("click", (e)=>{
        if (primerNumero){
        numero1.push(7);
        }else if (segundoNumero){
        numero2.push(7);    
        }
    });$ocho.addEventListener("click", (e)=>{
        if (primerNumero){
        numero1.push(8);
        }else if (segundoNumero){
        numero2.push(8);    
        }
    });$nueve.addEventListener("click", (e)=>{
        if (primerNumero){
        numero1.push(9);
        }else if (segundoNumero){
        numero2.push(9);    
        }
    });$cero.addEventListener("click", (e)=>{
        if (primerNumero){
        numero1.push(0);
        }else if (segundoNumero){
        numero2.push(0);    
        }
    });
//Escucho los botones de operaciones    
$suma.addEventListener("click",(e)=>{
    operacion = "+";
    primerNumero= false;
    segundoNumero = true ;
});   
$resta.addEventListener("click",(e)=>{
    operacion = "-";
    primerNumero = false;
    segundoNumero = true ;
});  $multiplicacion.addEventListener("click",(e)=>{
    operacion = "*";
    primerNumero = false;
    segundoNumero = true ;
});  $division.addEventListener("click",(e)=>{
    operacion = "/";
    primerNumero = false;
    segundoNumero = true ;
});  
$igual.addEventListener("click",(e)=>{
    primerNumero = true;
    segundoNumero = false;
    resultado = calcular(numero1,numero2,operacion);
    $pantalla.innerText =`${resultado}`; 
}); 

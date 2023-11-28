/*
console.log("prueba de enlazamiento");
//tipo de variable

//const para variables constantes



const pi = 3.1416;
const pu = 2.54;
const name = "Keiner";

//var para variables globales

var cal_days = 30;

//let para variables locales o de bloque
let j=0;
let count = 1;

//formas de impresion

// alert(name);
 console.log(name);
console.log(cal_days);
console.log("15");

// pantalla = body

document.write(name);
//document.getElementById("box_one").innerHTML = "<h1> Keiner Ballesteros</h1>";
// document.getElementById("box_two").innerText = "<h1> Keiner Ballesteros</h1>";

//librerias

Swal.fire({
    icon:'info',
    title: 'Keiner Ballesteros',
    text:name,
    footer:name,
    showConfirmButton: false,
    timer: 2000,
    position: 'center-end'
}
    
  )
  
 // Swal.fire(name);

 //tipos de datos

 //numericos
 var number = 10;
 var number_two = 2.3;

 //String 
 var text="soy un texto";

 //booleanos
 var boolean = true; //false
*/
 array

 let array =[1,5,7];
 //let array_text =["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
 let array_mix =[ 1, "as",2,true];
 let array_mul =[
    {name:"Keiner", last_name: "Ballesteros",age: "17"},
    {name:"Pedro", last_name:"Miguel",age: "20"},
    {name:"juan", last_name:"martinez",age: "15"},
    {name:"maria", last_name:"perez",age: "21"}
 ];
 /*
 //*****  Operadores basicos
 //suma
 var suma = number+number_two;
 console.log("suma = "+suma);

 //resta
 var resta = number-number_two;
 console.log("resta = "+resta);

 //multiplication
 var product = number*number_two;
 console.log("product = "+product);

 //Division
 var cocient = number/number_two;
 console.log("cocient = "+cocient);

 //modulo 
 var modulo = number% number_two;
 console.log("modulo = "+modulo);
console.log(
    "modulo = "+modulo +"\n"+
    "cocient = "+cocient+"\n"+
    "product = "+product+"\n"+
    "resta = "+resta+"\n"+
    "suma = "+suma
);

var respuesta = "modulo = "+modulo +"<br>"+
"cocient = "+cocient+"<br>"+
"product = "+product+"<br>"+
"resta = "+resta+"<br>"+
"suma = "+suma

Swal.fire(respuesta);

Swal.fire({
    showConfirmButton :false,
    background: "#000",
    icon:'succes',
    title:'respuesta',
    html:respuesta
}
);

// OPERADORES LÓGICOS
// AND && con if
let array_text =["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
var bool = false;
var numeric ="7";
if(bool && numeric ===7){
    console.log("ENTRA IF");
}
else{
    console.log("ENTRA ELSE");
}
//OR || con if
var age = "31";
if(age == 32 || numeric ===7){
    console.log("Entra en if");
}
else{
    console.log("entra en else");
    age--;
}
console.log(age);

//                              FOR
var size = array_text.length;
for(let i = 0; i<size ;i++){
    console.log(array_text[i]+[i+1]);
}

// WHILE
let position = 0;
while(position<array_text.length){
    console.log(array_text[position]+[position+1]);
    position++;
}
// DO WHILE
let w= 0;
do {
    console.log(array_text[w]+[w+1]);
    w++;
} while(w<array_text.length);
*/
// FUNCIONES Y EVENTOS

function load_page(){
    document.getElementById("nombres").focus();
    document.getElementById("apellidos").disabled = true;
    let date = new Date();
    console.log(date.getSeconds());
    for(let i=0; i<array_mul.length;i++){
        console.log(array_mul[i].name);
    }
}

function ejm (){
    alert("Bienvenido");
}
function ejm2(){
    alert("Bienvenido2");
}

function box_onblur(){
    const box_onblur = document.querySelector("#box_onblur");
    if(box_onblur.value.length<=2){
        alert="PROBLEMA"
    }
}
const btn_changeColor = document.querySelector("#change_color")

btn_changeColor.addEventListener("click",()=>{
    document.body.style.backgroundColor = "red";
    document.body.style.color = "#fff";
});
const form = document.queryElementById("form_register")
const nombres = document.queryElementById("nombres")
const apellidos = document.queryElementById("apellidos")
const validation = document.queryElementById("validation")

form.addEventListener("submit", name_event =>{
    name_event.prevenDefault();

    let="info";
    if(nombres.value.length<=2 || apellidos.value.length<=2){
        info += "nombres o apellidos incorrectos";
        validation.style.color = "red";
    }
    else{
        info += "su nombre es: "+nombres.value + " "+"Su apellido es: "+apellidos.value
        validation.style.color = "green";
    }
    validation.innerText = info;
})
function validate(){
    let nombre = document.getElementById("nombres").value
    console.log(nombre);
    alert(nombres.split(" "))
    if(nombre.length > 2){
        document.getElementById("apellidos").disabled = false;
        document.getElementById("apellidos").focus();
        document.getElementById("nombres").value = "";
        
    }
}


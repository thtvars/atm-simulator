/**console.log('primer console.log');
console.log(2*5);
alert('que pachó maestro');*/

/**let user = '@ivantovar';
console.log(user);
user = '@thtvar';
console.log(user);

const cinco = ('5');
console.log(cinco);
console.log(typeof cinco);

const cincoNum = Number(cinco);
console.log(cincoNum);
console.log(typeof cincoNum);*/

//! Tipos Primitivos
//* number
//* string
//* boolean
//* null
//* undefined
//* symbol

/**const nombre = 'ivan';
let edad;
const insta = null;

console.log(nombre, typeof nombre);
// valor = 'ivan' & tipo string
console.log(edad, typeof edad);
// valor = undefined & tipo undefined
console.log(insta, typeof insta);
// valor = 'null' & tipo es 'objeto'*/

//! No primitivos
//* Array
/**const students = ['ivan', 'tovar', 'torres']
console.log(students);
students [3] = 'alejandro';
console.log(students);
console.log(students[1]);

//* Objetos
let user = {
    firstName: 'ivan',
    age: 29,
    isMilenial: true,
};

console.log(user);
console.log(user.firstName);
console.log(user.isMilenial);

user.age = 30;
console.log(user.age);*/
/**
const age = prompt('Dime tu edad');
console.log(age, typeof age);
const ageNum = Number(age);
console.log(ageNum, typeof ageNum)
 */

/**COMENTARIO DE BLOQUE */

// let semaforo = prompt('de que color esta el samaforo?');

// if (semaforo==verde){
//     console.log('avanza');
// }
// else if (semaforo==amarillo){
//     console.log('corre');
// }
// else if (semaforo==rojo){
//     console.log('alto');
// }
// else{
//     alert('escribe en minusculas y un colo correcto');
// }
//!better comments extension
//*mas simbolos
//todo otro color


//* EJERCICIOS

/**let a = prompt('ingresa un numero');
b = a*2;
console.log(a)
console.log(b)*/

/**

const aP = Number(prompt('ingresa un numero'));
const bP = Number(prompt('ingresa otro numero'));

console.log('la suma de a + b = ', aP + bP);*/




/**Number(a = prompt('escribe un numero'));
console.log(typeof a);

Number(b = prompt('escribe otro numero'));
console.log(typeof b);

//****************


Number(suma = a + b);
console.log(typeof suma);


console.log('la suma de a + b = ', suma);*/


/**const radio = 5.3;
const area = 3.1416*(radio**2);
console.log("el valor del area es:", area);*/

/**
//const ageP = Number(prompt('how old are you?'));
const age = 20;
const retAge = 85;
////////////////////////////////
function calcRet(){
    console.log(retAge-age);
}

calcRet();*/

///////////////////////////////////
/**const retAge = 65;

const calcRet = function(age){
    return retAge - age;
}

const yaxRet = calcRet(20);
const ivanRet = calcRet(25);
const jorgeRet = calcRet(40);

console.log(yaxRet);
console.log(ivanRet);
console.log(jorgeRet);*/
///////////////////////////////
/**const retAge = 65;
const year = 2023;

const calcRet = function(birthYear){
    return year - birthYear;
} */

/**
let userName = prompt('whats your name?');

function hiFct(name){
    console.log('Hi', name);
}

hiFct(userName);*/


//////////////////////////////////////
//*calc example
/** let trafficLight = prompt('what color is the trafficLight?');

if (trafficLight == 'green'){
    console.log('go ahead!');
}
else if (trafficLight == 'yellow'){
    console.log('hurry up!!');
}
else if (trafficLight == 'red'){
    console.log('STOP');
}
else{
    console.log('input a valid color and lowercase letter');
}
 */


//* pair number example

/** let num = Number(prompt('input any number'));
console.log(typeof num, num);

if (!isNaN(num)) {
    if (num % 2 == 0) {
        console.log('Your input', num, 'is an even number');
    }
    else {
        console.log('Your input', num, 'is an odd number');
    }
}
else{
    console.log('Input a valid number');
}*/
////////////////////////////////////
/**
let numA = Number(prompt('input one number'));
let numB = Number(prompt('input another number'));

if (!isNaN(numA) || !isNaN(numB)){
    //console.log(typeof numA, numA, typeof numB, numB);
    if(numA > numB){
        console.log(numA,'is greater than', numB);
    }
    if(numB > numA){
        console.log(numB,'is greater than', numA);
    }
    if (numA == numB){
        console.log(numA, 'and', numB, 'are equal');
    }
}
else{
    console.log('Input a valid number');
}
 */
/////////////////////////////////


/**
 for(let i = 0; i < 3; i++){
    console.log(broncosArray[i]);
    console.log(typeof broncosArray[i]);
}
for(let i = 0; i < 3; i++){
    console.log(patsArray[i]);
    console.log(typeof patsArray[i]);
}

*/


//*mini calculator example

/**
 let symbol = prompt('input operation symbol "+" or "-"');
let numA = Number(prompt('input one number'));
let numB = Number(prompt('input another number'));
Number(additionV = numA + numB);
Number(subtractionV = numA - numB);

switch (symbol) {
    case '+':
        additionV = numA + numB;
        //console.log(`${a} + ${b} = ${a + b}`);
        console.log('Your addition result is:', additionV);
        //console.log('Your addition result is:', numA + numB);
        break;

    case '-':
        additionV = numA + numB;
        //console.log(`${a} - ${b} = ${a - b}`);
        console.log('Your subtraction result is:', subtractionV);
        //console.log('Your subtraction result is:', numA - numB);
        break;

        default:
            console.log('input a valid symbol or valid number');
}
 */
//* Ternary operator
/**
 const age = 20;
let drink;

if(age>=18){
    drink = 'vino';
}
else{
    drink = 'water';
}

let drinkTO = age >= 18 ? 'vino':'water';

console.log(drink);
console.log(drinkTO);

//* Template Strings
const firstName = 'ivan';
const greeting2 = `Hi, ${firstName}, how are you?`;
console.log(greeting2);

 */
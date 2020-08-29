//RETO 1
//Crear con funciones de tipo flecha o arrow functions () => {}
//Una función que reste
//Una función que multiplique
//RETO 2
//Una función que le pregunte al usuario dos valores y que regrese:
//El área de un cuadrado
//El área de un rectángulo
//El área de un triángulo

const resta = (a, b) => console.log(a - b);

resta(10,5);

const multiplicar = (a, b) => console.log(a * b);

multiplicar(10,5);

const cuadrado = (a) => console.log(a * a);
var lado1 = prompt('Ingresa un lado del cuadrado:')
cuadrado(lado1)

const rectangulo = (a, b) => console.log(a * b);
var base = prompt('Ingresa la base del rectangulo:')
var altura = prompt('Ingresa la altura del rectangulo:')

rectangulo(base, altura)

/* 
const triangulo = (a, b) => console.log(a * b / 2);
var basetri = prompt('Ingresa la base del triangulo:')
var alturatri = prompt('Ingresa la altura del triangulo:')

triangulo(basetri, alturatri) */

const triangulo = () => {
    var basetri = prompt('Ingresa la base del triangulo:')
    var alturatri = prompt('Ingresa la altura del triangulo:')

    return basetri * alturatri / 2
}

console.log(triangulo()); 
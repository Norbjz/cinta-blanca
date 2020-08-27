/* console.log('Hola desde consola.');

//CICLOS FOR
//Repite bloques de codigo donde cada repetición se considera una iteración
//Estructura

//for (inicio; condicion; secuencia) {
//  tarea a repetir
//}

for (var i = 0; i <= 100; i++) {
    console.log(i);
}

//i = i + 2 se puede abreviar i +=2

for (var i = 0; i <= 100; i += 2) {
    console.log(i);
}
 */

/*  
//Reto 1
//Empezar en 10, termine en -250 y tiene que avanzar de 1 en 1

for (var i = 10; i >= -250; i--) {
    console.log(i);
}

//Empezar en -50, llegar a 500 y avanzar de 5 en 5

for (var i = -50; i <= 500; i += 5) {
    console.log(i);
}

//Empezar en 1000, llegar a 2000 y avanzar de 10 en 10

for (var i = 1000; i <= 2000; i += 10) {
    console.log(i);
}
 */


//Ligar ciclos con arreglos
//Uso más común para ciclar arreglos

/* var alumnos = [
    'Ricardo',
    'Carlos',
    'Beth',
    'Veronica',
    'Dalia',
    'Justin'
]

console.log(alumnos);
console.log(alumnos.length);

alumnos.push ('Mateo')

console.log(alumnos);
console.log(alumnos.length);

for (let index = 0; index < alumnos.length; index++) {
    console.log(index+1 + '.-' + alumnos[index]);    
} */

//Reto 2

var platillos = ['Enchiladas','Taco', 'Tamal', 'Pozole', 'Barbacoa', 'Guacamole' ]

console.log('Ejercicio 1');
for (var i = 0; i < platillos.length; i++) {
    console.log(i+1 + '.- ' + platillos[i]);
}

console.log('***********');
console.log('Ejercicio 2');

for (var i = 0; i < platillos.length; i++) {
    if (platillos[i] == 'Pozole' | platillos[i] == 'Barbacoa') {
        console.log(platillos[i]);
    }
}

console.log('***********');
console.log('Ejercicio 3');
for (var i = 0; i < platillos.length; i++) {
    if ( i % 2 === 0) {
    console.log(platillos[i]);
    }
}

console.log('***********');
console.log('Ejercicio 4');
for (var i = 1; i < platillos.length; i +=2) {
    console.log(platillos[i]);
}
console.log('Hola desde retos! Todo bien!');

// ------- RETO 1: PASSWORD
// Almacenar un password en una variable
// Preguntar al usuario su contraseña
// Si la contraseña es correcta, mostrar en consola: 'Bienvenido'
// Si la constraseña no es correcta, mostrar en consola: 'Password incorrecto, intente de nuevo'

/* var pass = 'pollo';

var contraseña = prompt('Ingresa tu contraseña:', '*********');

if (pass === contraseña){
    alert('Bienvenido.');
  } else {
    alert('Password incorrecto, intente de nuevo.');
  }
 */
// ------- RETO 2: PAR O IMPAR
// Le van a preguntar al usuario que les dé un número.
// Van a decir si este numero es par o es impar.

var num = prompt('Ingresa un número:');

if (num % 2 === 0) {
    alert ('Tu numero es par')
} else {
    alert ('Tu número es impar')
}
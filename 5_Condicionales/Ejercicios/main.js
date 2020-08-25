console.log('Hola desde retos! Todo bien!');

// ------- RETO 1: PASSWORD
// Almacenar un password en una variable
// Preguntar al usuario su contraseña
// Si la contraseña es correcta, mostrar en consola: 'Bienvenido'
// Si la constraseña no es correcta, mostrar en consola: 'Password incorrecto, intente de nuevo'

var pass = 'pollo';

var contraseña = prompt('Ingresa tu contraseña');

if (pass === contraseña){
    alert('Bienvenido.');
  } else {
    alert('Password incorrecto, intente de nuevo.');
  }
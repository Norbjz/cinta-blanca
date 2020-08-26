//Tarea 1

var jugador1 = prompt('Jugador 1:', 'piedra, papel o tijera');

var jugador2 = prompt('Jugador 2:', 'piedra, papel o tijera');

if (jugador1 === jugador2) {
    alert ('Empate.');
} else {
    if (jugador1 === 'piedra' && jugador2 === 'papel') {
        alert ('Gana el Jugador 2.');
    } else {
        if (jugador1 === 'piedra' && jugador2 === 'tijera') {
            alert ('Gana el Jugador 1.');
        } else {
            if (jugador1 === 'papel' && jugador2 === 'piedra') {
                alert ('Gana el Jugador 1.');
            } else {
                if (jugador1 === 'papel' && jugador2 === 'tijera') {
                    alert ('Gana el Jugador 2.');
                } else {
                    if (jugador1 === 'tijera' && jugador2 === 'piedra') {
                        alert ('Gana el Jugador 2.');
                    } else {
                        if (jugador1 === 'tijera' && jugador2 === 'papel') {
                            alert ('Gana el Jugador 1.');
                        } else {
                            alert ('Error. Intente de nuevo.');
                        }
                    }
                }
            }
        }
    }
}

// Se pueden integrar todas esas lineas con un "or" integrando las opciones que arrojan el mismo desenlace.

//Tarea 2

/* var num1 = parseInt(prompt('Ingresa el primer número:'));

var num2 = parseInt(prompt('Ingresa el segundo número:'));

var num3 = parseInt(prompt('Ingresa el tercer número:'));


if (num1 > num2) {
    if (num1 > num3) {
        alert ('El número mayor es ' + num1);
    } else {
        alert ('El núumero mayor es ' + num3);
    }
} else {
    if (num2 > num3) {
        alert ('El número mayor es ' + num2);
    } else {
        alert ('El núumero mayor es ' + num3);
    }
} */



//Tarea 3

/* var num1 = parseInt(prompt('Ingresa el primer número:'));

var num2 = parseInt(prompt('Ingresa el segundo número:'));

var num3 = parseInt(prompt('Ingresa el tercer número:'));

var num4 = num1 + num2 + num3;

alert ('La suma de los números es ' + num4); */
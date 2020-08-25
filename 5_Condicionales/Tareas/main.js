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
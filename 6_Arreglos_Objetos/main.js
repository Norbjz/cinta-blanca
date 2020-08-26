// ARREGLOS

//Se declaran utilizadn ocorchetes y cada elemento es una posición del arreglo/lista
//var arreglo = [pos0, pos1, pos2, ... posN]

var colores = ['Negro', 'Azul', 'Rojo', 'Morado'];
console.log(colores);

//Acceder a posicion especifica de un arreglo:

console.log(colores[1], colores[0]);

console.log(colores[5]); //Posición no definida del arreglo, arroja Undefined

//Agregar elementos a mi arreglo
//arreglo.push()

colores.push('Naranja');
colores.push('Verde');

console.log(colores);
console.log(colores[4]);
console.log(colores[5]);

//Eliminar ultimo elemento de mi arreglo
//arreglo.pop()

colores.pop();

console.log(colores);

colores.push('Verde');

//Eliminar valores especificos o sustituirlos
//arreglo.splice(val1, val2, val3)
// val1: posicion para empezar a quitar
//val2: valores a partir de val1 a quitar
//val3: elementoque desean agregar

colores.splice(4,1);
console.log(colores);

colores.splice(3,1, 'Rosa');
console.log(colores);

// RETO 1: ARREGLOS
// Hacca vacío, agreger un arreglo de música vacío, agregar 5 géneros con el método push,
// remplazar la posición número 3 con "PerritoSalchicha" y por último borrar el último elemento con el método pop. 

var musica = []

musica.push(prompt('Ingresa un genero musical'));
musica.push(prompt('Ingresa otro genero musical'));
musica.push(prompt('Ingresa otro genero musical'));
musica.push(prompt('Ingresa otro genero musical'));
musica.push(prompt('Ingresa otro genero musical'));
console.log(musica);

musica.splice(2,1, 'PerritoSalchicha');
musica.pop();
console.log(musica);

//Dato curioso: Las cadenas también se pueden interpretar como arreglos de caracteres
var arregloCadena = 'Norberto Jiménez';
console.log(arregloCadena[0], arregloCadena[1], arregloCadena[2]); // Nor

// Cómo coloco los elementos del arreglo al revés
// arreglo.reverse()

colores.reverse()
console.log(colores);


// Referencia: https://www.w3schools.com/js/js_array_methods.asp

//OBJETOS
//Se delcaran objetos utilizando llaves
//Cada elemento que contiene se considera una propiedad o llave/key
//objeto = { key: valor }

var objeto = {};

var persona = { 
    nombre: 'Norberto', 
    apellido: 'Jimenez',
    edad: 30,
    mail: 'hola@gmail.com',
    musica: {
        jmusic: ['AKFG', 'Indigo la End', 'One ok Rock'],
        metal: ['In Flames', 'Disarmonia Mundi', 'Trivium']
    },
}

console.log(persona);

//Para acceder a las propiedades del objeto utilizamos la siguiente estructura:

console.log(persona.nombre);
console.log(persona.musica.metal[1]);

//FORMATO JSON
//Formato con que intercambiamos info en la red de manera mas simple a diferencia del formato XML
//Este formato si requiere comilla doble

var personaJson = {
    "nombre": "Norberto",
    "ciudad": "Tlaxcala",
    "edad": 30,
    "musica": {
        "reggeaton": {
        "jbalvin": ["Rojo", "Blanco", "Negro"],
        "badbunny": ["Caro", "La Santa"]
        },
        "cumbia": "Los Ángeles Azules",
        "rock": "AC/DC"
    },
    "peliculas": ["Terror", "Documental", "Comedia"]
}

console.log(personaJson);


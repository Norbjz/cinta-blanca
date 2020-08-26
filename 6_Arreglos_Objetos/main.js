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
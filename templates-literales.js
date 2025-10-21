let nombre = 'Deadpool';
let real = 'Wade Winston';

console.log(nombre + ' ' + real);
console.log(`${nombre} ${real}`);

let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre} ${real}`;

//Demostrar que es lo mismo
console.log(nombreCompleto === nombreTemplate);

//Retorno de una función
function getNombre(){
    return `${nombre} es ${real}`;
}

//Hacer uso de una función dentro del template literal
console.log(`El nombre de ${getNombre()}`);


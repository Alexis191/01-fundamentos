//Nos permite obtener los atributos y objetos para usarlo luego
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder:'Regeneración',
    getNombre: function(){
        return `${this.nombre}${this.apellido} - poder:${this.poder}`;
    } 
};

//1. Invocar una funcion
console.log(deadpool.getNombre());

//2. Obtener los atributos uno por uno
let nom = deadpool.nombre;
let ape = deadpool.apellido;
let pod = deadpool.poder;

console.log(nom, ape, pod);

//3. Restructuracion
//Coger las varaibles del objeto de una manera más eficiente
let {nombre, apellido, poder} = deadpool;

console.log(nombre, apellido, poder);
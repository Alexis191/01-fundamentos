var nombre = 'Alexis';

console.log(nombre);

//let nombre = 'Profesor X'; //No puedo redefinir con let
if (true){
    var nombre = 'Magneto';
    console.log(nombre);
}
console.log(nombre);


let i; //Una cosa es estar definido, otra es estar declarada y tenga un valor
for (let i=0; i<=6; i++){
    console.log(i);
}
console.log(i);
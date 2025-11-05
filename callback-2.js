//Definir una funación de busqueda
let getUsuarioById = (id, callback) => {
    //Suponer que realiza una busqueda en base de Datos
    let usuario = {
        id, // == id : id
        nombre: "Alexis"
    };
    //Cuando se termina la busqueda se invoca al callbackcon un resultado. Un objeto "usuario"
    callback(usuario);
};

// utilizar la funcion 
getUsuarioById(19, (usuario) => {
    console.log(usuario);
});
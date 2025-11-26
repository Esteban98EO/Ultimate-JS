//Personaje de anime
let nombre = "Naruto Uzumaki";
let anime = "Naruto";
let edad = 17;
let esNinja = true;

let personaje = {
    nombre: "Naruto Uzumaki",
    anime: "Naruto",
    edad: 17,
    esNinja: true
};
//Accediendo a las propiedades del objeto
console.log(personaje);
console.log("Nombre:", personaje.nombre);
console.log(personaje.anime);
console.log(personaje["edad"]);

personaje.edad = 18; //Modificando una propiedad
console.log("Edad modificada:", personaje.edad);

personaje ["nombre"] = "Sasuke Uchiha"; //Modificando usando notación de corchetes
console.log("Nombre modificado:", personaje.nombre);

delete personaje.anime; //Eliminando una propiedad
console.log("Después de eliminar anime:", personaje);
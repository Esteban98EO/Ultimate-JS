// AND, OR, NOT
// &&, ||, !
// AND (&&): true si ambos son true
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
// OR (||): true si al menos uno es true
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
// NOT (!): invierte el valor
console.log(!true); // false
console.log(!false); // true

let mayor = false;
let suscrito = true;

console.log("operador and " , mayor && suscrito); // true
console.log("operador or " , mayor || suscrito); // true
console.log("operador not " , !mayor); // false

let catalogoInfantil = !mayor;
console.log("catalogo infantil: ", catalogoInfantil); // true

// Ejemplo de uso en condicionales  
if (mayor && suscrito) {
    console.log("Acceso al contenido");
} else {
    console.log("Acceso denegado");
}   
if (mayor || suscrito) {
    console.log("Acceso al contenido");
} else {
    console.log("Acceso denegado");
}   
if (!mayor) {
    console.log("Acceso al contenido infantil");
} else {
    console.log("Acceso denegado al contenido infantil");
}

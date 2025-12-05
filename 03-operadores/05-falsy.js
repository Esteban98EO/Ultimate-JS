//short circuito
let nombre = "Chanchito Feliz";
let userName = nombre || "Anónimo";
console.log(userName); // Anónimo

function fn1 () {
    console.log("Soy la función 1");
    return false;    
}
function fn2 () {
    console.log("Soy la función 2");
    return true;    
}

let x = fn1() && fn2();
console.log(x);



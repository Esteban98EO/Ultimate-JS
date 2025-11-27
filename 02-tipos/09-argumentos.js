function sumar (a, b) {
    console.log(arguments); // Objeto 'arguments' que contiene todos los argumentos pasados
    return a + b;
}
let resultado = sumar(5, 6, 1, 2, 3); // Guardando el valor retornado
console.log("Resultado de la suma:", resultado);
console.log(typeof sumar); // El tipo de dato es 'function');
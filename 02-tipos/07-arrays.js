let animales = ["Perro", "Gato", "Elefante", "Tigre"];
console.log("Animales:", animales);
console.log("Primer animal:", animales[0]);

animales[4] = "León"; // Agregando un nuevo elemento
console.log("Después de agregar un animal:", animales);

animales [10] = "Jirafa"; // Agregando un elemento en una posición lejana
console.log("Después de agregar una jirafa en la posición 10:", animales);
console.log(animales[7]); // Accediendo a una posición no asignada (undefined)

console.log(typeof animales); // El tipo de dato es 'object' ya que los arrays son objetos en JS
console.log("Longitud del array:", animales.length); // Propiedad length
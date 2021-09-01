// Info persona
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let edad = prompt("¿En que año naciste?");
let saludo = "¡Hola" + " " + nombre + " " + "bienvenid@!";
alert(saludo);

// Calculo edad
let mayor = parseInt(edad);
let fechaActual = "2021"
console.log(fechaActual - mayor);
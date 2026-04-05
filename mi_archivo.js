class HolaMundo {
static main(args) {
console.log("¡Hola, mundo desde JavaScript!");
HolaMundo.saludar("nombre");
HolaMundo.sumar(5, 3);
}
static saludar(nombre) {
console.log("Hola, " + nombre + ". ¡Bienvenida al ejercicio de Git y GitHub!");
}
static sumar(a, b) {
const resultado = a + b;
console.log("La suma de " + a + " + " + b + " es: " + resultado);
}
}
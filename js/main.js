let nombreAlumno = "Fabian";
let apellidoAlumno = "Mendoza";
let edad = 33;
let cuotaAlDia = true;
let carrera = "programacion";

let alumnoFabian = {
    nombre: "Fabian",
    apellido: "Mendoza",
    edad: 33,
    carrera: "programacion",
    cuota: true 
}

console.log(alumnoFabian);

function persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.saludar = function() {
        console.log(" Hola soy: " + this.nombre);
    }
}
let nombre = prompt("Ingrese nombre de su hij@:");
let apellido = prompt("Ingrese apellidos de su hij@:");
let edadhijo = prompt("ingrese edad de su hij@:");

const persona1 = new persona(nombre, apellido, edadhijo);

console.log(persona1);

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    
    sumaiva() {
        return this.precio * 1.21;
    }
}

const fideos = new Producto("Fideos marolio", 100 );

console.log(fideos);

console.log("El precio de los fideos es de: " + fideos.precio
 + " y con el iva incluido es de: " + fideos.sumaiva());


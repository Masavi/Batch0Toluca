class Perro {
    constructor(nombre, raza, peso){
        this.nombre = nombre;        
        this.raza    = raza;
        this.peso    = peso;
    }

    comer(comida){
        return `${this.nombre} está comiendo ${comida}`;
    }
}

//const perro = new Perro("Ayudante de Santa", "Galgo", "3 kg");
//const perro2 = new Perro("Don Ramon", "Pug", "1.7 kg");

class Cliente {

    // Atributos
    constructor(nombre, apPat, apMat, INE, edad){
        this.nombre = nombre;
        this.apPat = apPat;
        this.apMat = apMat;
        this.INE = INE;
        this.edad = edad;
    }

    // Getters
    getNombre(){
        return this.nombre;
    }

    getApellidoPaterno(){
        return this.apPat;
    }

    getApellidoMaterno() {
        return this.apMat;
    }

    // Setters
    setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    // Métodos
    obtenerCredenciales(){
        return `CLIENTE: ${this.nombre} ${this.apPat} ${this.apMat}`;
    }

    obtenerEdad(){
        return `EDAD DEL CLIENTE: ${this.edad}`;
    }
}

let cliente_1 = new Cliente("Mauricio","Saavedra","Villarreal", true, 23);
//console.log(cliente_1.obtenerCredenciales());

// VIOLACIÓN DEL PRINCIPIO DE ENCAPSULAMIENTO
//cliente_1.nombre = "adhajdajsdh";
//console.log(cliente_1.nombre);

/*
    Crear una clase llamada Persona que siga las siguientes condiciones:
    sus atribuytos son: nombre, edad, RFC, sexo, peso y altura
    sus metodos son:
    calcularIMC,
    esMayorDeEdad
    El constructor pide nombre, edad, sexo, peso y altura
    Generar el atributo RFC a partir del nombre, edad y sexo
    OJO: esto se hace mediante un método
*/

class Persona{
    constructor(nombre, edad, sexo, peso, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        // peso / (altura)^2
        return (this.peso / (this.altura*this.altura));
    }

    esMayorDeEdad(){
        if (this.edad >= 18){
            return "Es mayor de edad";
        } else {
            return "No es mayor de edad u_u";
        }
    }

    mostrarDatos(){
        return `NOMBRE: ${this.nombre}
        RFC: ${this.rfc}`;
    }

    generarRFC(){
        this.rfc = this.nombre + this.sexo + this.edad
    }
}


const persona = new Persona("Mauricio", 23, "M", 65, 173);

//console.log(persona.esMayorDeEdad());
//console.log(persona.calcularIMC());

console.log(persona.mostrarDatos());

persona.generarRFC();
console.log(persona.mostrarDatos());

/*
	Crear una clase Cuenta que tenga los siguientes atributos y metodos:
	Titular y cantidad
	ingresar(cantidad)
	retirar(cantidad)
	Hacer las validaciones previas
	Como regla de negocio no debe de tener más de $900 y menos de $10
*/

class Cuenta {
    constructor(titular, cantidad) {
        this.titular = titular
        this.cantidad = cantidad
    }

    ingresar(cantidad) {
        if (this.cantidad + cantidad > 900) {
            return "Estas superando el limite de $900; operacion cancelada";
        } else {
            this.cantidad += cantidad;
            return "Operacion exitosa: Tu saldo es de " + this.cantidad;
        }
    }

    retirar(cantidad) {
        if (this.cantidad - cantidad < 10) {
            return "No tienes fondos suficientes; el minimo es de $10";
        } else {
            this.cantidad -= cantidad;
            return "Has retirado $" + cantidad + ". Tu nuevo saldo es de: " + this.cantidad;
        }

    }
}

let cuenta = new Cuenta("Mauricio Saavedra", 350);

/* console.log(cuenta.cantidad);

console.log(cuenta.retirar(400));
console.log(cuenta.ingresar(1000));

console.log(cuenta.retirar(50));
console.log(cuenta.ingresar(100)); */
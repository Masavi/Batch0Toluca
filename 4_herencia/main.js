// Clase padre principal
class Animal {
    constructor(cerebro, patas){
        this.cerebro = cerebro;
        this.patas   = patas;
    }

    comer(comida){
        return `El animal de ${this.patas} patas esta comiendo ${comida}`;
    }
}

// Clase hijo de clase Animal
class Humano extends Animal {
    constructor(cerebro){
        super(cerebro);
    }
}

const david = new Humano(true, 2);
//console.log(david.comer("pizza"));

// Clase hijo de clase Animal
class Mascota extends Animal {
    constructor(cerebro, patas, pulgas){
        super(cerebro, patas);
        this.pulgas = pulgas;
    }
}

const perro = new Mascota(true, 4, 8);
const gato = new Mascota(true, 4, 27);
//console.log(gato.comer("croquetas"));


class Maestro {
    constructor(materia, calificaciones){
        this.materia = materia;
        this.calificaciones = calificaciones;
    }

    obtenerPromedio(){
        let suma = 0;

        for(let i=0; i < this.calificaciones.length; i++){
            suma = suma + this.calificaciones[i];
        }

        return suma / this.calificaciones.length;
    }
}


const maestro = new Maestro("Fisica", [10,5,5,3,4,5]);
//console.log(maestro.obtenerPromedio());

class Largometraje {
    constructor(nombre, duracion, precio){
        this.nombre = nombre;
        this.duracion = duracion;
        this.precio = precio;
    }
}

class Pelicula extends Largometraje {
    constructor(nombre, duracion, precio, director){
        super(nombre, duracion, precio);
        this.director = director;
    }
}

class Documental extends Largometraje {
    constructor(nombre, duracion, precio, locacion) {
        super(nombre, duracion, precio);
        this.locacion = locacion;
    }
}

class Cine {
    constructor(){
    }

    reproducirLargometraje(filme){
        console.log( `El largometraje ${filme.nombre} de duracion ${filme.duracion} se está reproduciendo... `);
    }
}

const ToyStory3 = new Pelicula("Toy Story 3", 128, 50.00, "Pixar");
const BellasDeNoche = new Documental("Bellas de Noche", 190, 30.50, "Veracruz");
const Cinepolis = new Cine();

//Cinepolis.reproducirLargometraje(BellasDeNoche);
console.log(Cinepolis.reproducirLargometraje);
let objeto = {};
//console.log( typeof objeto);

// indice <-> valor
// [0,1,2];

// clave <-> valor
objeto = {
  numero: 100,
  mensaje: "Hola",
  booleano: true,
  arreglo: [1, 2, 3],
  /*   saludar: function(){
      console.log("Hola a to2");
  }  */
  saludar: ()=>{
      console.log("holitas");
  }
}


let persona = {
    // Atributos
    nombre: "Juan Paco Pedro de la Mar",
    altura: 170,
    tez: "bronce",
    sexo: "M",
    nacionalidad: "CR",

    // Métodos
    presentarse: function(){
        return `Hola! Mi nombre es ${this.nombre}`;
    },
    cobrar: () => {
        return `Dame dinero!!!!!!`
    }
}
console.log(persona.presentarse());


/* int a;
int b;

function sumar(int, int){
    return a + b;
} */



/* let objetoSuma = {
    num1 : 2,
    num2: 3,
    suma: function(){
        return objetoSuma.num1 + objetoSuma.num2;
    }
} */


//clases

class Tarea{

    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar(){
        console.log(`${this.nombre} tiene una prioridad ${this.prioridad}`);        
    }
}

//herencia
class ComprarPendientes extends Tarea{
    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad); //hacemos referencia del constructor padre
        this.cantidad= cantidad;
    }

    mostrar(){
        super.mostrar();
        console.log(` y la cantidad de ${this.cantidad}`);        
    }
}



//creamos objetos 

let tarea1 = new Tarea('Aprender Javascript', 'Alta');
let tarea2 = new Tarea('Aprender Javascript', 'Media');
let tarea3 = new Tarea('Aprender Javascript', 'baja');
let tarea4 = new Tarea('Aprender Javascript', 'Media');
let tarea5 = new Tarea('Aprender Javascript', 'Alta');

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());
// console.log(tarea4.mostrar());
// console.log(tarea5.mostrar());



let compra1 = new ComprarPendientes('jabon', 'urgente', 3);

compra1.mostrar();
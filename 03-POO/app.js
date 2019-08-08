//clases

class Tarea{

    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
}


//creamos objetos 

let tarea1 = new Tarea('Aprender Javascript', 'Alta');

console.log(tarea1);
import Tarea from "./tareas.js";


//herencia
export default class ComprarPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad); //hacemos referencia del constructor padre
        this.cantidad = cantidad;
    }

    mostrar() {
        super.mostrar();
        console.log(` y la cantidad de ${this.cantidad}`);
    }

    hola() {
        console.log('hola');
    }
}
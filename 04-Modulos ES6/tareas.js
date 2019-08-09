export const nombreTarea = 'Pasear Perro';

//exportar funciones


export const crearTarea = (tarea, urgencia) => {
    return `la tarea ${tarea} tiene una urgencia ${urgencia}`;
}

export const tareaCompletada = ()=>{
    console.log('la tarea se completo');
}


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
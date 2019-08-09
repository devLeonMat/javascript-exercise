

import Tarea from './tareas.js';
import ComprarPendientes from './compras.js';


const tarea1 = new Tarea('Aprender javascript', 'urgente');

console.log(tarea1);

tarea1.mostrar();


const compra1 = new ComprarPendientes('pizza','Urgente', 2);

console.log(compra1);
compra1.mostrar();
compra1.hola();
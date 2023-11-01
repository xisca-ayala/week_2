import {isEven} from './condicionales'
import {add} from './buclesFor'

let arrayC: string[] = ['Casa', 'Coche', 'Ciudad', 'Cesta'];
let arrayB: string[] = ['Barco', 'Baca', 'Bicicleta', 'Balon','Bisiesto','Brasil'];
let arrayV: string[] = ['Venezuela', 'Veneno', 'Voltaje'];

console.log('En la suma de los carácteres del array de palabras que empiezan por C:' + isEven(add(arrayC))); 
console.log('En la suma de los carácteres del array de palabras que empiezan por B:' + isEven(add(arrayB))); 
console.log('En la suma de los carácteres del array de palabras que empiezan por V:' + isEven(add(arrayV))); 

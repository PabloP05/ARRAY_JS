/*2. Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen
notas mayores o iguales a 7 y cuántos menores. */

let array = [];
for (let i = 0; i < 10; i++){
    array[i]=Number(prompt('introduce las notas :'));
} 


console.log(`Los alumnos con notas superiores a 7 son : ${array.filter(nota => nota >= 7).length}`);
console.log(`Los alumnos con notas inferiores a 7 son : ${array.length-array.filter(nota => nota >= 7).length}`);
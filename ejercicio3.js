/**3. Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura
promedio de las personas. */

let array = [];

for (let i = 0; i < 5; i++){
    array[i] = Number(prompt('introduce altura : '));
}

console.log(`la estatura promedio de los usuarios es : ${array.reduce((acumulador, n) => acumulador + n, 0) / array.length}`);
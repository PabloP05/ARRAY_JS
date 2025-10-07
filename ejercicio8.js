/**8. Desarrollar un programa que permita cargar 5 números enteros y luego nos
informe cuántos valores fueron pares y cuántos impares.
Emplear el operador "%" en la condición de la estructura condicional.
if (valor%2==0)
El operador "%" retorna el resto de la división valor / 2. Por ejemplo: 12 % 2, retorna 0;
13 % 2, retorna 1, porque el resto de dividir 13 en 2 es 1. */

let array = [];

for (let i = 0; i < 5; i++){
    array[i] = Number(prompt("introduce un numero"));
}
let pares =array.filter(numero => numero % 2 == 0).length;
let total = array.length;
console.log("El total de numeros pares es : " + pares);
console.log("el total de numeros impares es : " + (total - pares)); 

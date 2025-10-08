/**4. Realizar un programa que pida la carga de dos vectores numéricos. Obtener la
suma de los dos vectores, dicho resultado guardarlo en un tercer vector del
mismo tamaño. Sumar componente a componente. */

let array1 = [1,2,3,4,5,6,7,8,9,10];
let array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let resultado = [];

for (let i = 0; i < 10; i++){
    resultado[i] = array1[i] + array2[i];
}

console.log(resultado);
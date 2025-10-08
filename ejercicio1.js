/**1. Desarrollar un programa que solicite la carga de 10 números e imprima la suma
de los últimos 5 valores ingresados. */

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let suma =array.slice(-5).reduce((acumulador, n) => acumulador + n, 0); //con slice extraigo los elementos del array desde el indice 5

console.log(suma);

    //sin en slice usamos u numero negativo comenzara desde el final, entonces si llamamos a slice -5  sacara los ultimos 5 numeros 
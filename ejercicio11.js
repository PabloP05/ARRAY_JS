/**11. Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a) La cantidad de valores negativos ingresados.
b) La cantidad de valores positivos ingresados.
c) La cantidad de múltiplos de 15.
d) El valor acumulado de los números ingresados que son pares. */


let array = [];

for (let i = 0; i < 10; i++){
    array[i] = Number(prompt('numero : '));
}

console.log("la camtidad de negativos en el array es  : " + array.filter(numeros => numeros < 0).length);
console.log("la camtidad de positivos en el array es  : " + array.filter(numeros => numeros > 0).length);

console.log("el nº total de valores es : " + array.reduce((acu, valor) => acu + valor, 0));
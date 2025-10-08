/**5. Desarrollar un programa que permita ingresar un vector de 8 elementos, e
informe:
El valor acumulado de todos los elementos del vector.
El valor acumulado de los elementos del vector que sean mayores a 36.
Cantidad de valores mayores a 50. */

let array = [22, 19, 30, 26, 5, 900, 65, 89];

console.log(`la suma de todos los valores es : ${array.reduce((acumlardor, n) => acumlardor + n, 0)}`);
console.log(`los valores sumados mayores de 36 son : ${array.filter(numero => numero > 36).reduce((acumlardor, n) => acumlardor + n, 0)}`);
console.log(`los valores sumados mayores de 50 son : ${array.filter(numero => numero > 50).reduce((acumlardor, n) => acumlardor + n, 0)}`);

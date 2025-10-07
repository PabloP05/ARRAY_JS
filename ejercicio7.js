/**7. Realizar un programa que permita cargar dos listas de 3 valores cada una.
Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor
(mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
Tener en cuenta que puede haber dos o más estructuras repetitivas en un
algoritmo. */

let lista1 = [1, 5, 8, 9, 6, 2];
let lista2 = [5, 8, 7, 3, 6, 9];


lista1.reduce((acumulador, valor) => acumulador + valor, 0);
lista2.reduce((acumulador, valor) => acumulador + valor, 0);


if (lista1 > lista2) {
    console.log("la lista 1 es mayor que la 2");
} else if (lista2 > lista1) {
    console.log("la lista 2 es mayor que le 1");
} else {
    console.log("son iguales");
}
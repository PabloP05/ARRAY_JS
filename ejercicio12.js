/**12. Se cuenta con la siguiente información:
Las edades de 5 estudiantes del turno mañana.
Las edades de 6 estudiantes del turno tarde.
Las edades de 11 estudiantes del turno noche. 

Las edades de cada estudiante deben ingresarse por teclado.
a) Obtener el promedio de las edades de cada turno (tres promedios).
b) Imprimir dichos promedios (promedio de cada turno).
c) Mostrar por pantalla un mensaje que indique cual de los tres turnos
tiene un promedio de edades mayor.
*/



let mañana = [16, 18, 19, 17, 30];
let tarde = [20, 22, 25, 26, 23, 36];
let noche = [22, 21, 23, 25, 26, 24, 28, 29, 27, 21, 28];


let comparador = [];

comparador.push({tuno:'mñana',promedio:mañana.reduce((acu, edad) => acu + edad, 0) / mañana.length});
comparador.push({tuno:'tarde',promedio:tarde.reduce((acu, edad) => acu + edad, 0) / tarde.length});
comparador.push({tuno:'noche',promedio:noche.reduce((acu, edad) => acu + edad, 0) / noche.length});



console.log(`promedio turno de mañana ${comparador[0].promedio} , promedio turno de tarde : ${comparador[1].promedio}, promedio turno de noche : ${comparador[2].promedio}`);


comparador.sort((a, b) => b.promedio - a.promedio);

console.log(`la calase con promedio mas alto es  : el turno de ${comparador[0].tuno}`);

/**6. En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500,
realizar un programa que lea los sueldos que cobra cada empleado e informe
cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300.
Además el programa deberá informar el importe que gasta la empresa en sueldos
al personal. */


let sueldos = [100, 500, 600, 300, 100, 150, 250];

let salarios1 = sueldos.filter(sueldo => {
    if (sueldo >= 100 && sueldo <= 300)
        return sueldo;
}).length


console.log(`los empleados con un sueldo entre 100 y 300 son : ${salarios1}`);


console.log(`los sueldos superiores a 500 son : ${salarios1.filter(numero => numero > 500).length}`);
console.log(`el total de los gastos de la empresa son : ${sueldos.reduce((acu, n) => acu + n, 0)}`);



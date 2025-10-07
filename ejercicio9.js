/**9. Realizar el siguiente ejercicio utilizando Arrays asociativo.
En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta
corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de
datos debe finalizar al ingresar un valor negativo en el número de cuenta.
Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:

a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta
según su saldo, sabiendo que:
Estado de la cuenta 'Acreedor' si el saldo es >0.
'Deudor' si el saldo es <0.
'Nulo' si el saldo es =0.

b) La suma total de los saldos acreedores.

*/

let banco = [];
let nombre;
let nCuenta;
let saldo;


do {
    nCuenta = Number(prompt("introduce el numero de cuenta"));
    if (nCuenta > 0) {
        nombre = prompt("introduce el nombre");
        saldo = Number(prompt("introduce el saldo de la cuenta"));
        banco.push({ nombre: nombre, nCuenta: nCuenta, saldo: saldo});
    }
} while (nCuenta > 0)
    




for (let i = 0; i < banco.length; i++){
    if (banco[i].estado == undefined) {
        if (banco.saldo > 0) {
            banco[estado] = 'acreedor';
        } else if (banco.saldo < 0) {
            banco[estado] = 'deudor';
        }
        else {
            banco[estado] = 'nulo';
        }
    }
}

console.log(banco);
let bancoAcreedor = banco.filter(n => n.estado == "acreedor").reduce((acumulador, valor) => acumulador + valor.saldo, 0);


console.log(bancoAcreedor);


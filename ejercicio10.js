/**10. Se realizó un censo provincial y se desea procesar la información obtenida en
dicho censo. De cada una de las personas censadas se tiene la siguiente
información: número de documento, edad y sexo ('femenino' o 'masculino').
Se pide confeccionar un programa que lea los datos de cada persona censada (para
finalizar ingresar el valor cero en el número de documento) e informar:

a) Cantidad total de personas censadas.
b) Cantidad de varones.
c) Cantidad de mujeres.
d) Cantidad de varones cuya edad varía entre 16 y 65 años. */



let personas = [];

let nombre;
let documento;
let sexo;
let edad;

do {
    documento = Number(prompt("introduce numero de dopcumento"));
    if (documento > 0) {
        nombre = prompt("introdcuce el nombre : ");
        do {
            sexo = prompt('introduce sexo :masculino/femenino');
        } while (sexo != 'masculino' && sexo != 'femenino');
        edad = Number(prompt("introduce tu edad"));
        personas.push({ nombre: nombre, documento: documento, sexo: sexo, edad: edad });
    }  
} while (documento != 0);


console.log(`el total de personas es : ${personas.length}`);

console.log("el numero de hombres es : " + personas.filter(persona => persona.sexo == 'masculino').length);
console.log("el numero de mujeres es : " + personas.filter(persona => persona.sexo == 'femenino').length);


console.log("Cantidad de varones cuya edad varía entre 16 y 65 años : " + personas.filter(persona => {
    persona.sexo == 'masculino' && (persona.edad >= 16 && personas.edad <= 65)
    return persona
}).length);

 





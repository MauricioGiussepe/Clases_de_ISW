function sumas(Array){
    let suma = 0;
    Array.forEach(element => {
        suma = suma + element;
    });
    return suma;
}
let Array = [1,2,3,4,5,6,7,8,9,10];
console.log(sumas(Array));
console.log("La suma de los elementos del array es: " + sumas(Array));
console.log("ejercicio 1\n")

function sumaPromedio(Array){
    let suma = 0;
    Array.forEach(element => {
        suma = suma + element;
    });
    return suma / Array.length;
}
let Array2 = [1,2,3,4,5,6,7,8,9,10];
console.log(sumaPromedio(Array2));
console.log("El promedio de los elementos del array es: " + sumaPromedio(Array2));
console.log("ejercicio 2\n")

function mayusculaser(Array){
    let mayusculas = Array.map(element => element.toUpperCase());
    return mayusculas;
}
let Array3 = ["hola", "que", "tal", "comos", "te", "llamas xd"];
console.log(mayusculaser(Array3));
console.log("ejercicio 3\n")

function pares(Array){
    let pares = Array.filter(element => element % 2 == 0);
    return pares;
}
let Array4 = [1,2,3,4,5,6,7,8,9,10];
console.log(pares(Array4));
console.log("Los elementos pares del array son: " + pares(Array4));
console.log("ejercicio 4\n")
























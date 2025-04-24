const numero1 = 15;
const numero2 = 20;
const numero3 = '25';
const uno = (numero1 >= numero2); 
const dos = (numero1 <= numero2);
const tres = (numero1 < numero3);
const cuatro = (numero3 < numero2);
const cinco = (numero3 !== numero1);
const seis = (numero1 === numero2);

console.log("numero1: " + numero1);
console.log("numero2: " + numero2);
console.log("numero3: " + numero3);

console.log("El numero1 es mayor o igual que el numero2: " + uno);
console.log("El numero1 es menor o igual que el numero2: " + dos);
console.log("El numero1 es menor que el numero3: " + tres);
console.log("El numero3 es menor que el numero2: " + cuatro);
console.log("El numero3 es estrictamente diferente al numero1: " + cinco);
console.log("El numero1 es estrictamente igual al numero2: " + seis);
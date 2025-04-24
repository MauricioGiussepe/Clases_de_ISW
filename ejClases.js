console.log("\n Ejercicio 1: \n")
const persona = {
    nombre: "Yusep",
    edad: 33,
    genero: "Masculino",
    direccion: {
        ciudad: "Coronel",
        pais: "Chile",
    }
};

console.log("Nombre individuo: "+persona.nombre); 
console.log("Edad individuo: "+persona.edad);
console.log("Gender individuo: "+persona.genero);
console.log("Ciudad de residencia: "+persona.direccion.ciudad);
console.log("País de residencia: "+persona.direccion.pais);

console.log("\n Ejercicio 2: \n")
const caja = {
    cantCuadernos: 5,
    cantLapices: 12,
    cantPapel: 53,
    fotografias: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'],
    buenEstado: true,
}
console.log("Objeto caja: ", caja);

for(const propiedad in caja){
    console.log(`Propiedad: ${propiedad} - Valor: ${caja[propiedad]} - Tipo: ${typeof(caja[propiedad])}`);
}


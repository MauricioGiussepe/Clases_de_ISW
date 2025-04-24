const numero1 = 10;
const numero2 = 20;
const numero3 = 7;

if(numero1 >= numero2 && numero1 >= numero3) {
    console.log("El numero1 es el numero mayor");
}else{
    if(numero2 >= numero1 && numero2 >= numero3){
        console.log("El numero2 es el numero mayor");
    }else{
        console.log("El numero3 es el numero mayor");
    }
}

if(numero1 <= numero2 && numero1 <= numero3) {
    console.log("El numero1 es el numero menor");
}else{
    if(numero2 <= numero1 && numero2 <= numero3){
        console.log("El numero2 es el numero menor");
    }else{
        console.log("El numero3 es el numero menor");
    }
}
//Operaciones básicas
function suma(a,b){
    return a+b;
}
//Exporta la función
exports.suma = suma; 

function resta(a,b){
    return a-b;
}
exports.resta = resta;

function multiplicacion(a,b){
    return a*b;
}
exports.multiplicacion = multiplicacion;

function division(a,b){
    if(b==0){
        console.log("No se puede dividir por cero");
}
else{
    return a/b;
}
}
exports.division = division;

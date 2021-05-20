function deepEqualArrays(arr1, arr2) {
    var conteo = 0;
    var a1 = aplana(arr1);
    var a2 = aplana(arr2);
    if(a1.length !== a2.length) return false;
    for(let i=0; i< a1.length; i++){
        return (typeof a1[i] === typeof a2[i]) ? true : false;
    }
} 
//Esto tal vez les sirva para el extra credit, es una función que cuenta los digitos de un numero (si comienza con cero no lo tiene en cuenta) y no tiene problemas con los negativos. Vi una version parecida sin el Math.floor, pero usa un operador raro (or bit a bit) 

function digitos(num){
    if(num < 0){ digitos (num *=-1)} 
    return (num <= 0) ? 0 : Math.floor( Math.log(num) * Math.LOG10E + 1 );
} 

function direcciones(laberinto, direction = "") {
    // caso base
    for (const prop in laberinto) {
      if (laberinto[prop] === "destino") {
        return (direction += prop);
      } else if (typeof laberinto[prop] === "object") {
        direction += prop;
        return direcciones(laberinto[prop], direction);
      }
    }
    return direction;
  }
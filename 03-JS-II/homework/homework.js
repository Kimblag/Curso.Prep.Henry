// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x > y){
    return x;
  } else if (y > x){
      return y;
  } else {
      return x || y;
    }
  } 


function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad >= 18){
    return "Allowed";
  } else {
    return "Not allowed";
  }  
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status === 1){
    return "Online";
  } else if (status === 2){
      return "Away";
    } else{
      return "Offline";
    }
}


function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch(idioma){
    case "aleman": return "Guten Tag!";
    case "mandarin": return "Ni Hao!";
    case "ingles": return "Hello!";
    default: return "Hola!";
  }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch(color){
    case "blue": return "This is blue";
    case "red": return "This is red";
    case "green": return "This is green";
    case "orange": return "This is orange";
    default: return "Color not found";
  }
}


function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10 || numero === 5){
    return true;
  } else{
    return false;
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20){
    return true;
  }
  return false;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (Number.isInteger(numero)){
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 15 === 0){
    return "fizzbuzz";
  } else if (numero % 3 === 0){
      return "fizz";
    } else if (numero % 5 === 0){
        return "buzz";
      } else {
        return numero;
      }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  if (num1 < 0 || num2 < 0 || num3 < 0){
    return "Hay negativos";
  } else if (num1 === 0 || num2 === 0 || num3 === 0){
    return "Error";
  } else if (num1 > num2 && num1 > num3 && num1 > 0){
  return "Número 1 es mayor y positivo";
  }  if (num3 > num2 && num3 > num1){
    return num3 + 1;
  } else {
    return false;
  }
}


function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero < 2 ) {
    return false;
  } else if ( numero === 2 ) {
    return true;
  } for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false ;
  }
} return true;
}

 // Primero establezco que si el número es menor que 2, que es primo, (0, 1 y negativos no aplica) no los evalúe.
  // Ahora establezco que si es 2 me devuelva true porque ES primo.
  // Ahora creo un bucle en el cual quiero que se evalúe qué número es primo. Establezco la variable divisor (el número por el 
  // cuál se dividirá "número") y digo que comience en 2. Luego indico que el Divisor siempre dividirá a "número" hasta un número antes que "número"
  // porque todos los números son divisibles entre sí mismos, así que no pierdo tiempo evaluando hasta ese punto.
  // indico que mi variable divisor debe aumentar en 1 para que vaya buscando los números por los que el resto sería 0. 
  // si consigue un número en el camino, devuelve false de una vez.
  

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor === true) {
    return "Soy verdadero";
  } else {
    return "Soy falso";
  }
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var tabla = [];
  for (var i = 0 ; i <= 10 ; i++){
    tabla.push(i*6);
  }
  return tabla;
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero >= 100 && numero <= 999 || numero >= -999 && numero <= -100){
    return true;
  }
  return false;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var i = 0;
    do {
    numero += 5;
    i++;
  } while (i < 8);
  return numero;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};

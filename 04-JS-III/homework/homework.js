// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var N = array.length;
  return array[N-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(var i = 0;i < array.length;i++){
      array[i] = array[i] + 1;
      //array.push(array[i]);
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = palabras[0];
  for(var i = 1;i < palabras.length;i++){
    frase = frase + ' ' + palabras[i];
  }
  return frase;
  //return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  //var a = array.find(elemento);
  var a = array.indexOf(elemento);
  //var a = array.findIndex(elemento);
  return (a > -1)
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  /*const reducer = (previousValue,currentValue) => previousValue + currentValue;
  return numeros.reduce(reducer);
  */
 var suma = 0;
 for(var i = 0;i < numeros.length;i++){
   suma = suma + numeros[i];
 }
 return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  let promedio = 0;
  let N = resultadosTest.length;
  for(var i = 0;i < N;i++){
     suma = suma + resultadosTest[i];
  }
  promedio = suma/N;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let max_value = numeros[0];
  for(var i = 0;i < numeros.length;i++){
      if(numeros[i] > max_value){
          max_value = numeros[i]
      }

  }
  return max_value;
}


function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var tabla = [];
  for(var i = 0;i <= 10;i++){
    tabla.push(6*i);
  }
  return tabla;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var N = arguments.length;
  var producto = 1;
  if(N === 0){ return 0;}
  else{
    for(var i = 0;i < N;i++){
      producto *= arguments[i];
    }
  }
  return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí 
  //const condicion = (element) => element > 18;
  //var array = arreglo.filter(condicion);
  //return array.length;
  var contador = 0;
  for(var i = 0;i < 61;i++){
    if(arreglo[i] > 18){
      contador += 1;
    }
  }
  return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: "Es fin de semana"
  //si el día corresponde a Sábado o Domingo y "Es dia Laboral" en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia == 7 || numeroDeDia == 1) return 'Es fin de semana';
  else return 'Es dia Laboral';
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var num =  n.toString();//n.value.charAt(0);
  return num[0] === '9'; // true o false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  //const condicion = (element) => arreglo[0] === element;
  //return arreglo.every(condicion)
  for(var i = 0;i < arreglo.length;i++){
    if(arreglo[i] != arreglo[0]){
      return false;
    }
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var Meses = ["Enero","Marzo","Noviembre"];
  var nuevoArray = [];
  for(var i = 0;i < array.length;i ++){
    if(array[i] === Meses[0] || array[i] === Meses[1] || array[i] === Meses[2]){
        nuevoArray.push(array[i]);
    }
  }
  if(nuevoArray.length < 3) return 'No se encontraron los meses pedidos';
  else return nuevoArray;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  /*const condicion = (element) => element > 100;
  return array.filter(condicion);
  */
  var nuevo_array = [];
  for(var i = 0;i < array.length;i++){
    if(array[i] > 100){
      nuevo_array.push(array[i]);
    }
  }
  return nuevo_array;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
 var nuevoArray = [];
  for(var i = 0;i < 10;i++){
    numero += 2;
    if(numero === i){
      return "Se interrumpió la ejecución"
    }else{
      nuevoArray.push(numero);
    }
  }
  return nuevoArray;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoArray = [];
  for(var i = 0;i < 10;i++){
    
    if(i === 5){
      continue;
    }else{
      numero += 2;
      nuevoArray.push(numero);
    }
  }
  return nuevoArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  tablaDelSeis,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
}

// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  

  return Object.entries (objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
      string = string.toLowerCase(); 
   string=string.split(''); 
   var ObjetoFinal={};
    var arreglofinal=[];
    for (i=0;i<string.length;i++){
              var letra='';
              var cantidad = 0;
              letra = string[i].toString();
              cantidad = string.filter (x=> x ===string[i]).length;
              ObjetoFinal[letra]=cantidad;}
    return ObjetoFinal;

}




function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  s=s.split('');
  nuevos=[];
  nuevos2=[];
  for(i=s.length-1;i>=0;i--){
    if(s[i]===s[i].toUpperCase()){
            nuevos.unshift(s[i]);
            } else {nuevos2.unshift(s[i])}
    }
    nuevos= nuevos.join('');
    nuevos2=nuevos2.join('');
    nuevos= nuevos+nuevos2;
    return nuevos;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
    var str2= ''; 
    var str3='';
    for(i=0;i<str.length;i++){ 
        if(str[i] !== ' ') {str2= str[i]+str2;} 
          else
      {str3= str3+ str2+str[i];
        str2='';}
      }

    return str3 + str2;
  

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
 numero= numero.toString();
  var largo= numero.length;
  var capicua = true;
  var cb= function(numero, i){capicua = capicua & numero[i]===numero[largo-1-i];}
if (largo % 2 !== 0){ 
        for (i=0;i<(largo-1)/2;i++){
        cb(numero,i);}}
  else {for (i=0;i<(largo)/2;i++){
        cb(numero,i);};}

if (capicua===1){return "Es capicua"}
  else {return "No es capicua"}

}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadena2='';
  for(i=0;i<cadena.length;i++){if(cadena[i]!=='a'&cadena[i]!=='b'&cadena[i]!=='c'){
    cadena2=cadena2+cadena[i];
  }
}
return cadena2;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a, b) {
  return a.length - b.length;
});
return arr;


}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arreglo3=[];
  for(i=0;i<arreglo1.length;i++){
    if(arreglo2.find(a=>a===arreglo1[i])===arreglo1[i]){arreglo3.push(arreglo1[i]);}
  }
  return arreglo3;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


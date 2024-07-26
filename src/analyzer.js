const analyzer = {  
  //separamos con split, que corta en cada espacio en blanco
  //\s para espacios en blanco
  //validamos que no si existen cadenas vacias  no las cuente y retorme 0
  //.length para que nos devuelva la nueva cantidad de palabras del texto
  getWordCount: (text) => {
    const WordCount = text.split(/\s+/g);
    if (text === "") 
      return 0;
    return WordCount.length;
  },

  //solo contamos todo el texto ingresado
  getCharacterCount: (text) => {
    return text.length
  },

  //.trim( ) elimina los espacios en blanco en ambos extremos del string
  //.replace nos permite reemplazar por el parámetro que le pasemos (espacios en blano, por cadenas vacias)
  getCharacterCountExcludingSpaces: (text) => {
    const characterCountExcludingSpaces = text.trim().replace(/\s+/g, "");
    return characterCountExcludingSpaces.length;
  },

  //primero separamos todo el texto unicamente en palabras 
  //guardamos la longitud de palabras en una variable
  //.toFixed formatear un número a un número fijo
  getAverageWordLength: (text) => {    
    const word = text.split(/\s+/g);
    let wordLength = 0;
    
    for (let i=0; i<word.length; i++){
      wordLength = wordLength + word[i].length;
    }

    const averageWordLength = wordLength / word.length;
    return averageWordLength.toFixed(2);

  },

  //Solo contar números
  //.match busca coincidencias según la condición que evalue
  //\d para dígitos, equivalente a [0-9]
  //validar que se encuentren números
  getNumberCount: (text) => {
    const numberCount = text.match(/\d+/g);
    if (!numberCount){
      return 0;
    } else {
      return numberCount.length
    }
  },

  //.reduce() método de arreglo que reduce todos los elementos a un único valor, según dos parámetros
  //parseInt es una función que comprueba el primer argumento  e intenta devolver un entero de la base especificada. 
  getNumberSum: (text) => {
    const numberSum = text.match(/\d+/g);
    if (!numberSum){
      return 0;
    } 
    
    const sum = numberSum.reduce((total, num) => total + parseInt(num, 10), 0);
    return sum;
  },
};

export default analyzer;

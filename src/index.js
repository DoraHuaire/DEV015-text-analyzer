import analyzer from './analyzer.js';

const textArea = document.getElementsByName("user-input")[0];

textArea.addEventListener("input", () => {
  const WordCount = analyzer.getWordCount(textArea.value);
  document.querySelector(".metricas:nth-child(3)").innerHTML  = "Palabras: " + WordCount;
  
  const CharacterCount = analyzer.getCharacterCount(textArea.value);
  document.querySelector(".metricas:nth-child(1)").innerHTML = "Caracteres: " + CharacterCount;

  const CharacterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(textArea.value);
  document.querySelector(".metricas:nth-child(2)").innerHTML = "Caracteres sin espacio: " + CharacterCountExcludingSpaces;

  const AverageWordLength = analyzer.getAverageWordLength(textArea.value);
  document.querySelector(".metricas:nth-child(6)").innerHTML = "Promedio de longitud: " + AverageWordLength;

  const NumberCount = analyzer.getNumberCount(textArea.value);
  document.querySelector(".metricas:nth-child(4)").innerHTML = "Números: " + NumberCount;

  const NumberSum = analyzer.getNumberSum(textArea.value);
  document.querySelector(".metricas:nth-child(5)").innerHTML = "Suma de números: " + NumberSum ;
});


//boton para reiniciar//
const resetButton = document.getElementById("reset-button");
//evento de escucha para el boton//
resetButton.addEventListener("click", () => location.reload());


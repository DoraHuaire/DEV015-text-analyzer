
## Analizador de texto 📑📖

***
![analizador final](/analizador.png)

## 1. Resumen del proyecto

En este proyecto se ha diseñado una aplicación web que permite a la usuaria analizar un texto en el navegador según los siguientes indicadores: el número de caracteres, el número de caracteres sin espacio, el número de palabras, el conteo de números, la suma de números y el promedio de longitud de las palabras que hayan sido enviadas como _input_ por ella.  

Para el diseño de la aplicación se ha utilizado CSS, HTML y JavaScrip
Además, se ha implementado diversas expresiones regulares para números, letras, caracteres especiales, entre otros. Los resultado pueden verse en tiempo real a medida que la usuaria escribe su texto.

## 2. Descripción del proyecto

Este analizador de texto se ha creado para que las usuarias que necesiten identificar el número de palabras, caracteres y números en un texto, así como calcular la suma de los números y la longitud media de las palabras introducidas. Es útil para la redacción de materiales académicos y profesionales que necesiten delimitar textos. El proyecto comenzó con un prototipo de baja fidelidad.

En general, la aplicación de análisis de texto brinda información valiosa y métricas sobre los textos que pueden ayudar a tomar decisiones informadas y sacar conclusiones significativas.

Las siguientes son las métricas implementadas:

y las funciones me manipulación del DOM usadas:

## 3. Funcionalidades

Cantidad de palabras: Cuenta las palabras en el texto de entrada y muestra la cantidad al usuario.
Cantidad de caracteres: Cuenta el número de carácteres en el texto de entrada, incluidos espacios y signos de puntuación, y muestra la cantidad al usuario.
Cantidad de solo caracteres: Cuenta el número de carácteres en el texto de entrada sin considerar los espacios ni signos de puntuación, y se muestra la cantidad al usuario.
Cantidad de números: Cuenta cuántos números hay en el texto de entrada, sin considerar los números dentro de una palabra y muestra la cantidad al usuario.
Suma de los números: Considerando los números que hay en el texto de entrada con la condición anterior, suma todas las cifras y muestra el resultado al usuario.
Longitud promedio de las palabras: Calcula el promedio de caracterés que incluyen las palabras en el texto de entrada y muestra el resultado al usuario.
Botón de Borrar: Botón que permite al usuario eliminar cualquier dato ingresado en la entrada de texto y las métricas mostradas se resetean.
Entrada de texto: Permite al usuario ingresar el texto que desea analizar.

## 4. Archivos

src/index.html: Este archivo contiene el código de HTML.
src/style.css: Este archivo contiene las reglas de estilo utilizadas en código CSS.
src/analyzer.js: Este archivo contiene las especificaciones del objeto analyzer, el cual, contiene los métodos desarrollados en JS para dar funcionalidad al proyecto.
src/index.js: Este archivo contiene el código para escuchar eventos del DOM, invocar los métodos del objeto analyzery actualizar el resultado en la UI (interfaz de usuario).
test/analyzer.spec.js: Este archivo contiene las pruebas unitarias realizadas para los métodos del objeto analyzer.


## 5. Deploy

La aplicación se encuentra en Github Pages - Link.

## 6. Test

El proyecto cumple con los requerimientos funcionamiento esperados.

## 7. Tecnologías
HTML
CSS
JavaScript
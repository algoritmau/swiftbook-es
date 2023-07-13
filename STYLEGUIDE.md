> Para conocer el estado y progreso actuales de la traducción, visita [Progreso de la traducción](https://github.com/patternina/swift-book-es/issues/3)

<br />
<br />

# Guía de estilo y Glosario

Sigue esta guía de estilo para, así, ser consistente con el resto de las páginas. También encontrarás una lista de palabras clave y términos comunes que puedes usar en tu traducción.

<br />

## Bloques de código

[Nextra](https://nextra.site) tiene funcionalidad de _syntax highlighting_ integrada, por lo que para los bloques de código tienen el siguiente formato:

- El código va encerrado en dos líneas con tres _backticks_ (` \``) cada una. La primera fila, sin embargo lleva la palabra clave  `swift`para indicar a Nextra que queremos _syntax highlighting_ para dicho lenguaje de programación. De igual, manera lleva la palabra clave`showLineNumbers` para indicarle a Nextra que queremos los números de línea visibles (esto no es implementado en la página web oficia del libro, pero es una preferencia personal).
- Para resaltar una o varias líneas de código en un bloque, indíca los números de línea dentro de llaves (`{}`) —separados por comas (`,`) si se trata de líneas no consecutivas o por un guión (`-`) si se trata de un rango de líneas—.
- Para resaltar palabras o cadenas dentro de un boque de código, encierra las mismas dentro de dos símbolos `/`.
- Al igual que con los números de línea, en el libro original no se incluyen resalto de líneas o palabras dentro de los bloques de código, por lo que por preferencia personal, he decidido agregarlo a los bloques de código. Muchos de los artículos por traducir no contienen esto agregado, por lo que agradezco que al traducir una página resalten cualquier línea o palabra clave que brinde mayor contexto visual de lo que se transmite en un bloque de código.

Por ejemplo, Nextra renderizará el bloque de código a continuación de manera que tenga números de línea visibles, tenga las líneas 1 y 3 resaltadas, al igual que el rango de líneas de 11 a 13. Así mismo, resaltará las palabras `let`, `var`, y la cadena `: Double`.

```swift showLineNumbers {1, 3, 11-13} /let/ /var/ /: Double/
var unaVariable = 1

let unaConstante = 2

print(unaVariable)
print(unaConstante)

unaVariable = 2
var otraVariable: Double = 3

print(unaVariable)
print(otraVariable)
print(unaVariable + unaConstante)
```

### Texto en bloques de código

He decidido traducir los _strings_, comentarios, y nombres de funciones y variables para brindar mayor entendimiento y contexto en los ejemplos usados en los bloques de código. ¡Ten cuidado de no traducir nombres que hagan referencia a código (variables, clases, etc)!

Ejemplo:

```swift showLineNumbers
// Example
let apples = 3
let oranges = 5
let appleSummary = "I have \(apples) apples."
let fruitSummary = "I have \(apples + oranges) pieces of fruit."
print(fruitSummary)
// Prints "I have 8 pieces of fruit."
```

✅ CORRECTO:

```swift showLineNumbers
// Ejemplo
let manzanas = 3
let naranjas = 5
let totalManzanas = "Tengo \(manzanas) manzanas."
let totalFrutas = "Tengo \(manzanas + naranjas) frutas."
print(totalFrutas)
// Imprime "Tengo 8 frutas."
```

❌ INCORRECTO:

```swift showLineNumbers
// Ejemplo
let manzanas = 3
let naranjas = 5
let totalManzanas = "Tengo \(manzanas) manzanas."
let totalFrutas = "Tengo \(manzanas + naranjas) frutas."
// "print" hace referencia a una función
// NO LO TRADUZCAS
imprimir(totalFrutas)
```

<br />

## Usted, tú y vos

Para ser consistente y evitar regionalismos, he decidido utilizar **tú** para designar la segunda persona del singular.

<br />

## Traducción de términos comunes

Aquí hay algunas sugerencias para la traducción de términos de uso común en este tipo de documentación técnica.

| Palabra/término en inglés | Sugerencia                            |
| ------------------------- | ------------------------------------- |
| array                     | _array_                               |
| assert                    | comprobar                             |
| autoclosure               | autoclausura                          |
| braces                    | llaves                                |
| boolean                   | booleano                              |
| bug                       | error                                 |
| callback                  | _callback_                            |
| camelCase                 | _camelCase_                           |
| closure                   | clausura                              |
| debugging                 | depuración                            |
| deinitialization          | desinicialización                     |
| file                      | archivo                               |
| framework                 | _framework_                           |
| key                       | _key_                                 |
| lazy initialization       | inicialización diferida               |
| layout                    | _layout_                              |
| library                   | biblioteca                            |
| loop                      | ciclo                                 |
| lowercase                 | minúscula(s)                          |
| optional binding          | vinculación opcional                  |
| overriding                | sustitución                           |
| render                    | renderizar (verb), renderizado (noun) |
| scope (noun)              | ámbito                                |
| scope (verb)              | aislar                                |
| script                    | _script_                              |
| statement                 | instrucción                           |
| string                    | cadena                                |
| stub                      | _stub_                                |
| subscript                 | _subscript_                           |
| substring                 | subcadena                             |
| template literals         | _template literals_                   |
| test                      | prueba                                |
| trailing closure          | clausura colgante                     |
| type annotation           | definición de tipo                    |
| type inference            | inferencia de tipo                    |
| type safety               | seguridad de tipo                     |
| unwrap                    | extraer                               |
| variadic                  | _variádico_                           |

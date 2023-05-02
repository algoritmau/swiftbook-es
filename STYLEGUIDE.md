> Para conocer el estado y progreso actuales de la traducción, visita [Progreso de la traducción](https://github.com/trsplms/swift-book-es/issues/3)

<br />
<br />

# Guía de estilo y Glosario

Sigue esta guía de estilo para, así, ser consistente con el resto de las páginas. También encontrarás una lista de palabras clave y términos comunes que puedes usar en tu traducción.

<br />

## Texto en bloques de código

He decidido traducir los _strings_, comentarios, y nombres de funciones y variables para brindar mayor entendimiento y contexto en los ejemplos usados en los bloques de código. ¡Ten cuidado de no traducir nombres que hagan referencia a código (variables, clases, etc)!

Ejemplo:

```swift
// Example
let apples = 3
let oranges = 5
let appleSummary = "I have \(apples) apples."
let fruitSummary = "I have \(apples + oranges) pieces of fruit."
print(fruitSummary)
// Prints "I have 8 pieces of fruit."
```

✅ CORRECTO:

```swift
// Ejemplo
let manzanas = 3
let naranjas = 5
let totalManzanas = "Tengo \(manzanas) manzanas."
let totalFrutas = "Tengo \(manzanas + naranjas) frutas."
print(totalFrutas)
// Imprime "Tengo 8 frutas."
```

❌ INCORRECTO:

```swift
// Ejemplo
let manzanas = 3
let naranjas = 5
let totalManzanas = "Tengo \(manzanas) manzanas."
let totalFrutas = "Tengo \(manzanas + naranjas) frutas."
// "print" hace referencia a una función
// NO LO TRADUZCAS
imprimir(totalFrutas)
```

### Bloques de código

Los bloques de código se representan con la siguiente sintaxis:

```swift showLineNumbers
let manzanas = 3
let naranjas = 5
let resumenManzanas = "Tengo \(manzanas) manzanas."
let resumenFrutas = "Tengo \(manzanas + naranjas) frutas."
```

Puedes resaltar líneas específicas de un bloque de código usando la siguiente sintaxis:

```swift showLineNumbers {2, 4}
let manzanas = 3
let naranjas = 5
let resumenManzanas = "Tengo \(manzanas) manzanas."
let resumenFrutas = "Tengo \(manzanas + naranjas) frutas."
```

En el ejemplo anterior, se resaltan las líneas 2 y 4.

También puedes resaltar palabras o términos específicos de un bloque de código usando la siguiente sintaxis:

```swift showLineNumbers {2, 4} /let/
let manzanas = 3
let naranjas = 5
let resumenManzanas = "Tengo \(manzanas) manzanas."
let resumenFrutas = "Tengo \(manzanas + naranjas) frutas."
```

En el ejemplo anterior, se resaltan las líneas 2 y 4, y la palabra `let`.

Algunos bloques de código pueden contener saltos de línea que no están el documento original. Esto, con el fin de brindar una mejor legibilidad de los ejemplos y bloques de código.

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

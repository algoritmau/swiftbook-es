# Guía de estilo y lineamientos de traducción

## Traducción

Estado y progreso actuales de la traducción: <https://github.com/spaceinvadev/swift-book-es/issues/3>

<br>

## Guía de estilo

### Texto en bloques de código

He decidido traducir las cadenas de texto y nombres de funciones y variables para brindar mayor acompañamiento y contexto en los ejemplos usados en los bloques de código, al igual que los comentarios. ¡Ten cuidado de no traducir cadenas que hagan referencia a código!

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

<br>

### Usted, tú y vos

Para ser consistente y evitar regionalismos, he decidido utilizar **tú** para designar la segunda persona del singular.

<br>

## Traducción de términos comunes

Aquí hay algunas sugerencias para la traducción de términos de uso común en este tipo de documentación técnica.

| Palabra/término en inglés | Sugerencia                            |
| ------------------------- | ------------------------------------- |
| array                     | _array_                               |
| assert                    | comprobar                             |
| bug                       | error                                 |
| callback                  | _callback_                            |
| camelCase                 | _camelCase_                           |
| debugging                 | depuración                            |
| file                      | archivo                               |
| framework                 | _framework_                           |
| issue                     | _issue_                               |
| key                       | _key_                                 |
| lazy initialization       | inicialización diferida               |
| layout                    | _layout_                              |
| library                   | biblioteca                            |
| lowercase                 | minúscula(s)                          |
| open source               | código abierto                        |
| render                    | renderizar (verb), renderizado (noun) |
| scope (sustantivo)        | ámbito                                |
| scope (verbo)             | aislar                                |
| script                    | _script_                              |
| state                     | estado                                |
| string                    | _string_                              |
| stub                      | _stub_                                |
| template literals         | _template literals_                   |
| test                      | prueba                                |

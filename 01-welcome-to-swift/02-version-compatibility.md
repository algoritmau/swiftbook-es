# Compatibilidad de Versiones

Este libro describe Swift 5.5, la versión predeterminada de Swift que se incluye en Xcode 13. Puedes usar Xcode 13 para compilar _targets_ desarrollados en Swift 5.5, Swift 4.2, o Swift 4.

Al usar Xcode 13 para compilar código Swift 4 y Swift 4.2, la mayoría de las funciones de Swift 5.5 están disponibles. Dicho esto, los siguientes cambios están disponibles sólo para código desarrollado en Swift 5.5 o posterior:

* Las funciones que devuelven un tipo opaco requieren el _runtime_ de Swift 5.1.
* La expresión `try?` no introduce un nivel adicional de opcionalidad en las expresiones que ya devuelven opcionales.
* Se infiere que las expresiones de inicialización de enteros literales grandes son del tipo de entero correcto. Por ejemplo, `UInt64(0xffff_ffff_ffff_ffff)` resulta en el valor correcto en lugar de desbordarse.

La concurrencia requiere Swift 5.5 o posterior, y una versión de la biblioteca estándar de Swift que proporcione los tipos de concurrencia correspondientes. En las plataformas de Apple, establece un _target_ de implementación de al menos iOS 15, macOS 12, tvOS 15, o watchOS 8.0.

Un _target_ desarrollado en Swift 5.5 puede depender de uno desarrollado en Swift 4.2 o Swift 4, y viceversa. Esto significa que si tienes un proyecto grande que está dividido en varios _frameworks_, podrás migrar tu código de Swift 4 a Swift 5.5 un _framework_ a la vez.


# Guía de contribución

¡Gracias por dedicar tu tiempo en contribuir con nuestro proyecto! Cualquier aporte que hagas se verá reflejado en [swiftbook.es](https://swiftbook.es) ✨.

Lee nuestro [código de conducta](./CODE_OF_CONDUCT.md), el cual nos permite mantener nuestra comunidad accesible y respetable.

Esta guía presenta una descripción general del flujo de trabajo de contribución desde la apertura de un _issue_, la creación de un _PR_, la revisión, y la fusión (_merge_) del _PR_.

Usa el ícono de la tabla de contenido en la esquina superior izquierda de este documento para acceder rápidamente a una sección específica de esta guía.

<br />

## Traduciendo las páginas

La traducción al español de [_The Swift Programming Language_](https://docs.swift.org/swift-book/) consiste en una serie de páginas maquetadas mediante [MDX](https://mdxjs.com/) que luego son renderizadas por [Nextra](https://github.com/shuding/nextra) y son las que consumimos día a día. Cada uno de estos archivos markdown (`.mdx`) corresponde a una página del libro. En [Progreso de Traducción](https://github.com/trsplms/swift-book-es/issues/3), podrás encontrar una lista de todas las páginas que se deben traducir; este es, a su vez, un issue de progreso para llevar un seguimiento y registro de las traducciones.

<br />

## Pasos para traducir una página

Buscando mantener un orden en las traducciones, contamos con el issue de progreso. Para poder empezar a traducir sigue los siguientes pasos. Por favor, no empieces a traducir hasta no haber seguido todos estos pasos y haberte sido asignada una página. La idea es que no pierdas preciado trabajo y tiempo si la página ya ha sido asignada a alguien más; a veces puedo tardar en asignar, así que, ten paciencia:

1. Dirígete al issue de [Progreso de Traducción](https://github.com/trsplms/swift-book-es/issues/3) y verifica cuáles páginas pendientes por traducción están disponibles.

2. Si ya sabes cuál página quieres traducir, deja un comentario etiquetándome (@patternina) con la página que quieres traducir, para así poder asignártela.

3. Espera una respuesta en los comentarios o revisa que la página que deseas traducir ya tiene tu nombre de usuario al lado entre paréntesis:

> Fundamentos.mdx (<tu nombre de usuario>) ✍🏽

De esta forma ya sabes que puedes empezar a traducir.

4. Empieza a traducir. Si no sabes cómo empezar, en la siguiente parte te indico cómo hacer un _fork_ del repositorio, clonarlo, y cómo abrir tu primer PR.

<br />

## Crear un _fork_, clonar

Para empezar a traducir y crear tu primera contribución, debes crear un _fork_ del repositorio, que no es más que hacer una copia del repositorio base a tus repositorios; de esta manera, evitamos choques no deseados con el contenido oficial. Seguidamente, clonarás tu repositorio a tu máquina local para tener todo el código de las páginas y, así, poder abrirlas en tu editor de texto. Finalmente, cuando termines de traducir una página, pódras crear tu primer PR para su revisión. Parece mucho, pero sigue estas instrucciones:

1. Para crear un _fork_ del repositorio, dirígete a la [página principal](https://github.com/patternina/swift-book-es) del repositorio.

2. En la parte superior derecha, haz clic en el botón **Fork**. Esto creará un _fork_ en tus repositorios. Al finalizar, estarás en una página similar a la del repositorio principal, solo que con tu nombre de usuario. También puedes hacer un fork de un repositorio usando el subcomando `gh repo fork`: `gh repo fork patternina/swift-book-es`.

3. Ahora, debes clonar el repositorio en tu máquina local; para esto, justo donde quedaste en el paso anterior dale clic en **Code**. Allí encontrarás la dirección de tu repositorio, cópiala y desde tu terminal, ejecuta `git clone <URL_DEL_REPOSITORIO>` pegando el enlace de tu repositorio para clonar. También puedes hacerlo con el subcomando `gh repo clone`: `gh repo clone patternina/swift-book-es`.

4. Ya con el repositorio clonado, ábrelo en tu editor de texto. Ahora, debes crear una rama para trabajar.

<br />

## Crear una rama y hacer _commit_ de tus cambios

Al terminar de clonar el repositorio, estarás trabajando sobre la rama principal (`main`) en tu repositorio local. Los cambios se deben realizar en una rama aparte ya que `main`, que incluye las traducciones finales, sirve como base de la página de producción. Por lo tanto, solo debes crear una nueva rama, traducir la página deseada y hacer _commit_ de los cambios:

1. Crea una nueva rama a partir de la rama principal (`main`) ejecutando en tu terminal: `git checkout -b <traduccion/NOMBRE_DEL_ARTICULO>`, el nombre de la rama debe componerse de la palabra `traduccion` seguido de un símbolo `/` y el nombre del artículo a traducir, por ejemplo: `git checkout -b traduccion/operadores-basicos`.

2. Ya estando en tu nueva rama, abre tu editor de texto favorito y empieza a traducir la página que solicitaste.

3. Al finalizar de traducir, debes hacer _commit_ de los cambios, esto para que el repositorio los guarde. Para esto debes agregar tus cambios ejecutando: `git add .` (asumiendo que solo modificaste un solo archivo). Asegúrate de solo agregar el archivo de la página que cambiaste, nada más.

4. Ahora debes agregar un comentario a tu _commit_, para esto ejecuta: `git commit -m "[traduccion]: <NOMBRE_DEL_ARCHIVO>"`, por ejemplo: `git commit -m "[traduccion]: Operadores básicos"`.

5. Finalmente es hora de subir tus cambios, para esto baste con ejecutar: `git push origin` o `git push origin <traduccion/NOMBRE_DEL_ARTICULO>`.

6. Con los cambios de tu repositorio ya actualizados en Github, ahora solo resta crear un PR.

<br />

## Creando un PR

Todos tus cambios ya están en tu repositorio, más no en el oficial. Para poder incluirlos, debes crear un PR, el cual revisará para su aprobación; esto con el fin comprobar que tiene los números de línea, acentos, y gramáticas correctos:

1. Ve a la página de _Pull Requests_ del repositorio y haz clic en el botón **New pull request**.

2.- Como tus cambios están en tu repositorio, que es un fork del oficial, debes hacer clic en el enlace que dice: `compare across forks`.

3.- En las opciones de la derecha, debes seleccionar tu repositorio —usualmente aparece como `<TU_NOMBRE_DE_USUARIO>/swift-book-es`—, y al lado debes seleccionar el nombre de la rama en la que están tus cambios.

4.- Ahora se mostrarán los cambios que realizaste en el código, si todo se ve bien, haz clic en `Create pull request`.

5.- Ahora se te pedirá un título para el PR y unos comentarios, agrega un título acorde con tu traducción o cambios, y un comentario explicando los mismos, y haz clic en `Create pull request`.

6.- Al terminar, agrega la etiqueta a `Ready for review` para saber que ya está listo para ser revisado. Para agregar una etiqueta, busca en las opciones de la mano derecha del PR, haz clic en `Labels` y busca esta etiqueta. Si aún no estuviera completamente traducida la página en la cual trabajas, podrías agregar la etiqueta `Work in progress` a tu PR. Si este es el caso, no olvides cambiar la etiqueta a `Ready for review` una vez hayas terminado con la traducción.

7.- Los mantenedores revisarán tus cambios, y te harán saber si hay correcciones o se puede pasar directo. En caso de sugerir correcciones, solo debes agregarlas, volver a hacer _commit_ de tus cambios y subir a tu repositorio, el PR se actualizará automáticamente.

<br />

## Recomendaciones al trabajar en las traducciones

Puedes encontrar más detalle sobre el estilo que deben llevar las traducciones en la [Guía de estilos y glosario](./STYLEGUIDE.md), pero aquí agregamos los detalles más importantes a tener en cuenta a la hora de traducir una página:

- Cuida tu ortografía, es importante que la traducción presente una buena ortografía tanto en acentos como en palabras bien escritas.
- No agregues o elimines líneas del contenido original; traduce siempre sobre las mismas líneas. Una forma fácil de comprobar esto es revisar que las primeras y últimas 10 líneas de la página tengan contenido igual o títulos, pero por supuesto traducidos.
- Siempre trata de mantener un español neutro (asumiendo que tal cosa existe 😅), evita el uso de palabras altamente coloquiales o regionales a tu región o país, esto será evaluado más adelante por los mantenedores pero es de gran ayuda para mantener la documentación con un lenguaje neutral.
- Si no conoces la traducción a una palabra puedes utilizar herramientas como [DeepL](https://DeepL.com/), pero no traduzcas una página completa con este ya que el significado se puede perder.
- Una buena forma de tener en cuenta aspectos como estos es crear una lista de checks en tu PR, por ejemplo:

- Traducción inicial
- Comprobar gramática y acentos
- Leer antes de enviar

<br />

## Quiero contribuir, pero no sé inglés

¡No hay problema! Como pudiste leer en la sección anterior, entre los aspectos vitales de las traducciones están la ortografía y la gramática, los mantenedores hacen su mejor esfuerzo por mantener limpios estos aspectos, pero es posible que algo se les escape. También puedes contribuir leyendo las traducciones y detectando errores, bien sean estos aspectos o quizás palabras mal escritas, modismos, contexto, o palabras que no sean de español neutro. Puedes ayudarnos a curar este contenido. Envían un PR con las correcciones.

<br />

## Extensión de MDX para VS Code

MDX permite el uso de JSX en Markdown, por lo que es recomendable instalar la extensión [MDX](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx) en VS Code para tener _highlighting_ de la sintaxis de archivos `.mdx`. De igual manera, te recomiendo instalar el tema [AlterNight](https://trsplms.github.io/alternight-showcase-website/) (_shameless plug_ 😅) el cual incluye un buen _highlighting_ de la sintaxis de archivos `.mdx`

<br />

### A traducir 🏃

Si has llegado hasta aquí, ¿qué esperas?, pide una página que quieras traducir en [este issue](https://github.com/trsplms/swift-book-es/issues/3) y empieza a contribuir con la comunidad de Swift ❤️

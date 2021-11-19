export default {
  projectLink: 'https://github.com/spaceinvadev/swift-book-es',
  docsRepositoryBase: 'https://github.com/spaceinvadev/swift-book-es/blob/main',
  titleSuffix: ' – The Swift Programming Language en Español',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  font: false,
  footer: true,
  footerText: `Copyright © ${new Date().getFullYear()} Apple Inc. Todos los derechos reservados.`,
  footerEditLink: `Editar esta página en GitHub`,
  logo: (
    <>
      <img src="/assets/images/swift-logo.png" />
      <span>The Swift Programming Language en Español</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="The Swift Programming Language en Español"
      />
      <meta
        name="og:title"
        content="The Swift Programming Language en Español"
      />
    </>
  )
}

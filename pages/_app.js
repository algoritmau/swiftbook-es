import Prism from 'prism-react-renderer/prism'
;(typeof global !== 'undefined' ? global : window).Prism = Prism

require('prismjs/components/prism-swift')

import 'nextra-theme-docs/style.css'
import '../styles/globals.css'

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}

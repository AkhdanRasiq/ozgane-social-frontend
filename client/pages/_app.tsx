import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../src/assets/scss/styles.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

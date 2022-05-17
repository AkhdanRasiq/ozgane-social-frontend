import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import '../assets/scss/styles.scss'
import env from '../static/env.json'
import { MoralisProvider } from "react-moralis"

import { Provider } from 'react-redux'
import store from '../app/store'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider serverUrl={env.YOUR_MORALIS_SERVER_URL} appId={env.YOUR_MORALIS_APP_ID}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </MoralisProvider>
  )
}

export default MyApp

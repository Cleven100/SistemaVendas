import type { AppProps } from 'next/app'
import 'bulma/css/bulma.css'
import './_app.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

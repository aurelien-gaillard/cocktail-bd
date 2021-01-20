import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import store from '../app/store'
import '../styles/globals.css'
import { AppProps } from 'next/dist/next-server/lib/router/router'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp

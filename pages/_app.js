import '../styles/globals.css'
import { StoreProvider } from '../utility/Store'

export default function App({ Component, pageProps }) {
  return (
  <StoreProvider>
    <Component {...pageProps} />
  </StoreProvider>
  );
}


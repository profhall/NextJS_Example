import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar/navBar.js'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  {/* <NavBar header={header}/> 
  Wnated to use navbar here but props can't pass
  */}
  <Component {...pageProps} />
  </>
  );
}

export default MyApp
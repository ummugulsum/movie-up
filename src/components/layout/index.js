import Head from 'next/head'
import Navigation from '../navigation'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title> MovieUP</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>Design by ukare</footer>
    </>
  )
}
export default Layout

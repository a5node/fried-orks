import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Fried Orks</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-6 text-green-500">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-green-500">
              Sell Fried Ork
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-green-500">
              My Orks
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-green-500">
              Fried By Me
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

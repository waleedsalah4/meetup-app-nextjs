import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href='/news/nextjs-is-great-framwork'>
            NextJs Is A Great Framwork
          </Link>
        </li>
        <li>
          <Link href=''>
            Something Else
          </Link>
        </li>
      </ul>
    </>
  )
}

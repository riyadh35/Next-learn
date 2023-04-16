import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();

  const handleclick = () => {

  }
  return (
    <div>
      <h1>This is Home page</h1>
      <Link href="/about">
        <h3>Go to about page</h3>
      </Link>

      <button onClick={handleclick}>Form Submitted</button>
    </div>
  )
}

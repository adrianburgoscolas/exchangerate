import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex bg-gradient-to-tr from-neutral-400 to-neutral-200 text-neutral-600 min-h-screen flex-col items-center justify-start py-64`}
    >
      <h1 className="text-4xl font-extrabold tracking-tight fixed left-0 top-0 flex w-full justify-center shadow-lg p-8">
        Exchange Rates
      </h1>
      <Card />
      <footer className="p-8 fixed bottom-0 left-0 flex h-48 w-full items-end justify-center">
        <a
          className="bg-neutral-300 rounded-xl shadow-xl flex place-items-center gap-2 p-8"
          href="https://adrianburgoscolas.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Adrian Burgos
          <Image
            src="/profile.jpg"
            alt="Adrian Avatar"
            className="rounded-full"
            width={40}
            height={40}
            priority
          />
        </a>
      </footer>
    </main>
  )
}

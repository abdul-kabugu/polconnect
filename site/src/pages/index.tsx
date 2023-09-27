import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import TopNav from '@/components/TopNav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` min-h-screen  ${inter.className}`}
    >
       <TopNav      />
       <div className='max-w-screen-xl mx-auto '>
     <Hero  />
     </div>
    </main>
  )
}

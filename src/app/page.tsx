import { Header } from '@/components/Header'
import Image from 'next/image'

import homeImage from '../../public/home_img.webp'

export default function Home() {
  return (
    <div className="font-raleway">
      <Header />
      <div className="relative flex min-h-min w-full items-center justify-center overflow-hidden bg-slate-500">
        <Image
          quality={100}
          src={homeImage}
          alt=""
          priority
          className="w-full"
        />
        <div className="absolute left-1/2 top-1/2 h-[250px] w-[600px] -translate-x-1/2 -translate-y-1/2 transform">
          <div className=" h-full w-full bg-neutral-100 p-8 opacity-50"></div>
          <p className="absolute left-1/2 top-1/2 z-30 w-full -translate-x-1/2 -translate-y-1/2 transform text-center font-tinos text-6xl">
            FALL & WINTER
          </p>
        </div>
      </div>
    </div>
  )
}

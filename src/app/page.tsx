import Image from 'next/image'

import homeImage from '../../public/home_img.webp'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="relative flex min-h-min w-full items-center justify-center overflow-hidden bg-slate-500">
        <Image
          quality={100}
          src={homeImage}
          alt=""
          priority
          className="w-full"
        />
        <div className="absolute left-1/2 top-1/2 h-[200px] w-[600px] -translate-x-1/2 -translate-y-1/2 transform">
          <div className=" h-full w-full bg-neutral-100 p-8 opacity-50"></div>
          <div className="absolute left-1/2 top-1/2 z-30 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col justify-center">
            <h1 className=" mb-4 text-center font-tinos text-6xl">
              FALL & WINTER
            </h1>
            <Link
              href=""
              className=" self-center bg-neutral-900 px-12 py-2 text-neutral-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

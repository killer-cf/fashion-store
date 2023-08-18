import Image from 'next/image'
import Link from 'next/link'

import homeImage from '../../public/home_img.webp'
import dressImage from '../../public/dress_image.webp'
import bagImage from '../../public/bag_image.webp'
import glassesImage from '../../public/glasses_image.webp'

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
            <h1 className=" mb-4 text-center font-tinos text-6xl tracking-[.1em]">
              FALL & WINTER
            </h1>
            <Link
              href=""
              className=" self-center bg-neutral-900 px-12 py-2 text-neutral-300 hover:bg-neutral-200 hover:text-neutral-900"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-neutral-300 p-3 text-center">
        <h3 className="text-sm tracking-[.25em] text-neutral-800">
          FREE SHIPPING WORLDWIDE
        </h3>
      </div>
      <section className="px-6 pt-16">
        <div className=" flex flex-col items-center">
          <h2 className="font-tinos text-4xl tracking-[.2em]">YEAR ROUND</h2>
          <div className="my-8 h-px w-10 bg-neutral-900" />
          <p className="mb-14 tracking-[.3em] text-neutral-800">
            Must Have Items
          </p>
        </div>
        <div className="m-auto grid max-w-screen-lg grid-flow-row grid-cols-1 justify-items-center gap-2  pb-10 md:grid-cols-3">
          <div className="group flex h-[368px] max-w-xs flex-col">
            <div className="h-[318px] overflow-hidden">
              <Image
                src={dressImage}
                alt=""
                quality={100}
                className="h-full duration-300 ease-out group-hover:scale-110"
              />
            </div>
            <button className="w-full flex-1 cursor-pointer bg-neutral-800 text-neutral-200">
              <p className="font-raleway text-sm group-hover:hidden">
                MIDI PLEATED SKIRT
              </p>
              <p className="hidden font-raleway text-sm group-hover:block">
                View Details
              </p>
            </button>
          </div>
          <div className="relative h-[318px]">
            <Image src={bagImage} alt="" />
            <button className="absolute top-16 w-full text-center font-tinos text-5xl tracking-[.25em] text-neutral-900 hover:opacity-50">
              SALE
            </button>
          </div>
          <div className="group flex h-[368px] max-w-xs flex-col">
            <div className="h-[318px] overflow-hidden">
              <Image
                src={glassesImage}
                alt=""
                quality={100}
                className="h-full duration-300 ease-out group-hover:scale-110"
              />
            </div>
            <button className="w-full flex-1 cursor-pointer bg-neutral-800 text-neutral-200">
              <p className="font-raleway text-sm group-hover:hidden">
                VINTAGE FRAME EYEGLASSES
              </p>
              <p className="hidden font-raleway text-sm group-hover:block">
                View Details
              </p>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

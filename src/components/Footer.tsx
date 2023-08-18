import Link from 'next/link'
import {
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
  TwitterLogo,
} from '../libs/phosphor-react'

export function Footer() {
  return (
    <footer className="w-full bg-neutral-800 py-6 font-raleway text-neutral-400">
      <div className="max-w-7xl space-y-10">
        <div className="flex flex-wrap">
          <div className="flex flex-1 flex-col items-center gap-5">
            <h3 className="text-xs">STAY CONNECTED</h3>
            <div className="flex gap-2">
              <Link href="" className="hover:text-neutral-100">
                <FacebookLogo weight="thin" size={24} />
              </Link>
              <Link href="" className="hover:text-neutral-100">
                <PinterestLogo weight="thin" size={24} />
              </Link>
              <Link href="" className="hover:text-neutral-100">
                <TwitterLogo weight="thin" size={24} />
              </Link>
              <Link href="" className="hover:text-neutral-100">
                <InstagramLogo weight="thin" size={24} />
              </Link>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center gap-5">
            <h3 className="text-xs">BE OUR FRIEND</h3>
            <form className="flex w-[85%] flex-col space-y-4">
              <input
                type="text"
                className="bg-transparent px-3 placeholder:text-xs"
                placeholder="Enter you email here"
              />
              <button
                type="submit"
                className=" w-full bg-neutral-300 py-1 font-raleway text-xs text-neutral-600 duration-200 ease-linear hover:bg-neutral-100"
              >
                Subscribe Now
              </button>
            </form>
          </div>
          <div className="flex flex-1 flex-col items-center gap-5">
            <h3 className="text-xs">NEED ASSISTANCE?</h3>
            <div className="flex flex-col text-sm">
              <span>(81) 9 92345678</span>
              <span>support@fashionstore.com</span>
            </div>
          </div>
        </div>
        <div className="w-full text-center text-xs">
          <p>© 2023 by FASHION STORE. Powered and secured by Kilder-cf</p>
        </div>
      </div>
    </footer>
  )
}

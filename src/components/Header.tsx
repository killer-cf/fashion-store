import { HandbagSimple } from '../libs/phosphor-react'
import { Avatar } from './Avatar'
import { SearchInput } from './SearchInput'

export function Header() {
  return (
    <header className="flex flex-col">
      <div className="flex justify-between bg-neutral-100 px-8 py-4">
        <SearchInput />
        <div className="relative flex items-center gap-3">
          <Avatar
            size="sm"
            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          />
          <HandbagSimple size={26} className="text-neutral-800" />
          <div className="absolute right-[9px] top-[6px] text-xs font-bold text-neutral-800">
            9
          </div>
        </div>
      </div>
      <div className="bg-neutral-600 px-8 py-8 text-xl font-semibold text-neutral-300">
        FASHION STORE
      </div>
    </header>
  )
}

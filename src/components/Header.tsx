import { HandbagSimple } from '../libs/phosphor-react'
import { Avatar } from './Avatar'
import { DropdownMenu } from './DropdownMenu'
import { NavItem } from './NavItem'
import { SearchInput } from './SearchInput'

export function Header() {
  return (
    <header className="flex flex-col">
      <div className="flex max-w-7xl justify-between bg-neutral-300 px-8 py-4">
        <SearchInput />
        <div className="relative flex items-center gap-3">
          <Avatar
            size="sm"
            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          />
          <DropdownMenu />
          <HandbagSimple size={26} className="ml-3 text-neutral-800" />
          <div className="absolute right-[9px] top-[6px] text-xs font-bold text-neutral-800">
            9
          </div>
        </div>
      </div>
      <div className="flex max-w-7xl justify-between bg-neutral-600 px-8 py-8">
        <h2 className=" text-xl font-semibold text-neutral-300">
          FASHION STORE
        </h2>
        <nav className="flex gap-8">
          <NavItem title="Home" />
          <NavItem title="Shop" />
          <NavItem title="Sale" />
          <NavItem title="Customer Care" />
        </nav>
      </div>
    </header>
  )
}

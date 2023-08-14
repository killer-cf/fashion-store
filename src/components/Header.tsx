import { SearchInput } from './SearchInput'

export function Header() {
  return (
    <header className="flex flex-col">
      <div className="flex justify-between bg-neutral-100 px-8 py-4">
        <SearchInput />
        <div>sacola</div>
      </div>
      <div className="bg-neutral-600 px-8 py-8 text-xl font-semibold text-neutral-300">
        FASHION STORE
      </div>
    </header>
  )
}

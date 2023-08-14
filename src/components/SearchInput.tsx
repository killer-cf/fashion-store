'use client'

import { MagnifyingGlass } from 'phosphor-react'

export function SearchInput() {
  return (
    <div className="flex items-center gap-3 placeholder:text-neutral-900">
      <MagnifyingGlass size={20} className="text-neutral-900" />
      <input
        placeholder="Search"
        className="border-b bg-transparent focus:border-neutral-900"
      />
    </div>
  )
}

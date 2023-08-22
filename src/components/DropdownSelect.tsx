'use client'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { CaretDown, CaretUp } from '../libs/phosphor-react'
import { useState } from 'react'
import { twJoin } from 'tailwind-merge'

export function DropdownSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Sort by')

  const options = [
    'Sort by',
    'Newest',
    'Price (low to high)',
    'Price (high to low)',
    'Name A-Z',
    'Name Z-A',
  ]

  return (
    <DropdownMenuRadix.Root onOpenChange={setIsOpen} open={isOpen}>
      <DropdownMenuRadix.Trigger asChild className="cursor-pointer">
        <div className="flex w-40 justify-between border border-neutral-700 px-2 py-1 text-neutral-600">
          <span className="text-sm">{selectedOption}</span>
          {isOpen ? <CaretUp size={18} /> : <CaretDown size={18} />}
        </div>
      </DropdownMenuRadix.Trigger>

      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content
          className="w-40 border border-neutral-400 bg-white py-2 font-raleway shadow-sm will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
          sideOffset={0}
          align="end"
        >
          {options.map((option) => (
            <DropdownMenuRadix.Item
              onClick={() => setSelectedOption(option)}
              key={option}
              className={twJoin(
                'group relative flex h-8 cursor-pointer select-none items-center px-4 text-sm leading-none text-neutral-900 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-neutral-300 data-[disabled]:text-neutral-600 data-[highlighted]:text-neutral-800',
                selectedOption === option && 'bg-neutral-200',
              )}
            >
              {option}
            </DropdownMenuRadix.Item>
          ))}
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}

'use client'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { CaretDown } from '../libs/phosphor-react'

export function DropdownMenu() {
  return (
    <DropdownMenuRadix.Root>
      <DropdownMenuRadix.Trigger asChild className="cursor-pointer">
        <CaretDown size={20} />
      </DropdownMenuRadix.Trigger>

      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content
          className="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade min-w-[170px] bg-white p-[5px] font-raleway shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
          sideOffset={10}
          align="end"
        >
          <DropdownMenuRadix.Item className="group relative flex h-10 cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-4  text-lg leading-none text-neutral-900 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-neutral-200 data-[disabled]:text-neutral-600 data-[highlighted]:text-neutral-800">
            My Orders
          </DropdownMenuRadix.Item>
          <DropdownMenuRadix.Item className="group relative flex h-10 cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-4 text-lg leading-none text-neutral-900 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-neutral-200 data-[disabled]:text-neutral-600 data-[highlighted]:text-neutral-800">
            My Addresses
          </DropdownMenuRadix.Item>
          <DropdownMenuRadix.Item className="group relative flex h-10 cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-4 text-lg leading-none text-neutral-900 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-neutral-200 data-[disabled]:text-neutral-600 data-[highlighted]:text-neutral-800">
            My Wallet
          </DropdownMenuRadix.Item>
          <DropdownMenuRadix.Item className="group relative flex h-10 cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-4 text-lg leading-none text-neutral-900 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-neutral-200 data-[disabled]:text-neutral-600 data-[highlighted]:text-neutral-800">
            My Account
          </DropdownMenuRadix.Item>

          <DropdownMenuRadix.Separator className="m-[5px] h-px bg-neutral-400" />

          <DropdownMenuRadix.Item className="group relative flex h-10 cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-4 text-lg leading-none text-neutral-900 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-red-200 data-[disabled]:text-neutral-600 data-[highlighted]:text-neutral-800">
            Log out
          </DropdownMenuRadix.Item>
          <DropdownMenuRadix.Arrow className="fill-white" />
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}

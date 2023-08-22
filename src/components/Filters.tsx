'use client'

import { useState } from 'react'
import { Minus, Plus } from '../libs/phosphor-react'
import * as Slider from '@radix-ui/react-slider'
import { twMerge } from 'tailwind-merge'

export function Filters() {
  const [minMaxPrice, setMinMaxPrice] = useState([25, 200])
  const [priceFilterIsOpen, setPriceFilterIsOpen] = useState(true)

  return (
    <div className="flex w-[200px] flex-col">
      <h2 className="mb-3 text-xl text-neutral-900">Filter by</h2>
      <div className="h-px w-full bg-neutral-300" />

      <div>
        <button
          onClick={() => setPriceFilterIsOpen(!priceFilterIsOpen)}
          className="mt-4 flex w-full items-center justify-between"
        >
          <span className="text-sm">Price</span>
          <div className="text-neutral-900">
            {priceFilterIsOpen ? <Minus size={13} /> : <Plus size={13} />}
          </div>
        </button>
        <div
          className={twMerge(
            'transition-max-height max-h-0 overflow-hidden duration-500',
            priceFilterIsOpen && 'max-h-32',
          )}
        >
          <Slider.Root
            value={minMaxPrice}
            onValueChange={setMinMaxPrice}
            className="relative mt-3 flex h-5 w-full touch-none select-none items-center"
            max={200}
            step={1}
          >
            <Slider.Track className="relative h-0.5 grow rounded-full bg-neutral-400">
              <Slider.Range className="absolute h-full rounded-full bg-neutral-700" />
            </Slider.Track>
            <Slider.Thumb
              className="block h-3 w-3 rounded-full bg-neutral-700 shadow-md focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Volume"
            />
            <Slider.Thumb
              className="block h-3 w-3 rounded-full bg-neutral-700 shadow-md focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Volume"
            />
          </Slider.Root>
          <div className="flex justify-between text-xs text-neutral-500">
            <span>R$ {minMaxPrice[0]},00</span>
            <span>R$ {minMaxPrice[1]},00</span>
          </div>
        </div>
      </div>

      <div className="mt-5 h-px w-full bg-neutral-300" />
    </div>
  )
}

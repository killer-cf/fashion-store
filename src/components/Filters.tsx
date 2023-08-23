'use client'

import { useState } from 'react'
import { Check, Minus, Plus } from '../libs/phosphor-react'
import * as Slider from '@radix-ui/react-slider'
import * as Checkbox from '@radix-ui/react-checkbox'
import { twMerge } from 'tailwind-merge'

export function Filters() {
  const [minMaxPrice, setMinMaxPrice] = useState([25, 200])
  const [priceFilterIsOpen, setPriceFilterIsOpen] = useState(true)
  const [colorFilterIsOpen, setColorFilterIsOpen] = useState(false)
  const [sizeFilterIsOpen, setSizeFilterIsOpen] = useState(false)

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

      <div>
        <button
          onClick={() => setColorFilterIsOpen(!colorFilterIsOpen)}
          className="mt-4 flex w-full items-center justify-between"
        >
          <span className="text-sm">Color</span>
          <div className="text-neutral-900">
            {colorFilterIsOpen ? <Minus size={13} /> : <Plus size={13} />}
          </div>
        </button>
        <div
          className={twMerge(
            'transition-max-height max-h-0 overflow-hidden duration-500',
            colorFilterIsOpen && 'max-h-32',
          )}
        >
          <div className="mt-3 flex flex-wrap gap-2">
            <div className="h-4 w-4 rounded-full border border-neutral-400 bg-red-600" />
            <div className="h-4 w-4 rounded-full border border-neutral-400 bg-green-600" />
            <div className="h-4 w-4 rounded-full border border-neutral-400 bg-violet-500" />
            <div className="h-4 w-4 rounded-full border border-neutral-400 bg-yellow-400" />
            <div className="h-4 w-4 rounded-full border border-neutral-400 bg-white" />
            <div className="h-4 w-4 rounded-full border border-neutral-400 bg-black" />
            <div className="h-4 w-4 rounded-full border border-neutral-400 bg-orange-500" />
            <div className="h-4 w-4 rounded-full border border-neutral-400 bg-blue-500" />
            <div className="h-4 w-4 rounded-full border border-neutral-400 bg-pink-500" />
          </div>
        </div>
      </div>

      <div className="mt-5 h-px w-full bg-neutral-300" />

      <div>
        <button
          onClick={() => setSizeFilterIsOpen(!sizeFilterIsOpen)}
          className="mt-4 flex w-full items-center justify-between"
        >
          <span className="text-sm">Size</span>
          <div className="text-neutral-900">
            {sizeFilterIsOpen ? <Minus size={13} /> : <Plus size={13} />}
          </div>
        </button>
        <div
          className={twMerge(
            'transition-max-height max-h-0 overflow-hidden duration-500',
            sizeFilterIsOpen && 'max-h-32',
          )}
        >
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Checkbox.Root
                className="flex h-4 w-4 appearance-none items-center justify-center rounded-[2px] border border-neutral-900 bg-white shadow-black outline-none"
                defaultChecked
                id="small"
              >
                <Checkbox.Indicator className="text-neutral-700">
                  <Check size={14} />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <span className="text-xs text-neutral-800">Small</span>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox.Root
                className="flex h-4 w-4 appearance-none items-center justify-center rounded-[2px] border border-neutral-900 bg-white shadow-black outline-none"
                defaultChecked
                id="medium"
              >
                <Checkbox.Indicator className="text-neutral-700">
                  <Check size={14} />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <span className="text-xs text-neutral-800">Medium</span>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox.Root
                className="flex h-4 w-4 appearance-none items-center justify-center rounded-[2px] border border-neutral-900 bg-white shadow-black outline-none"
                defaultChecked
                id="large"
              >
                <Checkbox.Indicator className="text-neutral-700">
                  <Check size={14} />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <span className="text-xs text-neutral-800">Large</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 h-px w-full bg-neutral-300" />
    </div>
  )
}

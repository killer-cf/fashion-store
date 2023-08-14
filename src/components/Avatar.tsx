'use client'

import * as AvatarRadix from '@radix-ui/react-avatar'
import { tv, VariantProps } from 'tailwind-variants'

const avatar = tv({
  base: 'inline-flex select-none items-center justify-center overflow-hidden rounded-full bg-black align-middle',
  variants: {
    size: {
      sm: 'h-[22px] w-[22px]',
      xl: 'h-[90px] w-[90px]',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export type AvatarProps = VariantProps<typeof avatar> & {
  src: string
}

export function Avatar({ size, src }: AvatarProps) {
  return (
    <AvatarRadix.Root className={avatar({ size })}>
      <AvatarRadix.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={src}
        alt="user image"
      />
      <AvatarRadix.Fallback
        className="leading-1 text-md flex h-full w-full items-center justify-center bg-white font-medium text-neutral-900"
        delayMs={600}
      >
        CT
      </AvatarRadix.Fallback>
    </AvatarRadix.Root>
  )
}

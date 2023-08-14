import { Tinos, Raleway } from 'next/font/google'

export const tinos = Tinos({
  weight: ['400', '700'],
  subsets: ['cyrillic'],
  variable: '--font-tinos',
})

export const raleway = Raleway({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-raleway',
})

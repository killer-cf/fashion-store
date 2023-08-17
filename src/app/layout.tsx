import './globals.css'
import { raleway, tinos } from './fonts'
import { Header } from '@/components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${tinos.variable} font-raleway`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

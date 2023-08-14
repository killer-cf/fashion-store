import './globals.css'
import { raleway, tinos } from './fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${tinos.variable}`}>
        {children}
      </body>
    </html>
  )
}

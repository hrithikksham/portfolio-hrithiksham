import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Hrithik Sham | Portfolio ',
  description: 'Engineer. Designer. Builder. A cinematic portfolio experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} bg-cinema-black text-cinema-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

import localFont from 'next/font/local'
import '@/assets/sass/global.scss'
import { config } from '@fortawesome/fontawesome-svg-core';
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

config.autoAddCss = false; 

//Page Title with Description
export const metadata = {
  title: 'Toukir Rahman',
  description: 'Toukir Rahman - Portfolio',
}

//Include-Local-Fonts (Mont)
const Mont = localFont({
  src: [
    {
      path: '../assets/fonts/Mont-100.otf',
      weight: '100'
    },
    {
      path: '../assets/fonts/Mont-200.otf',
      weight: '200'
    },
    {
      path: '../assets/fonts/Mont-300.otf',
      weight: '300'
    },
    {
      path: '../assets/fonts/Mont-400.otf',
      weight: '400'
    },
    {
      path: '../assets/fonts/Mont-500.otf',
      weight: '500'
    },
    {
      path: '../assets/fonts/Mont-600.otf',
      weight: '600'
    },
    {
      path: '../assets/fonts/Mont-700.otf',
      weight: '700'
    },
    {
      path: '../assets/fonts/Mont-800.otf',
      weight: '800'
    }
  ]
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Mont.className} bg-[#f7f0e7] tracking-tight min-h-[100vh]`}>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}

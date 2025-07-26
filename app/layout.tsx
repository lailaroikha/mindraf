import './css/style.css';
import { Inter } from 'next/font/google';
import Header from '@/components/ui/header';
import ThemeProviderContext  from './stores/theme';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Mindraft',
  description: 'Mindraft',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" >
      
      <body className={`${inter.variable} font-inter antialiased tracking-tight`}>
      
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        <ThemeProviderContext>
          <Header />
          {children}
        </ThemeProviderContext>
        </div>
       
      </body>
      
    </html>
  )
}

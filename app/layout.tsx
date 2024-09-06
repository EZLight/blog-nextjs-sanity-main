import Footer from '../components/Footer'
import { HeaderDT } from '../components/Header'
import Providers from '../components/Providers'
import '../styles/w3css.css'

export const metadata = {
  title: 'AB Studios',
  description: 'A Christian Fictional Multimedia Company',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple.png?v=4'],
    shortcut: ['/apple.png']
  }
} 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html  lang="en">
      <body  style={{minHeight:"100vh"}}>
        <Providers>
          <HeaderDT type={undefined}/> 

          {children}  
          
          </Providers>
          </body>
<Footer settings="w3-center w3-white w3-border w3-border-black" />
    </html>
  )
}

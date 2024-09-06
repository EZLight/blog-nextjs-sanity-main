import React from 'react'
import * as Navigation from '../styles/styles'
import Link from 'next/link'
import NavLinks from '../data/data'
import NavLink2 from '../data/data2'
import Image from 'next/image'
import SignInButton from './SignInButton'
import { AbsLogo } from '../styles/images'
import { width } from './OpenGraphImage'
import { ABSDesktopBanner} from '../styles/images'


export function Banner (){
    return(<section className='w3-black'>
    <Image src={ABSDesktopBanner} className='w3-image w3-hide-small w3-border-top w3-border-black' alt="ABSBanner" width="2560" height="250" />
    <h4 className='w3-center w3-hide-small w3-hide-medium w3-black'>#CreativityInTheNameOfChrist</h4>
    </section>)
    }

export function HeaderDT (props: { type: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }){


    return (<header className={Navigation.NavBarDT} >

    <Image src={AbsLogo} className='w3-image w3-hide-large w3-hide-medium' alt="ABSBanner" width="250" height="50" />

{/* <SignInButton/> */}
        {NavLinks.map((nlinks) => {
    return (<button key={nlinks.id} className={Navigation.NavButtonDT} style={{width: '10%'}}>
        <Link  href={nlinks.href}>{nlinks.link}</Link>
    </button>
 )})} 
 {NavLinks.map((nlinks) => {
    return (<button key={nlinks.id} className={Navigation.NavButtonTab} style={{width: 'auto'}}>
        <Link  href={nlinks.href}>{nlinks.link}</Link>
    </button>
 )})} 
  {NavLink2.map((nlinks) => {
    return (<button key={nlinks.id} className={Navigation.NavButtonMobile} style={{width: '22%'}}>
        <Link  href={nlinks.href}>{nlinks.link}</Link>
    </button>
 )})} 
         <h3 className='w3-bar-item w3-hide-small w3-hide-medium w3-center'>AntiBlasphemy Studios</h3>
         <h3 className='w3-bar-item w3-hide-small w3-hide-large w3-large w3-center'>AntiBlasphemy Studios</h3>
<Banner/>


{props.type}
</header>)
}

export default [HeaderDT]
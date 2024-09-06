// import React from 'react'
// import { groq } from "next-sanity"
// import {AbsLogo} from '../../styles/images'
// import { PortableText } from "@portabletext/react"
// import Footer from "../Footer"
// import * as Navigation from '../../styles/styles'
// import Accordion from '../inDevelopment/Accordion'
// import {client} from '../../lib/sanity.client'
// import PageModal from '../PageModal'

// const query = groq`
// *[_type=='page'][0]
// {
//     ...,
//     coverImage,
// }`

// export default async function Mobile(props) {
 
//   const page: Page = await client.fetch(query)
 
//   return (
//     <div className="w3-content w3-panel w3-mobile  w3-hide-medium w3-hide-large" >   <section  >           
//                     <button className={Navigation.RegisterButton}>Get Started</button>
//     <button className={Navigation.MemberButton}>Sign In</button>

// </section>

// <section className='w3-circle' style={{ 
//       backgroundImage: `url(${AbsLogo})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover', height:'250px' 
//     }} >
// <Accordion demo="News" accName="News" classType='w3-tiny w3-border w3-border-black w3-block w3-center w3-amber'>

// </Accordion>
// <PageModal btnName="About" btnSetting="w3-tiny w3-border w3-border-black w3-block w3-center w3-amber"><PortableText value={page.content} /></PageModal>

// </section>

// <Footer settings="w3-tiny w3-center w3-black" />
 
//  </div>
//   )
// }

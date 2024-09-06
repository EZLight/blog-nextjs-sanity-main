// 'use client'
// import {FunctionComponent, useState} from 'react'
// import { groq } from "next-sanity"
// import {client} from '../../lib/sanity.client'
// import { PortableText } from "@portabletext/react"
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
// import Center from "../../components/Center"
// import { height } from "../../components/OpenGraphImage"

// // import Image from "next/image"
// // import urlFor from "../../lib/urlFor"

//    const query = groq`
//     *[_type=='page'][3]
//     {
//         ...,
//         coverImage,
//     }`

// const Amount: FunctionComponent<{
//     amount: Number;
//     value: Number;
//     setAmount: Function;
// }> = ({ amount, setAmount, value}) => {
//     return (
//             <span className={`w3-amber ${amount === value ? "w3-black": ""}`}
//             onClick={() => setAmount(value)}
//             >
//                 {`${value}`}$
//             </span>
//     )
// }

// export default async function Page(){

//     const [amount, setAmount] = useState(150)
 

// const page: Page = await client.fetch(query)

//    return (

//    <article className="w3-hide-small w3-center">
//     <section>
//         <div className="w3-amber w3-container w3-center">{page.title}</div>
//     </section>
//     <section className="w3-margin w3-center">
//     {/* <Image className="w3-hide-small" width={700} height={350} src={urlFor(page.coverImage).url()} alt={post.author.name} /> */}
//     {page.excerpt}
//         <div className="w3-padding w3-margin"><PortableText value={page.content}></PortableText></div></section>    
// <Center>
// ---------------------------------------------------------


//     <div className="w3-bar">
//         <Amount value={150} setAmount={setAmount} amount={amount}/>
//         <Amount value={250} setAmount={setAmount} amount={amount}/>
//         <Amount value={400} setAmount={setAmount} amount={amount}/>
//     </div>
//     <PayPalScriptProvider
//         options={process.env.PAYPAL_CLIENT_ID}
// >
//     <PayPalButtons style={{height:25}}
    
//     createOrder={(data, actions) => {
//         return actions.order.create({
//             purchase_units: [
//                 {
//                     amount:amount,
                    
//                 },
            
//                 ],
//         })
//     }}
//     onApprove={(data, actions) => {
//         return actions.order?.capture().then(function (details) {
//             alert(
//                 "Transaction completed by " + details.payer.name.given_name
//         )
//     })
// }}
//     />
// </PayPalScriptProvider></Center>
// </article> 
// )
// }


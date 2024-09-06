'use client'
import { groq } from "next-sanity"
import {client} from '../../lib/sanity.client'
import { PortableText } from "@portabletext/react"
import { Center, Square, Circle } from '@chakra-ui/react'
import Image from "next/image"
import urlFor from "../../lib/urlFor"
import { HeaderTitleBar } from "../../styles/styles"
import React from "react"

export const revalidate = 30

   const query = groq`
    *[_type=='page'][3]
    {
        ...,
        coverImage,
    }`

 
const query2 = groq`
*[_type=='staff'][0]
{
    ...,
    picture,
}`
    
export default async function Page(){

 const staff = await client.fetch(query2)

const page: Page = await client.fetch(query)

   return (

   <article className="w3-hide-small w3-center ">
    <section>
        <div className={HeaderTitleBar}>{page.title}</div>
    </section>
    <section className="w3-margin w3-center w3-container">
    {/* <Image className="w3-hide-small" width={700} height={350} src={urlFor(page.coverImage).url()} alt={post.author.name} /> */}
        <PortableText value={page.content}></PortableText>
        
        
<Center className="w3-card-4 w3-amber w3-bar">
      
     <Image className="w3-hide-small  w3-circle w3-border w3-border-black" width={225} height={225} src={urlFor(staff.picture).url()} alt={staff.name} /> 
        <div className="w3-bar-item w3-ul w3-white w3-right w3-container">
            <li>Name: {staff.name}</li> 
            <li>Alias: {staff.alias}</li>
            <li>Position: {staff.position}</li>
            <li>Portfolio: <PortableText value={staff.content}></PortableText></li>
        </div> 
</Center> 

        </section>
</article> 
)
}


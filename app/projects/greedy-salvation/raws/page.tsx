'use client'
import { groq } from "next-sanity"
import {client} from '../../../../lib/sanity.client'
import { PortableText } from "@portabletext/react"
import GreedySalvationMenu from "../../../../components/GreedySalvationMenu"
import Image from "next/image"
import urlFor from "../../../../lib/urlFor"
import { HeaderTitleBar } from "../../../../styles/styles"

// import Image from "next/image"
// import urlFor from "../../lib/urlFor"

export const revalidate = 30

   const query = groq`
    *[_type=='page'][6]
    {
        ...,
        coverImage,
    }`
    
export default async function Page(){

 

const page: Page = await client.fetch(query)

   return (

   <article className="w3-hide-small w3-center">
    <section>
        <div className={HeaderTitleBar}>{page.title}</div>
        <GreedySalvationMenu/>
    </section>
    <section className="w3-margin w3-center">
    {/* <Image className="w3-hide-small" width={700} height={350} src={urlFor(page.coverImage).url()} alt={page.title} /> */}
    {page.excerpt}
        <PortableText value={page.content}></PortableText></section>
</article> 
)
}


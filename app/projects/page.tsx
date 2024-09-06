import { groq } from "next-sanity"
import {client} from '../../lib/sanity.client'
import { PortableText } from "@portabletext/react"
import { GreedySalvationBanner, ZINBanner } from "../../styles/images"
import Image from "next/image"
import { HeaderTitleBar } from "../../styles/styles"
import Link from "next/link"
// import urlFor from "../../lib/urlFor"

export const revalidate = 30

   const query = groq`
    *[_type=='page'][2]
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
    </section>
    <section className="w3-margin w3-center">
    {page.excerpt}
        <PortableText value={page.content}></PortableText></section> 
    
    
    <Link href={"https://www.antiblasphemy.studio/projects/greedy-salvation"} ><Image src={GreedySalvationBanner} className='w3-image w3-opacity w3-hover-opacity-off' alt="GreedySalvation" width="500" height="250" />
</Link>
<Link href={"https://www.antiblasphemy.studio/projects/zin"} ><Image src={ZINBanner} className='w3-image w3-opacity w3-hover-opacity-off' alt="ZIN" width="500" height="200" /></Link>
</article> 
)
}


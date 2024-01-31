'use client'
import { groq } from "next-sanity"
import {client} from '../../../../../lib/sanity.client'
import { PortableText } from "@portabletext/react"
import GreedySalvationMenu from "../../../../../components/GreedySalvationMenu"
import { HeaderTitleBar } from "../../../../../styles/styles"



   const query = groq`
    *[_type=='page'][7]
    {
        ...,
    }`
    
export default async function Page(){

 

const page: Page = await client.fetch(query)

   return (

<article className="w3-hide-large w3-hide-medium w3-center">
    <h4 className={HeaderTitleBar}>Greedy Salvation - Glossary</h4>
    <GreedySalvationMenu/>

    <div className="w3-container w3-left-align"><PortableText value={page.content}></PortableText>
    </div>
</article> 
)
}


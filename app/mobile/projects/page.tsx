'use client'
import { groq } from "next-sanity"
import {client} from '../../../lib/sanity.client'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react"
import { HeaderTitleBar, HeaderTitleBarMobile } from "../../../styles/styles"
import { PortableText } from "@portabletext/react"
import PageModal from "../../../components/PageModal"
import { GreedySalvationBanner, ZINBanner } from "../../../styles/images"
import Link from "next/link"
import Image from "next/image"

export const revalidate = 30

 const query = groq`
*[_type=='page'][2]
{
    ...,
}`


    
export default async function Page(){

  const page: Page = await client.fetch(query)


   return (

<article className="w3-hide-large w3-hide-medium">
    <h4 className={HeaderTitleBarMobile}>{page.title}</h4>
    <PortableText value={page.content} ></PortableText>
    <Link href={"https://www.antiblasphemy.studio/mobile/projects/greedy-salvation"} ><Image src={GreedySalvationBanner} className='w3-image w3-hide-large w3-hide-medium' alt="GreedySalvation" width="300" height="50" />
</Link>
<Link href={"https://www.antiblasphemy.studio/mobile/projects/zin"} ><Image src={ZINBanner} className='w3-image w3-hide-large w3-hide-medium' alt="ZIN" width="300" height="50" /></Link>

</article> 
)
}


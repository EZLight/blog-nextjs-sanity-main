'use client'
import { groq } from "next-sanity"
import {client} from '../../../lib/sanity.client'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react"
import { HeaderTitleBar, HeaderTitleBarMobile } from "../../../styles/styles"
import { PortableText } from "@portabletext/react"
import PageModal from "../../../components/PageModal"
import ContentTab from "../../../components/TabContainer"

export const revalidate = 30

 const query = groq`
*[_type=='page']
{
    ...,
}`


    
export default async function Page(){

  const page: Page = await client.fetch(query)


   return (

<article className="w3-center">
    <h4 className={HeaderTitleBarMobile}>{page[1].title}</h4>
    <PortableText value={page[1].content} ></PortableText>
</article> 
)
}


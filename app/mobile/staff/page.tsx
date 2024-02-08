'use client'
import { groq } from "next-sanity"
import {client} from '../../../lib/sanity.client'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react"
import { HeaderTitleBar, HeaderTitleBarMobile } from "../../../styles/styles"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import ContentTab from "../../../components/TabContainer"
import { Center, Square, Circle } from '@chakra-ui/react'
import urlFor from "../../../lib/urlFor"


 const query = groq`
*[_type=='page']
{
    ...,
}`

const query2 = groq`
*[_type=='staff']
{
    ...,
    picture,
}`

    
export default async function Page(){

  const page: Page = await client.fetch(query)
  const staff: Page = await client.fetch(query2)


   return (

<article className=" w3-center">
    <h4 className={HeaderTitleBarMobile}>{page[3].title}</h4>
    <PortableText value={page[3].content} ></PortableText>

    <Center className="w3-card-4 w3-amber w3-bar">
  {staff.map((staff: { id: Key | null | undefined; picture: any; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined; alias: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; position: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; content: any }) => {
  
  return (<div>
      
     <Image key={staff.id} className="w3-circle w3-border w3-border-black" width={125} height={125} src={urlFor(staff.picture).url()} alt={staff.name} /> 
       
        
       
        <div className="w3-bar-item w3-ul w3-white w3-right w3-small w3-container">
            <li>Name: {staff.name}</li> 
            <li>Alias: {staff.alias}</li>
            <li>Position: {staff.position}</li>
            <li>Portfolio: <PortableText value={staff.content}></PortableText></li>
        </div> 
        </div>
         )})}
</Center>
</article> 
)
}


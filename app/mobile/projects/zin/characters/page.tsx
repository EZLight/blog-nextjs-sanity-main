'use client'
import { groq } from "next-sanity"
import {client} from '../../../../../lib/sanity.client'
import Image from "next/image"
import urlFor from "../../../../../lib/urlFor"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import ZinMenu from "../../../../../components/ZinMenu"
import { Key } from "react"
import { HeaderTitleBar } from "../../../../../styles/styles"

export const revalidate = 30


   const query = groq`
    *[_type=='character' && series=='ZIN']
    {
        ...,
        avi,
        coverImage,
    }`
    
export default async function Page(){

 

const character: Character = await client.fetch(query)

   return (

<article className="w3-hide-large w3-hide-medium w3-center">
    <h4 className={HeaderTitleBar}>ZIN - Characters</h4>
    <ZinMenu/>
       <div className="w3-bar">
         <Tabs variant='enclosed'>
  <TabList>
   {character.map((chrInfo: { avi: any; title: string }, index: Key | null | undefined) => (
          <Tab key={index} className="w3-amber"> <Image className="w3-circle w3-image w3-border w3-border-black" width={100} height={200} src={urlFor(chrInfo.avi).url()} alt={chrInfo.title} /></Tab>
          ))}
  </TabList>
  <TabPanels>
  {character.map((chrInfo: { coverImage: any; title: string }, index: Key | null | undefined) => (
    <TabPanel key={index}>
           
           <Image className="w3-image" width={1200} height={1000} src={urlFor(chrInfo.coverImage).url()} alt={chrInfo.title} />
           
    </TabPanel>
     ))}
  </TabPanels>
</Tabs>
       
        </div>
        
</article> 
)
}


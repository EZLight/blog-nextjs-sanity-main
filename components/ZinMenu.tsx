import React from 'react'
import ZinLinks from "../data/ZinLinks";
import Link from "next/link";
import ZinLinksMobile from '../data/ZinLinksMobile';

function ZinMenu() {
  return (
 <>           {ZinLinks.map((gslink) => {
            return (
  <Link key={gslink.id} href={gslink.href}><button className="w3-button w3-hide-small w3-amber w3-border w3-border-black ">{gslink.link}</button></Link>
         
            )})}    

{ZinLinksMobile.map((gslink) => {
            return (
  <Link key={gslink.id} href={gslink.href}><button className="w3-button w3-hide-large w3-hide-medium w3-amber w3-border w3-border-black ">{gslink.link}</button></Link>
         
            )})}  
      
      </>
)

}

export default ZinMenu
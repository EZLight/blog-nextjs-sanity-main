import React from 'react'
import GreedySalvationLinks from "../data/Greedy-Salvation-Links";
import Link from "next/link";
import GreedySalvationLinksMobile from '../data/Greedy-Salvation-Links-mobile';

function GreedySalvationMenu() {
  return (
 <>           {GreedySalvationLinks.map((gslink) => {
            return (
  <Link key={gslink.id} href={gslink.href}><button className="w3-button w3-hide-small w3-amber w3-border w3-border-black ">{gslink.link}</button></Link>
         
            )})}    

{GreedySalvationLinksMobile.map((gslink) => {
            return (
  <Link key={gslink.id} href={gslink.href}><button className="w3-button w3-hide-large w3-hide-medium w3-amber w3-border w3-border-black ">{gslink.link}</button></Link>
         
            )})}  
      
      </>
)

}

export default GreedySalvationMenu
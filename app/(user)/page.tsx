import React from "react"
import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"
import BlogBox from "../../components/BlogBox"
import PortablePost from "../../components/Modal"
import Link from "next/link"
import CategoryMenu from "../../components/categoryMenu"

export const revalidate = 30

 const query = groq`
  *[_type=='post'][0...10]{
    ...,
    coverImage,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

const query2 = groq`
  *[_type=='post'][11...21]{
    ...,
    coverImage,
    author->,
    categories[]->
  } | order(_createdAt desc)
`


export default async function Page() {



const posts = await client.fetch(query)
const posts2 = await client.fetch(query2)

return<section>
  <CategoryMenu /> 
  <article style={{marginRight:"10%"}}>
     <BlogBox posts={posts}  />
  <BlogBox posts={posts2}  /> </article>
  <PortablePost posts={posts} ></PortablePost>  
  <Link className="w3-center w3-button w3-amber" href={'/page2'} ><p>Next Page</p></Link>

</section>}



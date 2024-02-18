import React from "react"
import { groq } from "next-sanity"
import { client } from "../../../lib/sanity.client"
import BlogBox from "../../../components/BlogBox"
import { Banner } from "../../../components/Themes/Desktop"
import PortablePost from "../../../components/Modal"
import Link from "next/link"

 const query = groq`
  *[_type=='post'][21...30]{
    ...,
    coverImage,
    author->,
    categories[]->
  } | order(_createdAt desc)
`



export default async function Page() {
const posts = await client.fetch(query)

return<section>
  <Banner />
  <BlogBox posts={posts}  />
  <PortablePost posts={posts} ></PortablePost>
  <Link className="w3-center" href={'https://www.antiblasphemy.studio/'} ><p>Prev Page</p></Link>
</section>

}



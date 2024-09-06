import React from "react"
import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import BlogBox from "../../../../components/BlogBox"
import PortablePost from "../../../../components/Modal"
import Link from "next/link"
import CategoryMenu from "../../../../components/categoryMenu"
import { HeaderTitleBar } from "../../../../styles/styles"

export const revalidate = 30


 const query = groq`
  *[_type=='post' && references(*[_type=="category" && title == "ABS Ministry"]._id)]{
    ...,
    coverImage,
    author->,
    categories[]->
  } | order(_createdAt desc)
`



export default async function Page() {
const posts = await client.fetch(query)

return<section>
  <h4 className={HeaderTitleBar}>{posts[0].categories[0].title}</h4>
 <CategoryMenu />
  <article style={{marginRight:"10%"}}>
     <BlogBox posts={posts}  /> </article>
  <PortablePost posts={posts} ></PortablePost>
  <Link className="w3-center w3-button w3-amber" href={'/'} ><p>Home</p></Link>
</section>

}



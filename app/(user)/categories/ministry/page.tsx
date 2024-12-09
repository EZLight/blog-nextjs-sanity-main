import React from "react"
import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import Link from "next/link"
import CategoryMenu from "../../../../components/categoryMenu"
import ArticleBox from "../../../../components/WebElements/ArticleBox"
export const revalidate = 30

const query = groq`
  *[_type=='post' && references(*[_type=="category" && title == "Ministry"]._id)]{
    ...,
    coverImage,
    author->,
    categories[]->
  } | order(_createdAt desc)
`



export default async function Page() {
const posts = await client.fetch(query)

return<section>
  <h4 className="w3-center w3-text-amber w3-border-bottom w3-border-top w3-border-amber">{posts[0].categories[0].title}</h4>
 <CategoryMenu />

       <ArticleBox posts={posts} ></ArticleBox>
  <Link className="w3-center w3-button w3-amber w3-hover-black w3-hover-text-amber w3-border w3-border-black w3-hover-border-amber" href={'/'} ><p>Home</p></Link>
</section>

}



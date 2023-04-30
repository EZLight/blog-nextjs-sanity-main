import { previewData } from "next/headers"
import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"
import { PreviewSuspense } from "next-sanity/preview"
import { LoadingIcon } from "../../styles/images"
import Image from "next/image"
import PreviewBlogList from '../../components/PreviewBlogList'
import BlogBox from "../../components/BlogBox"
import { Banner } from "../../components/Themes/Desktop"
import PortablePost from "../../components/Modal"

export const query = groq`
  *[_type=='post']{
    ...,
    coverImage,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

export default async function Page() {

if (previewData()){
  return (<PreviewSuspense fallback={(
    <div role="status" className="w3-spin">
      <Image src={LoadingIcon} alt="loading"/>
    </div>
  )}>
    <PreviewBlogList query={""}/>
    </PreviewSuspense>
    )
}

const posts = await client.fetch(query)
return<section>
  <Banner />
  <BlogBox posts={posts}  />
</section>}



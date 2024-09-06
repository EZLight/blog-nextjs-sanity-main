import { useState, useEffect } from "react"
import Image from "next/image"
import urlFor from "../lib/urlFor"
import ClientSideRoute from "./ClientSideRoute"

type Props = {
  posts: Post[]
}

function BlogBox({posts}: Props) {

  return (
    <div className="w3-mobile w3-row w3-cell" style={{margin:"auto", width: '50%'}}>
 {posts.map((post) => {
  return (<>
  <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
  <article  className='w3-container w3-card w3-margin w3-padding w3-col m5 w3-border w3-border-black w3-amber w3-button w3-round-xlarge'>
     <div className="w3-border w3-hide-small w3-white w3-panel w3-border-black"><Image width={90} height={80} src={urlFor(post.coverImage).url()} alt={post.author.name} /></div>
     <div className='w3-black w3-container w3-padding w3-tiny' style={{overflow: 'hidden'}}>{post.title}</div>
     <div className='w3-grey w3-container w3-padding w3-tiny'>{new Date(post._createdAt).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
     })}
     </div>
 </article>
 </ClientSideRoute>
 </>
  )
 })}
   </div>
  )
}




export default BlogBox
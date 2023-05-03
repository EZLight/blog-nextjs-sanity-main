'use client'
import React from "react"
import { PortableText } from "@portabletext/react"
import Modal from 'react-modal';
import Image from "next/image"
import urlFor from "../lib/urlFor"


type Props = {
  posts: Post[]
}


  function PortablePost({posts}: Props){

    // Modal.setAppElement('#root')

    

  return (
    <div className="w3-container w3-hide-large">
         
      
   {posts.map((post) => {
const [modalIsOpen, setIsOpen] = React.useState(false)

function openModal(){
  setIsOpen(true)
}


function closeModal(){ setIsOpen(false)}




    return (  
        
    <div key={post._id}>
<button id="root" onClick={openModal}
className="w3-button w3-margin w3-black w3-opacity-min w3-tiny">{new Date(post._createdAt).toLocaleDateString("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
})} | {post.title}</button>
  <Modal
   id={`${post._id}`}
   isOpen={modalIsOpen}
   onRequestClose={closeModal}
   contentLabel={`${post.title}`}>
    <div className="w3-modal-content">
      <div className="w3-container w3-tiny">
        <span onClick={closeModal} className="w3-button w3-display-topright  w3-red">&times;</span>
        <article>
    <section>
        <div className="w3-amber w3-container w3-center">{post.title}</div>
        <div className="w3-card-4 w3-cell w3-border w3-border-black w3-amber">
        <div className="w3-white"><Image className="w3-circle w3-border w3-border-black" width={90} height={80} src={urlFor(post.author.picture).url()} alt={post.author.name} /></div>
        <div className="w3-black">By: {post.author.name}</div>
        <div className="w3-grey">{new Date(post._createdAt).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })} 
     </div>
        </div>
    </section>
    <section className="w3-margin w3-center">
    <Image className="w3-hide-small" width={700} height={350} src={urlFor(post.coverImage).url()} alt={post.author.name} />
        <PortableText value={post.content}></PortableText></section>
    </article> 
      </div>
    </div>
  </Modal>
  </div>)
})}
  </div>
 )
}


export default PortablePost
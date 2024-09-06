import Image from "next/image"
import urlFor from "../lib/urlFor"
import { width } from "./OpenGraphImage"

type Props = {
    posts: Post[]
}


function BlogList({posts}: Props){ 
        return (
        <div>
        {posts.map(post =>  (
           
            <div key={post._id}>
                <div>
               
                <Image className="w3-image" width={400} height={250} src={urlFor(post.coverImage).url()} alt={post.author.name} /> 
               {post.title}
               {post._createdAt}
                </div>
            </div>
    ))}
    </div>
    )
}

export default BlogList
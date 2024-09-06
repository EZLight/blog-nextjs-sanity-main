'use client'
import { groq } from "next-sanity"
import { client } from '../../../../lib/sanity.client'
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { HeaderTitleBar } from "../../../../styles/styles"
import { useState, useEffect } from "react"
import ImageUrlBuilder from "@sanity/image-url"
import YouTubeEmbed from "../../../../components/YouTubeEmbed"

export const revalidate = 30

type Props = {
    params: {
        slug: string
    }
}

type Comment = {
    _id: string;
    _createdAt: string;
    name: string;
    commentPost: string;
}

type Post = {
    _id: string;
    title: string;
    author: {
        name: string;
        picture: string;
    };
    _createdAt: string;
    categories: Array<{
        _id: string;
        title: string;
    }>;
    coverImage: string;
    content: any;
}





function urlFor(source: any) {
    return ImageUrlBuilder(client).image(source)
}




function Post({ params: { slug } }: Props) {
    const [post, setPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [commentPost, setCommentPost] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

  
    
    const components = {
      types: {
        video: YouTubeEmbed,
      },
    };
    
    const MyPortableTextComponent = ({ value }: { value: any }) => {
      return <PortableText value={value} components={components} />;
    };
    
    // Remove the default export from here
   
    useEffect(() => {
        
    
        const fetchPostAndComments = async () => { 
            
           
            const postQuery = groq`
            *[_type=='post' && slug.current == $slug][0]
            {
                ...,
                author->,
                picture,
                mainImage,
                categories[]->,
                content: content[]{
                    ...,
                    _type == 'image' => {
                    "url": asset->url,
                    "alt": alt
                    },
                    _type == 'video' => {
                    "url": url,
                    "caption": caption
                    }
                }
            }`


            const fetchedPost: Post = await client.fetch(postQuery, { slug })
            setPost(fetchedPost)

            if (fetchedPost) {
                const commentsQuery = groq`
                *[_type == 'comment' && post._ref == $postId && approved == true] | order(_createdAt desc)
                {
                    ...,
                    _id,
                    _createdAt,
                    name,
                    commentPost
                }`
                const fetchedComments: Comment[] = await client.fetch(commentsQuery, { postId: fetchedPost._id })
                setComments(fetchedComments)
            }
        }
        fetchPostAndComments()
    }, [slug])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (name && email && commentPost && post) {
            setIsSubmitting(true);
            try {
                const res = await fetch('/api/createComment', {
                    method: 'POST',
                    body: JSON.stringify({
                        _id: post._id,
                        name,
                        email,
                        commentPost,
                    }),
                });

                if (res.ok) {
                    setName('');
                    setEmail('');
                    setCommentPost('');
                    alert('Your comment has been submitted for approval.');
                } else {
                    const errorData = await res.json();
                    console.error('Server response:', errorData);
                    throw new Error(`Failed to submit comment: ${res.status} ${res.statusText}`);
                }
            } catch (error) {
                console.error('Error submitting comment:', error);
                if (error instanceof Error) {
                    console.error('Error message:', error.message);
                    console.error('Error stack:', error.stack);
                }
                alert(`There was an error submitting your comment: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            console.error('Form validation failed:', { name, email, commentPost, postId: post?._id });
            alert('Please fill in all fields before submitting.');
        }
    };

    if (!post) {
        console.error('Post not loaded');
        return <div>Loading...</div>;
    }

    return (
        <article>
            <section>
                <div className={HeaderTitleBar}>{post.title}</div>
                <div className="w3-card-4 w3-cell w3-border w3-border-black w3-amber">
                    <div className="w3-amber w3-center">
                        <Image className="w3-circle w3-border w3-border-black" width={90} height={80} src={urlFor(post.author.picture).url()} alt={post.author.name} />
                    </div>
                    <div className="w3-black">By: {post.author.name}</div>
                    <div className="w3-grey">{new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}</div>
                    {post.categories?.map((category) => 
                        <div className="w3-margin w3-circle w3-border w3-border-black w3-center w3-tiny w3-white" key={category._id}>{category.title}</div>
                    )}
                </div>
            </section>
            <section className="w3-margin w3-left">
                <Image className="w3-image" width={700} height={350} src={urlFor(post.coverImage).url()} alt={post.author.name} />
                <MyPortableTextComponent value={post.content} />
            </section>
            <section className="w3-margin w3-left">
                <h3 className="w3-border-top w3-border-black w3-margin-top">Comments</h3>
                <form className="w3-amber w3-cell w3-border w3-border-black" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                        disabled={isSubmitting}
                    />
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        disabled={isSubmitting}
                    />
                    <label htmlFor="comment">Comment:</label>
                    <textarea 
                        id="comment" 
                        value={commentPost}
                        onChange={(e) => setCommentPost(e.target.value)}
                        required
                        disabled={isSubmitting}
                    ></textarea>
                    <button className="w3-button w3-white w3-hover-light-grey" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Comment'}
                    </button>
                </form>
                <div>
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <div key={comment._id} className="w3-cell w3-border w3-border-black w3-margin-top w3-margin-bottom w3-card w3-third w3-amber w3-round-xlarge">
                                <h4 className="w3-black">{comment.name}</h4>
                               <p className="w3-white">{comment.commentPost}</p>
                                <small className="w3-grey w3-margin">{new Date(comment._createdAt).toLocaleString()}</small>
                            </div>
                        ))
                    ) : (
                        <p>No comments yet.</p>
                    )}
                </div>
            </section>
        </article>
    )
}

export default Post


// import {
//   indexQuery,
//   type Post,
//   postAndMoreStoriesQuery,
//   postBySlugQuery,
//   postSlugsQuery,
//   type Settings,
//   settingsQuery,
// } from '../lib/sanity.queries'
import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-11-15'
export const token = process.env.SANITY_API_TOKEN
 
/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token

})


// export async function getSettings(): Promise<Settings> {
//   if (client) {
//     return (await client.fetch(settingsQuery)) || {}
//   }
//   return {}
// }

// export async function getAllPosts(): Promise<Post[]> {
//   if (client) {
//     return (await client.fetch(indexQuery)) || []
//   }
//   return []
// }

// export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
//   if (client) {
//     const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
//     return slugs.map((slug) => ({ slug }))
//   }
//   return []
// }

// export async function getPostBySlug(slug: string): Promise<Post> {
//   if (client) {
//     return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
//   }
//   return {} as any
// }

// export async function getPostAndMoreStories(
//   slug: string,
//   token?: string | null
// ): Promise<{ post: Post; morePosts: Post[] }> {
//   if (projectId) {
//     const client = createClient({
//       projectId,
//       dataset,
//       apiVersion,
//       useCdn,
//       token: token || undefined,
//     })
//     return await client.fetch(postAndMoreStoriesQuery, { slug })
//   }
//   return { post: null, morePosts: [] }
// }

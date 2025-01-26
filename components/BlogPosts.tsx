import { getPosts } from '@/lib/sanity.query'

export default async function BlogPosts() {
  const posts = await getPosts()
  
  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug.current}>
          <h2>{post.title}</h2>
          <div>{post.content}</div>
        </div>
      ))}
    </div>
  )
}
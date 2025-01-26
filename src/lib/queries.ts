export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    excerpt,
    content,
    category,
    publishedAt
  }`
  
  export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
    title,
    slug,
    excerpt,
    content,
    category,
    publishedAt
  }`
  
  export const postsByCategoryQuery = `*[_type == "post" && category == $category] | order(publishedAt desc) {
    title,
    slug,
    excerpt,
    content,
    category,
    publishedAt
  }`
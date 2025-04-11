import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogPost = {
  title: string
  date: string
  author: string
  coverImage?: string
  slug: string
  content: string
  excerpt: string
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fileNames = await fs.readdir(postsDirectory)
  
  const posts = await Promise.all(fileNames.map(async (fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = await fs.readFile(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      content,
      excerpt: content.split('\n')[0],
      ...data,
    } as BlogPost
  }))

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(process.cwd(), 'posts', `${slug}.md`)
    const fileContents = await fs.readFile(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      content,
      excerpt: content.split('\n')[0],
      ...data,
    } as BlogPost
  } catch (error) {
    return null
  }
} 
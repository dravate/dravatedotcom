// types/blog.ts
export interface CoursePost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: any
  status: 'draft' | 'published'
  cover_image: string
  published_at: string
  created_at: string
  updated_at: string
  tags: string[]
}

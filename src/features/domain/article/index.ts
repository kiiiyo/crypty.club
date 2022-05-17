import { Domain } from '@/features'

export type CollectionQuery = {
  limit: number
  offset: number
}

export type Entity = Domain.Content.Entity & {
  title: string
  slug: string
  description?: string | null
  content?: Document | null
  category: null
  tags: null
}

export type Collection = {
  contents: Array<Entity>
  limit: number
  offset: number
  totalCount: number
}

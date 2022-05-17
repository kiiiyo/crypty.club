import { Domain } from '@/features'

export type Entity = Domain.Content.Entity & {
  displayName: string
  slug: string
  description?: string | null
  sortOrder?: number | null
}

export type Collection = {
  contents: Array<Entity>
  limit: number
  offset: number
  totalCount: number
}

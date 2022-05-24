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
  category?: Domain.Category.Entity
  tags?: Array<Domain.Tag.Entity>
}

export type Collection = {
  contents: Array<Entity>
  limit: number
  offset: number
  totalCount: number
}

export type FetchCollectionResult = Promise<Collection | Domain.Error.HttpError>

import { Domain } from '@/features'
import { MicroCMSQueries } from 'microcms-js-sdk'

export type CollectionQuery = {
  limit?: number
  offset?: number
}

export type DetailRequest = {
  id: string
  queries?: MicroCMSQueries
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

export type FetchDetailResult = Promise<Entity | Domain.Error.HttpError>

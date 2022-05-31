import { Domain } from '@/features'
import { getList, getDetail } from '@/libs/microcms'

export const articleCollection: (
  queries?: Domain.Article.CollectionQuery
) => Domain.Article.FetchCollectionResult = async (queries) => {
  return getList({
    endpoint: 'articles',
    queries
  })
}

export const articleDetail: (
  request: Domain.Article.DetailRequest
) => Domain.Article.FetchDetailResult = async ({ id, queries }) => {
  return getDetail({
    endpoint: 'articles',
    contentId: id,
    queries
  })
}

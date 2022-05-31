import { Domain, Repository } from '../index'

export const articleCollection: (
  query?: Domain.Article.CollectionQuery
) => Domain.Article.FetchCollectionResult = async (query) => {
  return await Repository.Article.articleCollection(query)
}

export const articleDetail: (
  request: Domain.Article.DetailRequest
) => Domain.Article.FetchDetailResult = async (request) => {
  return await Repository.Article.articleDetail(request)
}

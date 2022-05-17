import { Domain, Repository } from '../index'

export const articleCollection: (
  query: Domain.Article.CollectionQuery
) => Promise<Domain.Article.Collection> = async (query) => {
  return await Repository.Article.articleCollection(query)
}

// export const postDetail: (
//   slug: string
// ) => Promise<Domain.Post.Entity | null> = async (slug) => {
//   return await Repository.Post.postDetail(slug)
// }

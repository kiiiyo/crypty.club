import { Domain } from '@/features'
import { getList } from '@/libs/microcms'

export const articleCollection: (
  queries: Domain.Article.CollectionQuery
) => Domain.Article.FetchCollectionResult = async (queries) => {
  return getList({
    endpoint: 'articles',
    queries
  }) as Domain.Article.FetchCollectionResult
}

// export const postDetail: (
//   slug: string
// ) => Promise<Domain.Post.Entity | null> = async (slug) => {
//   const { total, items } =
//     await contentfulClient.getEntries<Domain.Post.Fields>({
//       content_type: 'post',
//       limit: 1,
//       'fields.slug': slug
//     })

//   return total > 0 ? postMapping(items[0]) : null
// }

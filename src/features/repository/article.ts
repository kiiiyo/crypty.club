import { Domain } from '@/features'
import { getApi } from '@/libs/api'

export const articleCollection: (
  query: Domain.Article.CollectionQuery
) => Promise<Domain.Article.Collection> = async (query) => {
  const { limit, offset } = query

  // TODO:
  return getApi(`articles?limit=${limit}&offset=${offset}`)
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

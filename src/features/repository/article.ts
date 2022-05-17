import { Domain } from '@/features'
import { microcmsClient } from '@/libs/microcms'

// export const getStaticProps = async () => {
//   const data = await client.get({
//     endpoint: 'hello',
//   });

//   return {
//     props: {
//       data,
//     },
//   };
// };

// getList: <T_1 = any>({ endpoint, queries, }: GetListRequest) => Promise<MicroCMSListResponse<T_1>>;

export const articleCollection: (
  query: Domain.Article.CollectionQuery
) => Promise<Domain.Article.Collection> = async (query) => {
  const { limit, offset } = query

  const data = await microcmsClient
    .getList({
      endpoint: 'articles'
    })
    .then((response) => response)
    .catch((erro) => erro)

  return data
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

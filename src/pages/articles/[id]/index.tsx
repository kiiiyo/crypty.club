import {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext
} from 'next'
//
import { Domain, Usecase } from '@/features'
import { Pages } from '@/components'

type ArticleDetailPageProps = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context
  const id = String(params?.id)

  if (!params?.id) {
    throw new Error('Error: ID not found')
  }

  try {
    const data = await Usecase.Article.articleDetail({ id })

    if (data instanceof Domain.Error.HttpError) {
      throw data
    }

    return { props: { state: { data } } }
  } catch (error) {
    if (error instanceof Domain.Error.HttpError) {
      return {
        props: {
          state: { error: '正常に記事を取得することができませんでした。' }
        }
      }
    }
    throw error
  }
}

const ArticleDetailPage: NextPage<ArticleDetailPageProps> = ({ state }) => {
  return <Pages.ArticleDetailPage state={state} />
}

export default ArticleDetailPage

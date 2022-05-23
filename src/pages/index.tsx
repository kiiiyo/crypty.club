import type { NextPage, GetStaticProps } from 'next'
//
import { Domain, Usecase } from '@/features'
import { Pages } from '@/components'

export type State = {
  data?: Domain.Article.Collection
  error?: string // TODO
}

export type HomePageProps = {
  state: State
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await Usecase.Article.articleCollection({
      limit: 10,
      offset: 0
    })
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

const HomePage: NextPage<HomePageProps> = ({ state: { data, error } }) => {
  console.log('🚀 ~ file: index.tsx ~ line 31 ~ data', data)
  console.log('🚀 ~ file: index.tsx ~ line 31 ~ error', error)
  return <Pages.HomePage />
}

export default HomePage

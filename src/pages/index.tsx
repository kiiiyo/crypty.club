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
      limit: 9,
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

const HomePage: NextPage<HomePageProps> = ({ state }) => {
  return <Pages.HomePage state={state} />
}

export default HomePage

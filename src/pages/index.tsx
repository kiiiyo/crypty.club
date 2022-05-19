import type { NextPage, GetStaticProps } from 'next'
//
import { Domain, Usecase } from '@/features'
import { Pages } from '@/components'

export type State = {
  data?: Domain.Article.Collection
  error?: null
}

export type HomePageProps = {
  state: State
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await Usecase.Article.articleCollection({
      limit: 10,
      offset: 5
    })
    return { props: { state: { data } } }
  } catch (error) {
    if (error instanceof Domain.Error.HttpError) {
      return { props: { error: error.serialize() } }
    }
    throw error
  }
}

const HomePage: NextPage<HomePageProps> = ({ state: { data, error } }) => {
  console.log(data)
  console.log(error)
  return <Pages.HomePage />
}

export default HomePage

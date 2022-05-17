import type { NextPage, GetStaticProps } from 'next'
//
import { Domain, Usecase } from '@/features'
import { Pages } from '@/components'

export type State = {
  articleCollection: Domain.Article.Collection
}

export type HomePageProps = {
  state: State
}

export const getStaticProps: GetStaticProps = async () => {
  const articleCollection = await Usecase.Article.articleCollection({
    limit: 10,
    offset: 5
  })

  return {
    props: {
      state: { articleCollection }
    }
  }
}

const HomePage: NextPage<HomePageProps> = ({
  state: { articleCollection }
}) => {
  console.log(articleCollection)
  return <Pages.HomePage />
}

export default HomePage

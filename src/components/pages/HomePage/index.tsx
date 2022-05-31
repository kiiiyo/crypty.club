import { FC } from 'react'
//
import { Domain } from '@/features'
import { Templates, Organisms } from '@/components'

// Interface

export type State = {
  data?: Domain.Article.Collection
  error?: string
}

export type HomePageProps = {
  state: State
}

export type HomePagePresenterProps = {
  state: State
}

// Component

export const HomePage: FC<HomePageProps> = ({ state }) => {
  return <HomePagePresenter state={state} />
}

export const HomePagePresenter: FC<HomePagePresenterProps> = ({
  state: { data, error }
}) => {
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader />}
      globalFooter={<Organisms.GlobalFooter />}
    >
      {error && <div>{error}</div>}
      {data && <Organisms.ArticleCollection state={{ collection: data }} />}
    </Templates.GenericTemplate>
  )
}

export default HomePage

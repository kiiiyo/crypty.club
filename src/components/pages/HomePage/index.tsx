import { FC } from 'react'
//
import { Domain } from '@/features'
import { Templates, Organisms } from '@/components'

// Interface

export type TState = {
  data?: Domain.Article.Collection
  error?: string
}

export type THomePageProps = {
  state: TState
}

export type THomePagePresenterProps = {
  state: TState
}

// Component

export const HomePage: FC<THomePageProps> = ({ state }) => {
  return <HomePagePresenter state={state} />
}

export const HomePagePresenter: FC<THomePagePresenterProps> = ({
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

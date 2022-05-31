import { FC } from 'react'
//
import { Domain } from '@/features'
import { Templates, Organisms } from '@/components'

// Interface

export type State = {
  data?: Domain.Article.Entity
  error?: string
}

export type ArticleDetailPageProps = {
  state: State
}

export type ArticleDetailPagePresenterProps = {
  state: State
}

// Container Component

export const ArticleDetailPage: FC<ArticleDetailPageProps> = ({ state }) => {
  return <ArticleDetailPagePresenter state={state} />
}

// Presenter Component

export const ArticleDetailPagePresenter: FC<
  ArticleDetailPagePresenterProps
> = ({ state: { data, error } }) => {
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader />}
      globalFooter={<Organisms.GlobalFooter />}
    >
      {/* TODO: Error handling */}
      {error && <div>{error}</div>}
      {data && <Organisms.ArticleDetail state={{ data }} />}
    </Templates.GenericTemplate>
  )
}

export default ArticleDetailPage

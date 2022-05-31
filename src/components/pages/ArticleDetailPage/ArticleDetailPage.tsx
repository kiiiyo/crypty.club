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

// Component

export const ArticleDetailPage: FC<ArticleDetailPageProps> = ({ state }) => {
  return <ArticleDetailPagePresenter state={state} />
}

export const ArticleDetailPagePresenter: FC<
  ArticleDetailPagePresenterProps
> = ({ state: { data, error } }) => {
  console.log('🚀 ~ file: ArticleDetailPage.tsx ~ line 30 ~ data', data)
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader />}
      globalFooter={<Organisms.GlobalFooter />}
    >
      {error && <div>{error}</div>}
    </Templates.GenericTemplate>
  )
}

export default ArticleDetailPage

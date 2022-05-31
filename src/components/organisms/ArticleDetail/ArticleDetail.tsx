import { FC } from 'react'
//
import { Domain } from '@/features'

// Interface

export type State = {
  data: Domain.Article.Entity
}

export type ArticleDetailProps = {
  state: State
}

export type ArticleDetailPresenterProps = {
  state: State
}

// Component

export const ArticleDetail: FC<ArticleDetailProps> = ({ state }) => {
  return <ArticleDetailPresenter state={state} />
}

export const ArticleDetailPresenter: FC<ArticleDetailPresenterProps> = ({
  state: {
    data: { title, content }
  }
}) => {
  return (
    <article>
      <h1>{title}</h1>
      <div>{content && ''}</div>
    </article>
  )
}

export default ArticleDetail

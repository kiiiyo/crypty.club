import { FC, Fragment } from 'react'
//
export const HomePagePresenter: FC = () => {
  return (
    <Fragment>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
        Homa Page
      </span>
    </Fragment>
  )
}

export const HomePage: FC = () => {
  return <HomePagePresenter />
}

export default HomePage

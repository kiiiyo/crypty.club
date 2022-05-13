import { FC } from 'react'
//
import { Templates, Organisms } from '@/components'

export const HomePage: FC = () => {
  return <HomePagePresenter />
}

export const HomePagePresenter: FC = () => {
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader />}
      globalFooter={<div>Global Footer</div>}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
        Homa Page
      </span>
    </Templates.GenericTemplate>
  )
}

export default HomePage

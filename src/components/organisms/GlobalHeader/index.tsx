import { FC, Fragment } from 'react'
import Link from 'next/link'
//

// Interface

// Component

export const GlobalHeader: FC = () => {
  return <GlobalHeaderPresenter />
}

export const GlobalHeaderPresenter: FC = () => {
  return (
    <Fragment>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="lg:container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                  Brand
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default GlobalHeader

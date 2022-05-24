import { FC, Fragment } from 'react'
import Link from 'next/link'
//
import { Constants } from '@/env'
import { Atoms } from '@/components'

// Interface

// Component

export const GlobalHeader: FC = () => {
  return <GlobalHeaderPresenter />
}

export const GlobalHeaderPresenter: FC = () => {
  return (
    <Fragment>
      <nav className="shadow bg-black">
        <div className="container px-6 py-4 mx-auto">
          {/* Brand Logo */}
          <Link href="/">
            <a>
              <div className="flex items-center justify-center">
                <div className="w-8 mr-1">
                  <Atoms.Logo alt={Constants.SITE_TITLE} />
                </div>
                <h1 className="text-white font-bold text-2xl leading-3">
                  {Constants.SITE_TITLE}
                </h1>
              </div>
            </a>
          </Link>
          {/* Brand Logo */}
        </div>
      </nav>
    </Fragment>
  )
}

export default GlobalHeader

import { FC } from 'react'
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
    <nav className="shadow bg-black">
      <div className="max-w-6xl px-6 py-4 mx-auto">
        <div className="flex items-center justify-center">
          {/* Brand Logo */}
          <Link href="/">
            <a className="flex items-center justify-center">
              <div className="w-8 mr-1">
                <Atoms.Logo alt={Constants.SITE_TITLE} />
              </div>
              <h1 className="text-white font-bold text-2xl leading-3">
                {Constants.SITE_TITLE}
              </h1>
            </a>
          </Link>
          {/* Brand Logo */}
        </div>
      </div>
    </nav>
  )
}

export default GlobalHeader

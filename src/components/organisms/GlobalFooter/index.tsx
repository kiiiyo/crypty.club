import { FC } from 'react'
import Link from 'next/link'
//
import { Constants } from '@/env'
import { Atoms } from '@/components'

// Interface

// Component

export const GlobalFooter: FC = () => {
  return <GlobalFooterPresenter />
}

export const GlobalFooterPresenter: FC = () => {
  return (
    <footer>
      <div className="max-w-6xl py-12 px-4 mx-auto bg-white md:px-6">
        <div className="mx-auto w-full">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-8">
            {/* */}
            <div className="col-span-2">
              <Link href="/">
                <a>
                  <div className="flex items-center justify-start">
                    <div className="w-8 mr-1">
                      <Atoms.Logo alt={Constants.SITE_TITLE} />
                    </div>
                    <h1 className="text-black font-bold text-2xl leading-3">
                      {Constants.SITE_TITLE}
                    </h1>
                  </div>
                </a>
              </Link>
              <p className="mt-4">{Constants.SITE_DESCRIPTION}</p>
            </div>
            {/* */}

            {/* About Menu */}
            {/* TODO: Refactoring */}
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-400">
                About
              </h3>
              <ul>
                <li className="mt-6">
                  <Link href="/">
                    <a className="font-normal text-gray-600 hover:underline">
                      <span className="inline-block">Link Item</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* About Menu */}

            {/* Legal Menu */}
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-400">
                Legal
              </h3>
              <ul>
                <li className="mt-6">
                  <Link href="/">
                    <a className="font-normal text-gray-600 hover:underline">
                      <span className="inline-block">Link Item</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Legal Menu */}

            {/* Links Menu */}
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-400">
                Links
              </h3>
              <ul>
                <li className="mt-6">
                  <Link href="/">
                    <a className="font-normal text-gray-600 hover:underline">
                      <span className="inline-block">Link Item</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Links Menu */}
          </div>
          <hr className="my-6 border-gray-200 lg:my-8" />
          <small className="block text-center text-gray-600">
            <span>&copy;</span>
            <span id="currentYear">2022</span>{' '}
            <Link href="/">{Constants.SITE_TITLE}</Link>
            <span>. All Rights Reserved.</span>
          </small>
        </div>
      </div>
    </footer>
  )
}

export default GlobalFooter

import { FC, useCallback } from 'react'
import Link from 'next/link'
//
import { Constants } from '@/env'
import { Hooks } from '@/features'
import { Atoms } from '@/components'

// Interface

export type Actions = {
  onSiteMenuClick: () => void
  onSearchKeywordClick: () => void
}

export type GlobalHeaderPresenterProps = {
  actions: Actions
}

// Component

export const GlobalHeader: FC = () => {
  const {
    state: { displayOverlaySiteMenu, displayOverlaySearchKeywordMenu },
    actions: {
      handleDisplayOverlaySiteMenu,
      handleDisplayOverlaySearchKeywordMenu
    }
  } = Hooks.App.useAppContext()

  const onSiteMenuClick = useCallback(() => {
    handleDisplayOverlaySiteMenu(
      displayOverlaySiteMenu === 'HIDE' ? 'SHOW' : 'HIDE'
    )
  }, [displayOverlaySiteMenu, handleDisplayOverlaySiteMenu])

  const onSearchKeywordClick = useCallback(() => {
    handleDisplayOverlaySearchKeywordMenu(
      displayOverlaySearchKeywordMenu === 'HIDE' ? 'SHOW' : 'HIDE'
    )
  }, [displayOverlaySearchKeywordMenu, handleDisplayOverlaySearchKeywordMenu])

  return (
    <GlobalHeaderPresenter
      actions={{
        onSiteMenuClick,
        onSearchKeywordClick
      }}
    />
  )
}

export const GlobalHeaderPresenter: FC<GlobalHeaderPresenterProps> = ({
  actions: { onSiteMenuClick, onSearchKeywordClick }
}) => {
  return (
    <nav className="shadow bg-black">
      <div className="max-w-6xl px-6 lg:px-0 py-4 mx-auto">
        <div className="flex items-center justify-center">
          {/* SiteMenu: start */}
          <button
            onClick={onSiteMenuClick}
            className="flex items-center justify-center h-12 mr-auto"
          >
            <Atoms.Icon.ViewListIcon className="h-8 w-8 text-gray-300 hover:text-gray-200 active:text-white" />
          </button>
          {/* SiteMenu: end */}

          {/* BrandLogo: start */}
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
          {/* BrandLogo: end */}

          {/* SearchKeyword: start */}
          <button
            onClick={onSearchKeywordClick}
            className="flex items-center justify-center h-12 ml-auto"
          >
            <Atoms.Icon.SearchIcon className="h-8 w-8 text-gray-300 hover:text-gray-200 active:text-white" />
          </button>
          {/* SearchKeyword: end */}
        </div>
      </div>
    </nav>
  )
}

export default GlobalHeader

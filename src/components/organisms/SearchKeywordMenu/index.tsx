import { FC, Fragment, useCallback } from 'react'
//import Link from 'next/link'
//
import { Hooks } from '@/features'
import { Atoms } from '@/components'
//
import type { DisplayOverlayView } from '@/features/context/AppContext'

// Interface

export type State = {
  displayOverlaySearchKeywordMenu: DisplayOverlayView
}

export type Actions = {
  onCloseClick: () => void
}

export type SearchKeywordMenuPresenterProps = {
  state: State
  actions: Actions
}

// Container Component

export const SearchKeywordMenu: FC = () => {
  const {
    state: { displayOverlaySearchKeywordMenu },
    actions: { handleDisplayOverlaySearchKeywordMenu }
  } = Hooks.App.useAppContext()

  const onCloseClick = useCallback(() => {
    handleDisplayOverlaySearchKeywordMenu('HIDE')
  }, [handleDisplayOverlaySearchKeywordMenu])

  return (
    <SearchKeywordMenuPresenter
      state={{ displayOverlaySearchKeywordMenu }}
      actions={{ onCloseClick }}
    />
  )
}

// Presenter Component

export const SearchKeywordMenuPresenter: FC<
  SearchKeywordMenuPresenterProps
> = ({
  state: { displayOverlaySearchKeywordMenu },
  actions: { onCloseClick }
}) => {
  return displayOverlaySearchKeywordMenu === 'SHOW' ? (
    <Fragment>
      <div className="z-20 absolute w-full">
        <div className="relative w-full">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center items-center h-20">
              <h3 className="text-white font-bold text-xl">検索</h3>
            </div>
            <div className="flex mt-4">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="キーワードを入力"
                className="w-full bg-white rounded-l border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8"
              />
              <button className="flex rounded-r justify-center items-center w-16 bg-gray-600 hover:bg-gray-500 active:bg-gray-700">
                <Atoms.Icon.SearchIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          <button onClick={onCloseClick} className="fixed top-4 right-4">
            <Atoms.Icon.CloseIcon className="h-8 w-8 text-white" />
          </button>
        </div>
      </div>
      <Atoms.Overlay onClick={onCloseClick} />
    </Fragment>
  ) : null
}

export default SearchKeywordMenu

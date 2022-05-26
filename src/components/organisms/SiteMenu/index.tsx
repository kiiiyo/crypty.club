import { FC, Fragment, useCallback } from 'react'
import Link from 'next/link'
//
import { Hooks } from '@/features'
import { Atoms } from '@/components'
//
import type { DisplayOverlayView } from '@/features/context/AppContext'

// Interface

export type State = {
  displayOverlaySiteMenu: DisplayOverlayView
}

export type Actions = {
  onCloseClick: () => void
}

export type SiteMenuPresenterProps = {
  state: State
  actions: Actions
}

// Container Component

export const SiteMenu: FC = () => {
  const {
    state: { displayOverlaySiteMenu },
    actions: { handleDisplayOverlaySiteMenu }
  } = Hooks.App.useAppContext()

  const onCloseClick = useCallback(() => {
    handleDisplayOverlaySiteMenu('HIDE')
  }, [handleDisplayOverlaySiteMenu])

  return (
    <SiteMenuPresenter
      state={{ displayOverlaySiteMenu }}
      actions={{ onCloseClick }}
    />
  )
}

// Presenter Component

export const SiteMenuPresenter: FC<SiteMenuPresenterProps> = ({
  state: { displayOverlaySiteMenu },
  actions: { onCloseClick }
}) => {
  return displayOverlaySiteMenu === 'SHOW' ? (
    <Fragment>
      <div className="z-20 absolute w-full">
        <div className="relative w-full">
          <nav>
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center items-center h-20">
                <h3 className="text-white font-bold text-xl">メニュー</h3>
              </div>
              <div className="grid gap-8 px-4 mt-4 lg:grid-cols-3 lg:px-0 ">
                <Link href="/">
                  <a className="p-4 flex justify-start items-center bg-black text-gray-300 hover:text-gray-100 active:text-white border-gray-300 hover:border-gray-100 active:border-white border-2 rounded-md">
                    <Atoms.Icon.HomeIcon className="h-6 w-6 mr-2" />
                    <span>ホーム</span>
                  </a>
                </Link>
                <Link href="/categories">
                  <a className="p-4 flex justify-start items-center bg-black text-gray-300 hover:text-gray-100 active:text-white border-gray-300 hover:border-gray-100 active:border-white border-2 rounded-md">
                    <Atoms.Icon.FolderIcon className="h-6 w-6 mr-2" />
                    <span>カテゴリー</span>
                  </a>
                </Link>
                <Link href="/tags">
                  <a className="p-4 flex justify-start items-center bg-black text-gray-300 hover:text-gray-100 active:text-white border-gray-300 hover:border-gray-100 active:border-white border-2 rounded-md">
                    <Atoms.Icon.TagIcon className="h-6 w-6 mr-2" />
                    <span>タグ</span>
                  </a>
                </Link>
              </div>
            </div>
            <button onClick={onCloseClick} className="fixed top-4 right-4">
              <Atoms.Icon.CloseIcon className="h-8 w-8 text-white" />
            </button>
          </nav>
        </div>
      </div>
      <Atoms.Overlay onClick={onCloseClick} />
    </Fragment>
  ) : null
}

export default SiteMenu

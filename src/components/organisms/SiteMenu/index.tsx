import { FC, Fragment, useCallback } from 'react'
//import Link from 'next/link'
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
          <div className="max-w-6xl mx-auto">
            <button onClick={onCloseClick} className="fixed top-4 right-4">
              <Atoms.Icon.CloseIcon className="h-8 w-8 text-white" />
            </button>
          </div>
        </div>
      </div>
      <Atoms.Overlay onClick={onCloseClick} />
    </Fragment>
  ) : null
}

export default SiteMenu

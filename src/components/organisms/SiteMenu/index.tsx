import { FC, Fragment } from 'react'
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
  handleDisplayOverlaySiteMenu: (condition: DisplayOverlayView) => void
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
  return (
    <SiteMenuPresenter
      state={{ displayOverlaySiteMenu }}
      actions={{ handleDisplayOverlaySiteMenu }}
    />
  )
}

// Presenter Component

export const SiteMenuPresenter: FC<SiteMenuPresenterProps> = ({
  state: { displayOverlaySiteMenu }
}) => {
  return displayOverlaySiteMenu === 'SHOW' ? (
    <Fragment>
      <div className="z-20 absolute w-full">
        <div className="relative w-full">
          <div className="max-w-6xl mx-auto">
            <button className="fixed top-4 right-4">
              <Atoms.Icon.CloseIcon className="h-8 w-8 text-white" />
            </button>
          </div>
        </div>
      </div>
      <Atoms.Overlay />
    </Fragment>
  ) : null
}

export default SiteMenu

import {
  FC,
  ReactNode,
  createContext,
  useState,
  useCallback,
  useEffect
} from 'react'

// Interface

export type DeviceType = 'DESKTOP' | 'MOBILE' | undefined
export type DisplayOverlayView = 'SHOW' | 'HIDE'

export type State = {
  screenSize: {
    width: number
    height: number
  }
  deviceType: DeviceType
  displayOverlaySiteMenu: DisplayOverlayView
  displayOverlaySearchKeywordMenu: DisplayOverlayView
}

export type Actions = {
  handleDisplayOverlaySiteMenu: (condition: DisplayOverlayView) => void
  handleDisplayOverlaySearchKeywordMenu: (condition: DisplayOverlayView) => void
}

export type AppContextValueType = {
  state: State
  actions: Actions
}

// Context

const initContextValue: AppContextValueType = {
  state: {
    displayOverlaySiteMenu: 'HIDE',
    displayOverlaySearchKeywordMenu: 'HIDE',
    screenSize: {
      width: 0,
      height: 0
    },
    deviceType: undefined
  },
  actions: {
    handleDisplayOverlaySiteMenu: () => {},
    handleDisplayOverlaySearchKeywordMenu: () => {}
  }
}

export const AppContext = createContext<AppContextValueType>(initContextValue)

// Hooks

export const useAppContext = (): AppContextValueType => {
  // State
  const [displayOverlaySiteMenu, setDisplayOverlaySiteMenu] =
    useState<DisplayOverlayView>('HIDE')
  const [displayOverlaySearchKeywordMenu, setDisplayOverlaySearchKeywordMenu] =
    useState<DisplayOverlayView>('HIDE')
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0
  })

  // Actions
  const handleDisplayOverlaySiteMenu = useCallback(
    (condition: DisplayOverlayView) => {
      setDisplayOverlaySiteMenu(condition)
    },
    [setDisplayOverlaySiteMenu]
  )
  const handleDisplayOverlaySearchKeywordMenu = useCallback(
    (condition: DisplayOverlayView) => {
      setDisplayOverlaySearchKeywordMenu(condition)
    },
    [setDisplayOverlaySearchKeywordMenu]
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    } else {
      return
    }
  }, [])

  return {
    state: {
      screenSize,
      // TODO: ブレイクポイントを別で管理する
      deviceType: screenSize.width <= 768 ? 'DESKTOP' : 'MOBILE',
      displayOverlaySiteMenu,
      displayOverlaySearchKeywordMenu
    },
    actions: {
      handleDisplayOverlaySiteMenu,
      handleDisplayOverlaySearchKeywordMenu
    }
  }
}

// Provider

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const { state, actions } = useAppContext()
  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  )
}

export const AppContextConsumer = AppContext.Consumer

export default AppContext

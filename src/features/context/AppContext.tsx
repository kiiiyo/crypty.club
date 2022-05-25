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
  displayOverlayMenu: DisplayOverlayView
  displayOverlaySearchKeyword: DisplayOverlayView
}

export type Actions = {
  handleDisplayOverlayMenu: (condition: DisplayOverlayView) => void
  handleDisplayOverlaySearchKeyword: (condition: DisplayOverlayView) => void
}

export type AppContextValueType = {
  state: State
  actions: Actions
}

// Context

const initContextValue: AppContextValueType = {
  state: {
    displayOverlayMenu: 'HIDE',
    displayOverlaySearchKeyword: 'HIDE',
    screenSize: {
      width: 0,
      height: 0
    },
    deviceType: undefined
  },
  actions: {
    handleDisplayOverlayMenu: () => {},
    handleDisplayOverlaySearchKeyword: () => {}
  }
}

export const AppContext = createContext<AppContextValueType>(initContextValue)

// Hooks

export const useAppContext = (): AppContextValueType => {
  // State
  const [displayOverlayMenu, setDisplayOverlayMenu] =
    useState<DisplayOverlayView>('HIDE')
  const [displayOverlaySearchKeyword, setDisplayOverlaySearchKeyword] =
    useState<DisplayOverlayView>('HIDE')
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0
  })

  // Actions
  const handleDisplayOverlayMenu = useCallback(
    (condition: DisplayOverlayView) => {
      setDisplayOverlayMenu(condition)
    },
    [setDisplayOverlayMenu]
  )
  const handleDisplayOverlaySearchKeyword = useCallback(
    (condition: DisplayOverlayView) => {
      setDisplayOverlaySearchKeyword(condition)
    },
    [setDisplayOverlaySearchKeyword]
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
      displayOverlayMenu,
      displayOverlaySearchKeyword
    },
    actions: { handleDisplayOverlayMenu, handleDisplayOverlaySearchKeyword }
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

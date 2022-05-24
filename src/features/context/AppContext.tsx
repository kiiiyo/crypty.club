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
export type OverlayDisplayCondition = 'SHOW' | 'HIDE'

export type State = {
  screenSize: {
    width: number
    height: number
  }
  deviceType: DeviceType
  overlayMenuDisplay: OverlayDisplayCondition
  overlaySearchKeywordDisplay: OverlayDisplayCondition
}

export type Actions = {
  handleOverlayMenuDisplay: (condition: OverlayDisplayCondition) => void
  handleOverlaySearchKeywordDisplay: (
    condition: OverlayDisplayCondition
  ) => void
}

export type AppContextValueType = {
  state: State
  actions: Actions
}

// Context

const initContextValue: AppContextValueType = {
  state: {
    overlayMenuDisplay: 'HIDE',
    overlaySearchKeywordDisplay: 'HIDE',
    screenSize: {
      width: 0,
      height: 0
    },
    deviceType: undefined
  },
  actions: {
    handleOverlayMenuDisplay: () => {},
    handleOverlaySearchKeywordDisplay: () => {}
  }
}

export const AppContext = createContext<AppContextValueType>(initContextValue)

// Hooks

export const useAppContext = (): AppContextValueType => {
  // State
  const [overlayMenuDisplay, setOverlayMenuDisplay] =
    useState<OverlayDisplayCondition>('HIDE')

  const [overlaySearchKeywordDisplay, setOverlaySearchKeywordDisplay] =
    useState<OverlayDisplayCondition>('HIDE')

  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0
  })

  // Actions
  const handleOverlayMenuDisplay = useCallback(
    (condition: OverlayDisplayCondition) => {
      setOverlayMenuDisplay(condition)
    },
    [setOverlayMenuDisplay]
  )

  const handleOverlaySearchKeywordDisplay = useCallback(
    (condition: OverlayDisplayCondition) => {
      setOverlaySearchKeywordDisplay(condition)
    },
    [setOverlaySearchKeywordDisplay]
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
      overlayMenuDisplay,
      overlaySearchKeywordDisplay
    },
    actions: { handleOverlayMenuDisplay, handleOverlaySearchKeywordDisplay }
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

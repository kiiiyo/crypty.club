import { useContext } from 'react'
//
import { AppContext } from '@/features/context/AppContext'

export const useAppContext = () => {
  return useContext(AppContext)
}

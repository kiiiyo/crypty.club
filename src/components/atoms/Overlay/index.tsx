import { FC } from 'react'

export type OverlayProps = { onClick?: () => void }

export const Overlay: FC<OverlayProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="fixed w-full h-full bg-black opacity-80 z-10"
    ></div>
  )
}

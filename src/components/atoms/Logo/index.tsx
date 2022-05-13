import Image from 'next/image'
import { FC, CSSProperties } from 'react'

import logo from './logo.svg'

export type TLogo = {
  styles?: CSSProperties
  className?: string
  alt: string
}

export const Logo: FC<TLogo> = ({ styles, className, alt }) => {
  return (
    <Image
      src={logo}
      className={className}
      style={styles}
      alt={alt}
      width="100%"
      height="100%"
      layout="responsive"
    />
  )
}

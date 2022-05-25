import { FC, Fragment } from 'react'

import { Organisms } from '@/components'

// Interface
export type GenericTemplateProps = {
  globalHeader?: React.ReactNode
  globalFooter?: React.ReactNode
  children?: React.ReactNode
}

export const GenericTemplate: FC<GenericTemplateProps> = ({
  globalHeader,
  globalFooter,
  children
}) => {
  return (
    <Fragment>
      <div>{globalHeader}</div>
      <div className="bg-gray-100">
        <main className="max-w-6xl py-8 mx-auto">{children}</main>
      </div>
      <div>{globalFooter}</div>
      <Organisms.SiteMenu />
      <Organisms.SearchKeywordMenu />
    </Fragment>
  )
}

export default GenericTemplate

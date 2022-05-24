import { FC, Fragment } from 'react'

// Interface
export type TGenericTemplateProps = {
  globalHeader?: React.ReactNode
  globalFooter?: React.ReactNode
  children?: React.ReactNode
}

// Presenter
export const GenericTemplate: FC<TGenericTemplateProps> = ({
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
    </Fragment>
  )
}

export default GenericTemplate

export interface MetaObject {
  auth?: boolean
  title?: string
  key?: string
  icon?: JSX.Element
  index?: number
}

export interface MyRouterObject {
  element?: JSX.Element
  path?: string
  meta?: MetaObject
  children?: MyRouterObject[]
}

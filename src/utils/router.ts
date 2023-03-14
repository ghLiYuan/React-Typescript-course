import { resolvePath } from 'react-router-dom'
import type { MyRouterObject } from '@/types/router'

export function searchRoute(pathname: string, routes: MyRouterObject[]): MyRouterObject {
  let result: MyRouterObject = {}
  for (const route of routes) {
    if (route.path === pathname) {
      result = route
      break
    }
    if (route.children) {
      const res = searchRoute(pathname, route.children)
      if (Object.keys(res).length) {
        result = res
        break
      }
    }
  }
  return result
}

export function normiorizeRoute(routes: MyRouterObject[], isSort = true): MyRouterObject[] {
  const result: MyRouterObject[] = []
  for (const route of routes) {
    if (route.children) {
      route.children.forEach((child) => {
        child.path = resolvePath(child.path!, route.path).pathname
      })
      result.push({
        ...route,
        children: normiorizeRoute(route.children, false),
      })
    }
    else {
      result.push(route)
    }
  }
  if (isSort) {
    result.sort((a, b) => {
      return (a.meta?.index || 0) - (b.meta?.index || 0)
    })
  }
  return result
}

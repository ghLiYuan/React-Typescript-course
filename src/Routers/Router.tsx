import { Navigate, useRoutes } from 'react-router-dom'
import Login from '@/Pages/Login/Login'
import NotFound from '@/Pages/NotFound'
import type { MyRouterObject } from '@/types/router'

const dynamicRoutes: MyRouterObject[] = []
const authRoutes: Record<string, {
  [key: string]: MyRouterObject[]
}> = import.meta.glob('./dynamic/*.tsx', { eager: true })
Object.keys(authRoutes).forEach((key) => {
  const module = authRoutes[key].default.map((route) => {
    route.meta!.auth = true
    route.meta!.index = route.meta?.index || -1
    return route
  })
  dynamicRoutes.push(...module)
})

export const rootRouter = [
  ...dynamicRoutes,
  {
    path: '/',
    element: <Navigate to="/dashboard" replace={true} />,
    meta: {},
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      auth: false,
    },
  },
  {
    path: '/404',
    element: <NotFound />,
    meta: {
      auth: false,
    },
  },
]

const Router = () => {
  return useRoutes(rootRouter)
}

export default Router

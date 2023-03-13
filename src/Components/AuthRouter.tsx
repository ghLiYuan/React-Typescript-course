/**
 * 实现路由拦截
 */
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { searchRoute, storage } from '@/utils'
import { rootRouter } from '@/Routers/Router'

const AuthRouter = ({ children }: { children: JSX.Element }) => {
  const { pathname } = useLocation()
  const auth = useAuth()
  const token = storage.getToken()
  const currentRoute = searchRoute(pathname, rootRouter)
  if (currentRoute.meta?.auth === false)
    return children

  if (!auth.user || !token)
    return <Navigate to="/login" replace={true} />

  return children
}

export default AuthRouter

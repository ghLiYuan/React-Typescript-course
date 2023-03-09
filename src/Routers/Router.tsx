import { Navigate, useRoutes } from 'react-router-dom'
import Dashboard from '@/Pages/Dashboard'
import Login from '@/Pages/Login/Login'
import NotFound from '@/Pages/NotFound'
const rootRouter = [
  {
    path: '/',
    element: <Navigate to="/dashboard" replace={true} />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/404',
    element: <NotFound />,
  },
]

const Router = () => {
  return useRoutes(rootRouter)
}

export default Router

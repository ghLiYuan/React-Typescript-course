import type { MyRouterObject } from '@/types/router'
import LayoutApp from '@/layout/LayoutApp'

const DashboardRouter: MyRouterObject[] = [
  {
    path: '/dashboard',
    element: <LayoutApp />,
    meta: {
      title: 'Dashboard',
      key: 'dashboard',
      index: 1,
    },
    children: [
      {
        path: 'index',
        element: <div>首页</div>,
        meta: {
          title: 'Dashboard',
        },
      },
    ],
  },
]

export default DashboardRouter

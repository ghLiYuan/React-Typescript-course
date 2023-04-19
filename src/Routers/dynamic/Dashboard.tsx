import type { MyRouterObject } from '@/types/router'
import LayoutApp from '@/layout/LayoutApp'
import { lazy } from 'react'
import {LazyLoad} from '@/Components/LazyLoad'

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
          title: '首页',
        },
      },
      {
        path: 'data-render',
        element: LazyLoad(lazy(() => import('@/Components/DataRender'))),
        meta: {
          title: '大数据量渲染'
        }
      },
    ],
  },
]

export default DashboardRouter

import type { MyRouterObject } from '@/types/router'
import LayoutApp from '@/layout/LayoutApp'

const FormRouter: MyRouterObject[] = [
  {
    path: '/form',
    element: <LayoutApp />,
    meta: {
      title: 'Form',
      key: 'form',
      index: 1,
    },
    children: [
      {
        path: 'index',
        element: <div>表单首页</div>,
        meta: {
          title: '表单',
        },
      },
    ],
  },
]

export default FormRouter

import { Suspense } from 'react'
import { Spin } from 'antd'
export const LazyLoad = (Component: React.LazyExoticComponent<() => JSX.Element>) => {
  return (
    <Suspense
      fallback={
        <Spin className='flex-center' />
      }
    >
      <Component />
    </Suspense>
  )
}

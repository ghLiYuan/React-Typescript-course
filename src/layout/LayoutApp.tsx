import { Outlet } from 'react-router-dom'

const LayoutApp = () => {
  return (
    <div>

      <div>header</div>
      <Outlet></Outlet>
      <div>footer</div>
    </div>
  )
}

export default LayoutApp

import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { authRoutes } from '@/Routers/Router'

const menuStyle: React.CSSProperties = {
  height: '100%',
}

function getOpenKeys(pathname: string) {
  if (pathname.split('/').length === 3)
    return [pathname.slice(0, pathname.lastIndexOf('/'))]

  return [pathname]
}

const Sidebar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [openKeys, setOpenKeys] = useState<string[]>(getOpenKeys(pathname))
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname])

  const items: MenuProps['items'] = authRoutes.map((route, i) => {
    const key = route.path || String(i)
    return {
      key,
      icon: route.meta?.icon,
      label: route.meta?.title,
      children: route.children?.map((childRoute, j) => {
        return {
          key: childRoute.path || String(j),
          label: childRoute.meta?.title,
        }
      }),
    }
  })
  const handleOpenChange: MenuProps['onOpenChange'] = (keys) => {
    setOpenKeys(keys)
  }
  const handleClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }
  const handleSelect: MenuProps['onSelect'] = ({ key }) => {
    setSelectedKeys([key])
  }

  return (
    <Menu
    mode="inline"
    style={menuStyle}
      items={items}
      openKeys={openKeys}
      onOpenChange={handleOpenChange}
      onClick={handleClick}
      selectedKeys={selectedKeys}
      onSelect={handleSelect}
    >

    </Menu>
  )
}

export default Sidebar

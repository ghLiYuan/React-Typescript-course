import { Outlet } from 'react-router-dom'
import { Layout, Space, theme } from 'antd';
import MyHeader, {HeaderStyle} from '@/Components/layout/Header';
import Sidebar from '@/Components/layout/Sidebar';
const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  // color: '',
  backgroundColor: '#fff',
  height: 64
};

const contentStyle: React.CSSProperties = {
  backgroundColor: '#eee',
  minHeight: `calc(100vh - ${headerStyle.height}px - ${footerStyle.height}px)`
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};


const LayoutApp = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <MyHeader></MyHeader>
        <Layout>
          <Sider style={siderStyle}><Sidebar /></Sider>
          <Content style={contentStyle}><Outlet /></Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  )
}

export default LayoutApp

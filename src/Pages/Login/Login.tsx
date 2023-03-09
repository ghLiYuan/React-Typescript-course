import { Button, Form, Input } from 'antd'
import './Login.css'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import CanvasBackgound from '@/Components/CanvasBackgound/CanvasBackgound'
const Login = () => (
  <div className="login-container">
    <div className="login-form">
      <div className="login-title">React + Typescript</div>
      <Form
        name="login"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input placeholder={'请输入用户名'} prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder={'请输入密码'} prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
    <CanvasBackgound />
  </div>
)

export default Login

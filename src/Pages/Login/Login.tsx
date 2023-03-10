import { Button, Form, Input, Space } from 'antd'
import './Login.css'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import SparkMd5 from 'spark-md5'
import { useState } from 'react'
import CanvasBackgound from '@/Components/CanvasBackgound/CanvasBackgound'
import { userLoginApi } from '@/api/user'
import type { LoginData } from '@/types/user'

const Login = () => {
  const [form] = Form.useForm()

  async function onFinish(values: LoginData) {
    const obj: LoginData = {
      email: values.email,
      passwd: SparkMd5.hash(values.passwd),
      captcha: values.captcha,
    }
    const a = obj.a
    await userLoginApi(obj)
  }

  const [captcha, setCaptcha] = useState('/api/captcha')
  function handleCaptcha() {
    setCaptcha(`/api/captcha?${Math.random()}`)
  }

  return (<div className="login-container">
    <div className="login-form">
      <div className="login-title">React + Typescript</div>
      <Form
        name="login"
        form={form}
        onFinish={onFinish}
        autoComplete="false"
        initialValues={{
          email: '316783812@qq.com',
          passwd: '316783812',
        }}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: '请输入邮箱' }]}
        >
          <Input placeholder={'请输入邮箱'} prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item
          name="passwd"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder={'请输入密码'} prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item name="captcha">
          <Space>
            <Input placeholder="验证码"></Input>
            <img src={captcha} onClick={handleCaptcha} alt=""/>
          </Space>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
    <CanvasBackgound />
  </div>)
}

export default Login

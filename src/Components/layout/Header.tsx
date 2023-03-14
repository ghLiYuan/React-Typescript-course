import { Layout } from "antd"
import { useAuth } from "@/hooks/useAuth"
import { useEffect } from "react"
import { storage } from "@/utils"
import { userInfoApi } from "@/api/user"

const {Header} = Layout
export const HeaderStyle:React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  lineHeight: '64px'
}

const MyHeader = () => {
  const auth = useAuth()
  const token = storage.getToken()
  useEffect(() => {
    if (token && !auth.user._id) {
      userInfoApi().then((res) => {
        auth.login({
          _id: res._id,
          email: res.email,
          token
        })
      })
    }
  })
  return (
    <Header style={HeaderStyle}>
      <div>
        欢迎您 {auth.user._id}
      </div>
    </Header>
  )
}

export default MyHeader
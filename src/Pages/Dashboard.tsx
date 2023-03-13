import { useEffect } from 'react'
import { axios } from '@/utils'
import { useAuth } from '@/hooks/useAuth'

const Dashboard = () => {
  const auth = useAuth()
  useEffect(() => {
    axios.get('funnycoder').then((res) => {
      console.log(res)
    })
  }, [])
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{auth.user.email}</h2>
    </div>
  )
}

export default Dashboard

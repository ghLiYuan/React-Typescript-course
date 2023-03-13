import { createContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { LoginRes } from '@/types/user'

export interface AuthContextType {
  user: LoginRes
  login: (user: LoginRes) => void
  logout: () => void
  setToken: (token: string) => void
}

const emptyUser: LoginRes = {
  _id: '',
  email: '',
  token: '',
}

export const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<LoginRes>(emptyUser)
  const login = (newUser: LoginRes) => {
    setUser(newUser)
  }
  const logout = () => {
    setUser(emptyUser)
  }
  const setToken = (token: string) => {
    setUser({ ...user, token })
  }
  return <AuthContext.Provider value={{ user, login, logout, setToken }}>
    {children}
  </AuthContext.Provider>
}

export default AuthProvider

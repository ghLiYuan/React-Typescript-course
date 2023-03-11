import {useContext} from 'react'
import type {AuthContextType} from '@/Components/AuthProvider'
import {AuthContext} from '@/Components/AuthProvider'

export const useAuth = () => {
  return useContext(AuthContext) as AuthContextType
}

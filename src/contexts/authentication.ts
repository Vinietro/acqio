import { createContext, SetStateAction } from 'react'
import User from '../interfaces/User'

export const AuthContext = createContext({
  user: null as User | null,
  setUser: (user: SetStateAction<User | null>) => {}
})

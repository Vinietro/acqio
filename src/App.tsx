import React, { ReactElement, useState } from 'react'
import AppRoutes from './routes'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './contexts/authentication'
import User from './interfaces/User'
import { ToastContext } from './contexts/toast'
// eslint-disable-next-line import/no-named-default
import { default as ToastInterface } from './interfaces/Toast'
import Toast from './components/shared/Toast'

function App (): ReactElement {
  const [user, setUser] = useState<User | null>(null)
  const [toast, setToast] = useState<ToastInterface>({
    isVisible: false
  })

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <ToastContext.Provider value={{ toast, setToast }} >
        <BrowserRouter>
          <AppRoutes />
          <Toast />
        </BrowserRouter>
      </ToastContext.Provider>
    </AuthContext.Provider>
  )
};

export default App

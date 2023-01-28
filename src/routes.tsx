import React, { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/shared/ProtectedRoute/ProtectedRoute'
import Login from './pages/Login'
import Transactions from './pages/Transactions'

const AppRoutes = (): ReactElement => {
  return (
       <Routes>
           <Route element={<Login />} path="/" index />
           <Route element={
                <ProtectedRoute>
                    <Transactions />
                </ProtectedRoute>
            } path="/transactions" />
       </Routes>
  )
}

export default AppRoutes

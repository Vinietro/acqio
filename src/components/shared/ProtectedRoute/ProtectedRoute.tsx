import { ReactElement, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../contexts/authentication'
import { ToastContext } from '../../../contexts/toast'

interface Props {
  children: ReactElement
}

const ProtectedRoute = (props: Props): ReactElement => {
  const authContext = useContext(AuthContext)
  const toastContext = useContext(ToastContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (authContext.user == null) {
      toastContext.setToast({
        isVisible: true,
        color: 'alert',
        message: 'Realize o login para acessar essa página'
      })
      navigate('/')
    }
  })

  return props.children
}

export default ProtectedRoute

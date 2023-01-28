/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, useContext, useEffect } from 'react'
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { gapi } from 'gapi-script'
import { AuthContext } from '../../contexts/authentication'
import { ToastContext } from '../../contexts/toast'
import AcqionLogo from '../../assets/images/acqio.svg'
import './styles.scss'
import { useNavigate } from 'react-router-dom'

const clientId = process.env.REACT_APP_GOOGLE_ID ?? ''

function Login (): ReactElement {
  const authContext = useContext(AuthContext)
  const toastContext = useContext(ToastContext)
  const navigate = useNavigate()

  useEffect(() => {
    const initClient = (): void => {
      gapi.client.init({
        clientId,
        scope: ''
      })
    }
    gapi.load('client:auth2', initClient)
  })

  const showErrorMessage = (): void => {
    toastContext.setToast({
      isVisible: true,
      color: 'danger',
      message: 'Ocorreu algum problema ao realizar o login, tente novamente'
    })
  }

  const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
    if ('profileObj' in response) {
      try {
        authContext.setUser(response.profileObj)
        navigate('/transactions')
      } catch {
        showErrorMessage()
      }
    }
  }

  return (
    <div className="login">
      <img className="login__logo" src={AcqionLogo} alt="Acqio Logo" />
      <GoogleLogin
        clientId={clientId}
        buttonText="Entre com sua conta google"
        onSuccess={onSuccess}
        onFailure={showErrorMessage}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>

  )
};

export default Login

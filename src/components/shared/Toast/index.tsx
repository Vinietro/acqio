import React, { ReactElement, useContext, useEffect, useMemo } from 'react'
import { ToastContext } from '../../../contexts/toast'
import './styles.scss'

function Toast (): ReactElement {
  const toastContext = useContext(ToastContext)

  const toastColor = useMemo(() => {
    switch (toastContext.toast?.color) {
      case 'alert':
        return '#ffd61c'
      case 'danger':
        return '#ec4b4b'
      default:
        return '#29b827'
    }
  }, [toastContext.toast?.color])

  useEffect(() => {
    setTimeout(() => {
      toastContext.setToast({
        isVisible: false
      })
    }, 5000)
  }, [toastContext.toast.message])

  return ((toastContext.toast?.isVisible) ?? false)
    ? (
      <div className="container">
          <div className="container__toast" style={{ backgroundColor: toastColor }}>
            {toastContext.toast?.message}
          </div>
      </div>
      )
    : <></>
};

export default Toast

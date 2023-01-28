import { createContext, SetStateAction } from 'react'
import Toast from '../interfaces/Toast'

export const ToastContext = createContext({
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  toast: {
    isVisible: false,
    color: 'success'
  } as Toast,
  setToast: (message: SetStateAction<Toast>) => {}
})

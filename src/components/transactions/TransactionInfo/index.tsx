import React, { ReactElement, useCallback, useContext, useEffect, useState } from 'react'
import { ToastContext } from '../../../contexts/toast'
import Transaction from '../../../interfaces/Transaction'
import { getTransaction } from '../../../utils/api'
import CardClientInfo from './CardClientInfo'
import CardPaymentInfo from './CardPaymentInfo'
import CardSaleIdentifier from './CardSaleIdentifier'
import CardSaleInfo from './CardSaleInfo'
import './styles.scss'

interface props {
  transactionId: string
}

const TransactionInfo = ({ transactionId }: props): ReactElement => {
  const [transaction, setTransaction] = useState<Transaction>()
  const toastContext = useContext(ToastContext)

  const requestTransaction = useCallback(async () => {
    try {
      const response = await getTransaction(transactionId)
      setTransaction(response)
    } catch (e: any) {
      toastContext.setToast({
        isVisible: true,
        color: 'danger',
        message: e.message
      })
    }
  }, [transactionId])

  const showMessage = useCallback(() => {
    toastContext.setToast({
      isVisible: true,
      color: 'alert',
      message: 'Funcionalidade em desenvolvimento'
    })
  }, [])

  useEffect(() => {
    void requestTransaction()
  }, [])

  return (
    <div className='info'>
       <div className="info__header">
        <div className="info__header__title">
          Detalhes da transação
        </div>
        <div className="info__header__item info__header__item-disabled">SOLICITAR CANCELAMENTO</div>
        <div className="info__header__item" onClick={showMessage} >VER COMPROVANTE</div>
        <div className="info__header__item" onClick={showMessage} >VER DETALHES</div>
      </div>
      <div className="info__cards">
        <div className="info__cards__column">
          {(transaction != null)
            ? (
            <>
              <CardSaleIdentifier transaction={transaction} />
              <CardSaleInfo transaction={transaction} />
            </>
              )
            : null}
        </div>
        <div className="info__cards__column">
          {(transaction != null)
            ? (
            <>
              <CardClientInfo transaction={transaction} />
              <CardPaymentInfo transaction={transaction} />
            </>
              )
            : null}
        </div>
      </div>
    </div>
  )
}

export default TransactionInfo

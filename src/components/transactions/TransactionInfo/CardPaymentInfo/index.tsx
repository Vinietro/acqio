import React, { ReactElement } from 'react'
import Transaction from '../../../../interfaces/Transaction'

interface props {
  transaction: Transaction
}

const CardPaymentInfo = ({ transaction }: props): ReactElement => {
  return (
      <div className="card">
        <div className="card__header">Dados do pagamento</div>
        <div className="card__row">
          <div className="card__row__label">
            Modo de captura
          </div>
          <div className="card__row__value">
            {transaction?.paymentMethod}
          </div>
        </div>
      </div>
  )
}

export default CardPaymentInfo

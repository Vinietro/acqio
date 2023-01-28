import React, { ReactElement } from 'react'
import Transaction from '../../../../interfaces/Transaction'

interface props {
  transaction: Transaction
}

const CardSaleIdentifier = ({ transaction }: props): ReactElement => {
  return (
      <div className="card">
        <div className="card__header">Indentificadores da venda</div>
        <div className="card__row card__row-border">
          <div className="card__row__label">
            NSU Acqio
          </div>
          <div className="card__row__value">
            {transaction?.nsuAcqio}
          </div>
        </div>
        <div className="card__row card__row-border">
          <div className="card__row__label">
            ID da transação
          </div>
          <div className="card__row__value">
            {transaction?.id}
          </div>
        </div>
        <div className="card__row card__row-border">
          <div className="card__row__label">
            ID da autorização
          </div>
          <div className="card__row__value">
            {transaction.authorizationId}
          </div>
        </div>
        <div className="card__row card__row-border">
          <div className="card__row__label">
            Número do pedido
          </div>
          <div className="card__row__value">
            {transaction.orderNumber}
          </div>
        </div>
      </div>
  )
}

export default CardSaleIdentifier

import React, { ReactElement, useMemo } from 'react'
import Transaction from '../../../../interfaces/Transaction'

interface props {
  transaction: Transaction
}

const CardClientInfo = ({ transaction }: props): ReactElement => {
  const document = useMemo(() => {
    return String(transaction.document).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
  }, [transaction.document])

  return (
      <div className="card">
        <div className="card__header">Dados do portador</div>
        <div className="card__row">
          <div className="card__row__label">
            Documento
          </div>
          <div className="card__row__value">
            {document}
          </div>
        </div>
      </div>
  )
}

export default CardClientInfo

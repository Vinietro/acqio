import React, { ReactElement, useMemo } from 'react'
import Transaction from '../../../../interfaces/Transaction'

interface props {
  transaction: Transaction
}

const getStatusLabel = (status: string): string => {
  switch (status) {
    case 'done':
      return 'Concluída'
    case 'authorized':
      return 'Autorizada'
    case 'pre-authorized':
      return 'Pré-autorizada'
    case 'cancelled':
      return 'Cancelada'
    case 'denied':
      return 'Negada'
    default:
      return 'Indefinido'
  }
}

const CardSaleInfo = ({ transaction }: props): ReactElement => {
  const formatedDate = useMemo(() => {
    const date = new Date(transaction.createdAt)
    return date.toLocaleDateString('pt-br')
  }, [transaction.createdAt])

  const formatedHour = useMemo(() => {
    const date = new Date(transaction.createdAt)
    return `às ${date.toLocaleTimeString('pt-br')}`
  }, [transaction.createdAt])

  const grossValue = useMemo(() => {
    return Number(transaction.grossValue)
      .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }, [transaction.grossValue])

  const netValue = useMemo(() => {
    return Number(transaction.netValue)
      .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }, [transaction.netValue])

  const taxes = useMemo(() => {
    return (((transaction.netValue * 100) / transaction.grossValue - 100) * -1).toFixed(2)
  }, [transaction.netValue, transaction.grossValue])

  const discount = useMemo(() => {
    return (transaction.grossValue - transaction.netValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }, [transaction.netValue, transaction.grossValue])

  return (
      <div className="card">
        <div className="card__header">Dados da venda</div>
        <div className="card__row card__row-border">
          <div className="card__row__label">
            Status
          </div>
          <div className="card__row__value">
            {getStatusLabel((transaction.status ?? ''))}
          </div>
        </div>
        <div className="card__row card__row-border">
          <div className="card__row__label">
            Data e hora da venda
          </div>
          <div className="card__row__value">
            {formatedDate} {formatedHour}
          </div>
        </div>
        <div className="card__row card__row-border">
          <div className="card__row__label">
            Valor bruto
          </div>
          <div className="card__row__value">
            {grossValue}
          </div>
        </div>
        <div className="card__row card__row-border">
          <div className="card__row__label">
            Taxas
          </div>
          <div className="card__row__value">
            {taxes}%
          </div>
        </div>
        <div className="card__row card__row-border">
          <div className="card__row__label">
            Descontos
          </div>
          <div className="card__row__value">
            {discount}
          </div>
        </div>
        <div className="card__row card__row-border">
          <div className="card__row__label">
            Valor líquido
          </div>
          <div className="card__row__value">
            {netValue}
          </div>
        </div>
      </div>
  )
}

export default CardSaleInfo

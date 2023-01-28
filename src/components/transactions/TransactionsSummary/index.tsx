import React, { ReactElement, useMemo } from 'react'
import Transaction from '../../../interfaces/Transaction'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'

interface props {
  showInfo: boolean
  transactions: Transaction[]
}

const TransactionsSummary = ({ showInfo, transactions }: props): ReactElement => {
  const grossValue = useMemo(() => {
    return transactions.reduce((total, transaction) => total + Number(transaction.grossValue), 0)
      .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }, [transactions])

  const netValue = useMemo(() => {
    return transactions.reduce((total, transaction) => total + Number(transaction.netValue), 0)
      .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }, [transactions])

  const totalTransactions = useMemo(() => {
    return transactions.length
  }, [transactions])

  return (
    <div className="summary">
      <FontAwesomeIcon icon={faCircleDollarToSlot} color="white" fontSize="28"/>
      <div className="summary__item">
        <label>Valor bruto</label>
        <div className="summary__item__value">{showInfo ? grossValue : '-'}</div>
      </div>
      <div className="summary__item">
        <label>Valor líquido</label>
        <div className="summary__item__value">{showInfo ? netValue : '-'}</div>
      </div>
      <div className="summary__item">
        <label>Quantidade de vendas</label>
        <div className="summary__item__value">{totalTransactions}</div>
      </div>
      <FontAwesomeIcon icon={faCircleQuestion} color="white" fontSize="18" />
    </div>
  )
}

export default TransactionsSummary

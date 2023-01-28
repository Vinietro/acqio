import React, { ReactElement, useMemo, useState } from 'react'
import Transaction from '../../../interfaces/Transaction'
import TransactionInfo from '../TransactionInfo'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Mastercard from '../../../assets/images/mastercard.svg'
import Pix from '../../../assets/images/pix.svg'

interface props {
  showInfo: boolean
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

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'done':
      return 'green'
    case 'authorized':
      return 'green'
    case 'pre-authorized':
      return 'yellow'
    case 'cancelled':
      return 'red'
    case 'denied':
      return 'red'
    default:
      return 'gray'
  }
}

const TransactionsTableRow = ({ showInfo, transaction }: props): ReactElement => {
  const [toggleInfo, setToggleInfo] = useState<boolean>(false)

  const statusClass = useMemo(() => {
    return `status status-${getStatusColor((transaction.status ?? ''))}`
  }, [transaction.status])

  const statusLabel = useMemo(() => {
    return getStatusLabel((transaction.status ?? ''))
  }, [transaction.status])

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

  const document = useMemo(() => {
    return String(transaction.document).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
  }, [transaction.document])

  return (
    <>
      <tr>
        <td>{toggleInfo
          ? <FontAwesomeIcon icon={faChevronUp} color="#71a3a3" fontSize="16" onClick={() => { setToggleInfo(false) }} />
          : <FontAwesomeIcon icon={faChevronDown} color="#71a3a3" fontSize="16" onClick={() => { setToggleInfo(true) }} />}</td>
        <td>
          <div className={statusClass}>
            {statusLabel}
          </div>
        </td>
        <td> {transaction.source}</td>
        <td>
          <div>{formatedDate}</div>
          <div>{formatedHour}</div>
        </td>
        <td>
            {transaction.creditCardIssuer === 'mastercard'
              ? <img src={Mastercard} alt="Mastercard" />
              : <img src={Pix} alt="Pix" />}
          </td>
        <td> {transaction.code}</td>
        <td> {showInfo ? grossValue : '-'} </td>
        <td> {showInfo ? netValue : '-'}</td>
        <td> {transaction.paymentMethod} </td>
        <td>
          <div>{transaction.store}</div>
          <div>{document}</div>
        </td>
      </tr>
      {toggleInfo
        ? (
            <tr>
              <td className="transaction-info" colSpan={10}> <TransactionInfo transactionId={transaction.id}/></td>
            </tr>
          )
        : null}
    </>
  )
}

export default TransactionsTableRow

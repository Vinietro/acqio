import React, { ReactElement, useCallback, useContext } from 'react'
import Transaction from '../../../interfaces/Transaction'
import TransactionsTableRow from '../TransactionsTableRow'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faArrowDownWideShort, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { ToastContext } from '../../../contexts/toast'

interface props {
  showInfo: boolean
  transactions: Transaction[]
}

const TransactionsTable = ({ showInfo, transactions }: props): ReactElement => {
  const toastContext = useContext(ToastContext)

  const showSortMessage = useCallback(() => {
    toastContext.setToast({
      isVisible: true,
      color: 'alert',
      message: 'Funcionalidade em desenvolvimento'
    })
  }, [])

  return (
    <div className="table">
      <div className="table__header">
        <div className="table__header__title">
          <h2>Lista de vendas</h2>
          <FontAwesomeIcon icon={faCircleQuestion} color="#71a3a3" fontSize="16" />
        </div>
        <div className="table__header__sort" onClick={showSortMessage}>
          <FontAwesomeIcon icon={faArrowDownWideShort} color="#71a3a3" fontSize="16" />
          <div>ORDENAR</div>
          <FontAwesomeIcon icon={faChevronDown} color="#71a3a3" fontSize="16" />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Status</th>
            <th>Origem</th>
            <th>Data e hora</th>
            <th>Bandeira</th>
            <th>Código</th>
            <th>Bruto</th>
            <th>Líquido</th>
            <th>Modo de pagamento</th>
            <th>Loja/Documento</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (<TransactionsTableRow key={transaction.id} showInfo={showInfo} transaction={transaction}/>))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionsTable

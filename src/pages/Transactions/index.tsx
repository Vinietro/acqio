import React, { ReactElement, useCallback, useContext, useEffect, useState } from 'react'
import TransactionsSummary from '../../components/transactions/TransactionsSummary'
import TransactionsTable from '../../components/transactions/TransactionsTable'
import { ToastContext } from '../../contexts/toast'
import Transaction from '../../interfaces/Transaction'
import { getTransactions } from '../../utils/api'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Transactions = (): ReactElement => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [showInfo, setShowInfo] = useState<boolean>(true)
  const toastContext = useContext(ToastContext)

  const requestTransactions = useCallback(async () => {
    try {
      const response = await getTransactions()
      setTransactions([...response])
    } catch (e: any) {
      toastContext.setToast({
        isVisible: true,
        color: 'danger',
        message: e.message
      })
    }
  }, [])

  useEffect(() => {
    void requestTransactions()
  }, [])

  return (
    <div className="transactions">
      <div className="transactions__header">
        <h1>Vendas</h1>
        {showInfo
          ? <FontAwesomeIcon icon={faEye} color="#458189" fontSize="18" onClick={() => { setShowInfo(false) }}/>
          : <FontAwesomeIcon icon={faEyeSlash} color="#458189" fontSize="18" onClick={() => { setShowInfo(true) }} /> }
      </div>

      <hr />

      <TransactionsSummary transactions={transactions} showInfo={showInfo}/>
      <TransactionsTable transactions={transactions} showInfo={showInfo} />
    </div>
  )
}

export default Transactions

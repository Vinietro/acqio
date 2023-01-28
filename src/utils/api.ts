import axios from 'axios'
import Transaction from '../interfaces/Transaction'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 3000
})

const getTransactions = async (): Promise<Transaction[]> => {
  return await axiosInstance.get('transactions').then(res => res.data)
}

const getTransaction = async (id: string): Promise<Transaction> => {
  return await axiosInstance.get(`transaction/${id}`).then(res => res.data)
}

export {
  getTransaction,
  getTransactions
}

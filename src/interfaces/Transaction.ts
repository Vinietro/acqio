export default interface Transaction {
  id: string
  nsuAcqio?: string
  authorizationId?: string
  orderNumber?: string
  status?: string
  createdAt: string
  grossValue: number
  netValue: number
  document: number
  paymentMethod?: string
  source?: string
  creditCardIssuer?: string
  code?: number
  store?: string
}

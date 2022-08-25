export interface ICreateFromParams {
  receiver: string
  ['quickpay-form']: 'shop' | 'small' | 'donate'
  targets: string
  paymentType: 'PC' | 'AC'
  sum: number
  formcomment?: string
  ['short-dest']?: string
  label?: string
  successURL:  string
  ['need-fio']?: boolean
  ['need-email']?: boolean
  ['need-phone']?: boolean
  ['need-address']?: boolean
}

export interface INotificationParams {
  notification_type:	'p2p-incoming' | 'card-incoming'
  operation_id:	string
  amount: number
  withdraw_amount: number
  currency: 643
  datetime: Date
  sender: string
  codepro: boolean
  label: string
  sha1_hash: string
  unaccepted: boolean
}

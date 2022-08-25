import { INotificationParams } from './types/INotificationParams'
import sha1 from 'sha1'

const getStrFromParams = (notificationParams: INotificationParams): string => {
  const { notification_type, operation_id, amount,
          currency, datetime, sender, codepro, label } = notificationParams
  return `${notification_type}&${operation_id}&${amount}&${currency}&${datetime}&${sender}&${codepro}&${process.env.NOTIFICATION_SECRET}&${label}`
}

const validate = (candidate: string, sha1_hash: string) => {
  const shaCandidate = sha1(candidate)
  console.log('sha1', shaCandidate)
  return shaCandidate === sha1_hash
}

export const validateResponse = (notificationParams: INotificationParams): boolean => {
  const candidate = getStrFromParams(notificationParams)
  console.log('candidate', candidate)
  const result = validate(candidate, notificationParams.sha1_hash)
  console.log('result', result)
  return result
}

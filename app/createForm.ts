import axios from "axios"
import { ICreateFromParams } from './types/ICreateFromParams'

export const createForm = async (): Promise<void> => {
  const params: ICreateFromParams = {
    receiver: process.env.RECEIVER ?? '',
    ["quickpay-form"]: "shop",
    targets: "Оплата",
    paymentType: "AC",
    sum: 2,
    formcomment: "Оплата",
    ["short-dest"]: "Оплата",
    label: "777",
    successURL: "https://www.google.com",
  }
  const YOOMONEY_API_URL = process.env.YOOMONEY_API_URL ?? '/'
  const res = await axios.post(YOOMONEY_API_URL, params)
  const responseUrl = res.request.res.responseUrl
  console.log("data", responseUrl)
};

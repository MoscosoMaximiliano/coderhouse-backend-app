import { getHeaders } from '../utils/http'
import AxiosClient from './axiosClient'

const { REACT_APP_BASE_URL, REACT_APP_PAYMENT_ENDPOINT } = import.meta.env

export default class PaymentService {
  constructor () {
    this.client = new AxiosClient()
  }
  createPaymentIntent = ({ productId, callbackSuccess, callbackError }) => {
    const requestInfo = {
      url: `https://coderhouse-backend-production-2030.up.railway.app/api/payments/payment-intents?id=${productId}`,
      callbackSuccess,
      callbackError
    }
    this.client.makePostRequest(requestInfo)
  }

  pay = ({ body, callbackSuccess, callbackError }) => {
    const requestInfo = {
      url: `${REACT_APP_BASE_URL}${REACT_APP_PAYMENT_ENDPOINT}/checkout`,
      body,
      config: getHeaders(),
      callbackSuccess,
      callbackError
    }
    this.client.makePostRequest(requestInfo)
  }
}

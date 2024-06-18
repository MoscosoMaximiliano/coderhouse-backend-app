import { useContext, useState } from 'react'
import { CartContext } from '../provider/CartProvider'
import { Link } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import PaymentForm from '../PaymentForm'

import PaymentService from '../../services/paymentService'

const stripePromise = loadStripe(
  'pk_test_51PSm3hP16cYaa8damfVfvakv1tNrsdLANQABWoIp9N55fHAjHL0Kc2c3SmCW5hM2QMLLvBXRbzF2MbFWRttuDCIV00BXxs1oX9'
)

const PaymentPage = () => {
  const { ClearCart, GetTotalPriceCart, cart } = useContext(CartContext)
  const [clientSecret, setClientSecret] = useState(null)

  useEffect(() => {
    const getClientSecret = async () => {
      console.log(cart)
      const service = new PaymentService()
      service.createPaymentIntent({
        productId: Math.random().toString(36).substring(2, 15),
        callbackSuccess: callbackSuccessPaymentIntent,
        callbackError: callbackErrorPaymentIntent
      })
    }
    cart && getClientSecret()
  }, [cart])

  const callbackSuccessPaymentIntent = res => {
    setClientSecret(res.data.payload.client_secret)
  }

  const callbackErrorPaymentIntent = err => {
    console.log(err)
  }

  return (
    <>
      <Elements stripe={stripePromise} options={{ clientSecret: clientSecret }}>
        <PaymentForm />
      </Elements>
    </>
  )
}

export default PaymentPage

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'

import PaymentForm from '../PaymentForm.jsx'

const stripePromise = loadStripe(
  'pk_test_51PSm3hP16cYaa8damfVfvakv1tNrsdLANQABWoIp9N55fHAjHL0Kc2c3SmCW5hM2QMLLvBXRbzF2MbFWRttuDCIV00BXxs1oX9'
)

const PaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  )
}

export default PaymentPage

import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  PaymentElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js'
import { createAlert, createAlertWithCallback } from '../utils/alerts'

import axios from 'axios'

import React, { useContext } from 'react'
import { CartContext } from './provider/CartProvider'

const PaymentForm = () => {
  // const stripe = useStripe()
  // const elements = useElements()
  const { cart } = useContext(CartContext)

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [postalCode, setPostalCode] = React.useState('')

  // const handleSubmit = async e => {
  //   e.preventDefault()
  //   const { error, paymentIntent } = await stripe.confirmPayment({
  //     elements,
  //     redirect: 'if_required'
  //   })
  //   if (!error) {
  //     createAlertWithCallback(
  //       'success',
  //       '¡Pago completado!',
  //       'El pago ha sido procesado con éxito',
  //       () => window.location.replace('/')
  //     )
  //   } else {
  //     console.log(error)
  //     createAlert('error', 'Error al procesar el pago', error.message)
  //   }
  // }

  const handleSubmit = async e => {
    e.preventDefault()
    axios
      .post(
        'https://coderhouse-backend-production-2030.up.railway.app/api/payment/checkout',
        {
          name,
          email,
          postalCode,
          cart
        }
      )
      .then(res => {
        if (res.data.error)
          return createAlert(
            'error',
            'Error al procesar el pago',
            res.data.error
          )
        else
          createAlertWithCallback(
            'success',
            '¡Pago completado!',
            'El pago ha sido procesado con éxito',
            () => window.location.replace('/')
          )
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <div className='relative max-w-lg px-4 mx-auto'>
        <div className='px-8 py-6 bg-black rounded-lg shadow-xl'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label
                htmlFor='card-number'
                className='block mb-1 text-sm font-medium'
              >
                Card Number
              </label>
              <CardNumberElement
                id='card-number'
                className='px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded'
              />
            </div>
            <div>
              <label
                htmlFor='card-expiration'
                className='block mb-1 text-sm font-medium'
              >
                Card Expiration
              </label>
              <CardExpiryElement
                id='card-expiration'
                className='px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded'
              />
            </div>
            <div>
              <label
                htmlFor='card-cvc'
                className='block mb-1 text-sm font-medium'
              >
                Card CVC
              </label>
              <CardCvcElement
                id='card-cvc'
                className='px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded'
              />
            </div>
            <div>
              <label htmlFor='name' className='block mb-1 text-sm font-medium'>
                Name
              </label>
              <input
                id='name'
                value={name}
                onChange={e => setName(e.target.value)}
                className='w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-1 text-sm font-medium'>
                email
              </label>
              <input
                id='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded'
              />
            </div>
            <div>
              <label htmlFor='PC' className='block mb-1 text-sm font-medium'>
                Postal Code
              </label>
              <input
                id='PC'
                value={postalCode}
                onChange={e => setPostalCode(e.target.value)}
                className='w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded'
              />
            </div>

            <button className='flex items-center justify-center w-full px-3 py-2 text-center text-white bg-indigo-600 rounded'>
              Save Payment
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default PaymentForm

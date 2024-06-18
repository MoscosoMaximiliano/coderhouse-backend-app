import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { createAlert, createAlertWithCallback } from '../utils/alerts'

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async e => {
    e.preventDefault()
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required'
    })
    if (!error) {
      createAlertWithCallback(
        'success',
        '¡Pago completado!',
        'El pago ha sido procesado con éxito',
        () => window.location.replace('/')
      )
    } else {
      console.log(error)
      createAlert('error', 'Error al procesar el pago', error.message)
    }
  }
  return (
    <>
      <form>
        <PaymentElement />
        <div className='flex items-center justify-center'>
          <button className='p-5 bg-orange-300 rounded' onClick={handleSubmit}>
            Pagar
          </button>
        </div>
      </form>
    </>
  )
}
export default PaymentForm

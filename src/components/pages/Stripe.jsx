import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';

import Swal from 'sweetalert2';

const createAlert = (type, title, message) => Swal.fire({
    icon: type,
    title,
    text: message,
    timer: 3000,
    showConfirmButton: false
})

const createAlertWithCallback = (type, title, message, callback) => Swal.fire({
    icon: type,
    title,
    text: message,
    timer: 3000,
    showConfirmButton: false
}).then(result => {
    callback()
})

function Stripe() {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required'
        })
        if (!error) {
            createAlertWithCallback('success', '¡Pago completado!', "El pago ha sido procesado con éxito", () => window.location.replace('/'))
        } else {
            console.log(error);
            createAlert('error', 'Error al procesar el pago', error.message)
        }
    }
    return <>
        <form>
            <PaymentElement />
            <div className={styles.buttonPanel}>
                <button className={styles.genericButton} onClick={handleSubmit}>Pagar</button>
            </div>
        </form>
    </>
}

export default Stripe
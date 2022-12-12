import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = 'pk_test_51MEFRCIkjn5dXH8h6ee6Y2mq0KR0drxCI0XX2aXXGKW2Dy9NeNpIWqmzDhQel1JnpA7R4MHRBQBHkXPcaeR0SfHf00bIMvoyC1'
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return (
    <Elements stripe = {stripeTestPromise}>
        <PaymentForm />
    </Elements>
  )
}

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51M8HVJLsIuvyhKGN7eiT5Ne2S1eY7k9SAPyaSMCuzmHdWzmm74IKFWS5imFdgHYcUcup5q2w3XpMbDMUKPsjtuX900r9gMNccg"

const stripeTestPromise = loadStripe(PUBLIC_KEY)
const  StripeContainer = () => {
	return (
		
			<PaymentForm />
		
	)
}
export default StripeContainer;
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


// todo

const stripePromise = loadStripe(import.meta.env.VITE_PAMENT_KEY)
const Payment = () => {
    return (
        <div>
            <div>
                <h1 className="mb-7">PAYMENT</h1>
            </div>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
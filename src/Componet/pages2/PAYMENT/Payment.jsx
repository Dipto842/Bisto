import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";


// todo

const stripePromise = loadStripe('pk_test_51PZaoq2NKg56s1Fe0zmbQB4LDL18Jf27Q5ckOJ9OnrBI4sI6gGi63wXsM1pyKNWpNxPqqizhHavvHYOOG6mxJh4z005B6ZL1pt')
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
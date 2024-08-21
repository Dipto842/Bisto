import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

import Axios from "../../../castsomgug/axios/axios";
import { Athcontes } from "../../../Provadar/AthoProvadar";


import Usemenu from "../../../castsomgug/Usemenu/Usemenu";
import Useten from "../../../castsomgug/axios/tenstack/Useten";


const CheckoutForm = () => {
  const { user } = useContext(Athcontes)
  const [erro, setErro] = useState(' ')
  const [crids,refetch] = Useten()
  const [transactionId, settransaction] = useState(' ')
  const [clientSecret, setClientSecret] = useState(" ");
  console.log('xxxxxxx', clientSecret);
  const totalprice = crids.reduce((total, item) => total + item.price, 0)
  console.log('xxxxxxx', clientSecret);
  const ax = Axios()
  const stripe = useStripe()
  const elements = useElements()


  useEffect(() => {
    ax.post('/create_payment_intent', { price: totalprice })
      .then(res => {
        console.log('xxxxxxx', res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      })
  }, [ax, totalprice])




  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {

      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {

      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card

    })
    if (error) {
      console.log('pement methor eroor', error)
      setErro(error.message)
    }
    else {
      console.log('pement methor', paymentMethod);
      setErro(' ')

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your payment has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }


    const { paymentIntent, error: confirmerror } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user.displayName,
          email: user.email
        }
      }
    })
    if (confirmerror) {
      console.log('error', confirmerror);

    }
    else {
      console.log('paymentIntent', paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("succeeded", paymentIntent.id);
        settransaction(paymentIntent.id)
        // save pemonent in the databage

        const payment = {
          email: user.email,
          print: totalprice,
          transactionId: paymentIntent.id ,
          data: new Date(),
          cardId: crids.map(item => item._id),
          menuId: crids.map(item => item.menuid),
          status: 'pending'
        }
        const res = await ax.post('/payment',payment)
        console.log('pement save',res);
        refetch()
        if(res.data?.paymentrejart?.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for the payment",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    }
  }


  return (
    <form className="w-96" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {

              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{erro} </p>
      {transactionId && <p className="text-orange-500"> your transaction id {transactionId}</p>}
    </form>
  );
};

export default CheckoutForm;
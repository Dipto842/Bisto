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
  const [transactionId, settransaction] = useState('')
  const [clientSecret, setClientSecret] = useState("");

    const totolardiscount = crids.reduce((total, item) => total + Number(item.discount || 0), 0)

    const totalprich = crids.reduce((total, item) => total + Number(item.price), 0)
    const totarAmaont = totalprich-totolardiscount
   
   
    const ax = Axios()
    const elements = useElements()
    const stripe = useStripe()


  useEffect(() => {
    ax.post('/create_payment_intent', { price: totarAmaont })
      .then(res => {
       
        setClientSecret(res.data.clientSecret)
      })
  }, [ totarAmaont])




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
   
      setErro(error.message)
    }
    else {
    
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
      // console.log('error', confirmerror);

    }
    else {
    
      if (paymentIntent.status === "succeeded") {
       
        settransaction(paymentIntent.id)
        // save pemonent in the databage

        const payment = {
          email: user.email,
          print: totarAmaont,
          transactionId: paymentIntent.id ,
          data: new Date(),
          cardId: crids.map(item => item._id),
          menuId: crids.map(item => item.menuid),
          status: 'pending'
        }
        const res = await ax.post('/payment',payment)
      
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
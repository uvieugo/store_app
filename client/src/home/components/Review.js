import React from 'react'
import { PaystackButton } from 'react-paystack'
import {addOrder, verifyTransaction} from '../../data/connection'
const publicKey = "pk_test_5d5facf8af8745fa457407f225166220f2d4d426"

const Review = (props) => {
  const componentProps = {
    email: props.myOrder.email,
    amount: props.myOrder.totalAmount * 100,
    metadata: {
      name: props.myOrder.firstName + " " + props.myOrder.lastName,
      phone: props.phone,
    },
    reference: props.myOrder.trxRef,
    publicKey: publicKey,
    text: "Pay With PayStack",
    onSuccess: () => handlePayComplete(),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),

  }

  const handlePayComplete = () => {
    console.log("add order to db here")
    verifyTransaction(props.myOrder.trxRef).then(response => {
      console.log(response.data)
      addOrder(props.myOrder).then(response => {
        console.log(response.data.order_num)
        props.setOrder(prev => {
          let newOrder = {...prev}
          newOrder.orderNum = response.data.order_num
          return newOrder
        })
      })
      props.setPage("complete")
    })
  }

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-10 bg-light p-4 text-center">
          <p>Order Name: {props.myOrder.firstName + "" + props.myOrder.lastName}</p>
          <p>Order Email: {props.myOrder.email}</p>
          <p>Order Amount: ₦{props.myOrder.totalAmount}</p>
          <PaystackButton className="btn btn-secondary btn-lg" {...componentProps} />
          {/* <button onClick={handlePayComplete}>Place Order</button> */}
        </div>
      </div>
    </div>
  )
}

export default Review
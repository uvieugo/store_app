import React from 'react'
import { Button } from 'react-bootstrap';

const Complete = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 bg-light p-4 text-center">
          
          <p>Your order number is {props.myOrder.orderNum}</p>

          <Button variant="secondary" size="lg" onClick={props.resetApp}>Make New Order</Button>
        </div>
      </div>
    </div>
  )
}

export default Complete
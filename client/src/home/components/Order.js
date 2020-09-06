import React, { Fragment } from 'react'
import randomstring from 'randomstring'
import OrderForm from './OrderForm';

const Order = (props) => {
  const orderitems = props.cart.items.map( (item,index) => {
    return (
            <Fragment key={item.cartId}>
            <tr>
              <td className="quantity">{item.count} </td>
              <td className="title">
                <span className="name">{item.name}</span>
              </td>
              <td className="price">₦{item.price.toFixed(2)}</td>
            </tr>
            {item.options ?
              item.options.map((op,index) =>{
              return <tr key={index}>
                <td></td>
                <td>{op.name}</td>
                <td>{op.price}</td>
              </tr>
            })
            : null }
            </Fragment>
            )
  })

  const handleOrder = (userdetails) => {
    props.setPage("review")
    
    let newOrder = {}
    props.setOrder(prev => {
      newOrder =  {
        ...userdetails,
        ...props.cart,
        orderNum: "",
        trxRef: `order-${randomstring.generate(8)}`,
        order_type: props.orderType

      }
      return newOrder
    })
    
  }

  return(  
    <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5">
            <div className="cart-details shadow bg-white mb-4">
              <div className="bg-dark text-light p-4"><h5 className="mb-0">Your order</h5></div>
              <table className="cart-table">
                <tbody>
                  {orderitems}
                </tbody>
              </table>
              <div className="cart-summary">
                <div className="row">
                  <div className="col-7 text-right text-muted">Order total:</div>
                  <div className="col-5"><strong>₦<span className="cart-products-total">{props.cart.totalAmount.toFixed(2)}</span></strong></div>
                </div>
                <hr className="hr-sm" />
                <div className="row text-lg">
                  <div className="col-7 text-right text-muted">Total:</div>
                  <div className="col-5"><strong>₦<span className="cart-total">{props.cart.totalAmount.toFixed(2)}</span></strong></div>
               </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 order-lg-first">
            <div className="bg-white p-4 p-md-5 mb-4">
            <h4 className="border-bottom pb-4"><i className="fas fa-user mr-3 text-secondary"></i>Your information</h4>
            <OrderForm handleOrder={handleOrder}/>
          </div>
          </div>
        </div>
      </div>  
    
  )
}

export default Order
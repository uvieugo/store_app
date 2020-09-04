import React from 'react'

const CartItem = (props) => {
  let menuoptions
  if (props.item.options) {
    menuoptions = props.item.options.map((op,index) => {
      return (
        <div key={index} className="row no-gutters">
          <div className="col-3"></div>
          <div className="col-5">{op.name}</div>
          <div className="col-3">₦{op.price.toFixed(2)}</div>
          <div className="col-1"></div>
        </div>
      )
    })
  }
  return(
    <div className="cart-list-item">
      <div className="row no-gutters">

        <div className="col-3 quantity">
          {/* <button onClick={ () => props.decrementItem(props.item.objectNum)}><i className="fas fa-minus-square"></i></button> */}
          {props.item.count}
          {/* <button onClick={ () => props.incrementItem(props.item.objectNum)}><i className="fas fa-plus-square"></i></button> */}
        </div>

        <div className="col-5">
          {props.item.name}
        </div>
        <div className="col-3">
          <span className="price">₦{props.item.price.toFixed(2)}</span>
        </div>
        <div className="col-1">
          <button className="remove-item" onClick={ () => props.setcart(props.item.cartId) }>X</button>
        </div>
      </div>

      <div>
         {menuoptions}
      </div>
    </div>
    
  )
}

export default CartItem
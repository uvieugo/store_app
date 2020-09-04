import React from 'react'
import CartItem from './CartItem'
import _ from 'lodash'

const Cart = (props) => {
  const removeFromCart = (cartId) => {
    props.setcart( prevcart => {
      let newcart = {...prevcart}
      let itemPrice = 0
      let optionsAmount = 0
      // newcart.items = prevcart.items.filter( item => {
      //   if (item.objectNum === objectNum) {itemPrice = item.price}
      //   return item.objectNum !== objectNum
      // })
      // newcart.totalPrice -= price
      newcart.items = prevcart.items.filter( item => {
        if (item.cartId === cartId) {
          itemPrice = item.price
          if(item.options){
            optionsAmount = item.options.reduce(
              (accumulator, currentValue) => accumulator + currentValue.price
              ,0
            );
          }
        }
        return item.cartId !== cartId
      })

      newcart.totalAmount-= (itemPrice + optionsAmount)
      return newcart
    })

  }

  const incrementItem = (objectNum) => {
    let price = _.find(props.menuitems, {object_num: objectNum}).price
    props.setcart ( prevcart => {
      let newcart = {...prevcart}
      newcart.items.map( item => {
        if (item.objectNum === objectNum) {
          item.count += 1
          item.price += price
        }
        return item
      })
      newcart.totalPrice += price
      return newcart
    })
  }

  const decrementItem = (objectNum) => {
    let price = _.find(props.menuitems, {object_num: objectNum}).price
    props.setcart ( prevcart => {
      let newcart = {...prevcart}
      newcart.items = _.filter(prevcart.items, (item) =>{
        if (item.objectNum === objectNum) {
              item.count -= 1
              item.price -= price
            } 
        return item.count !== 0
      })
      newcart.totalPrice -= price
      return newcart
    })
  }

  const handleOrderStatus = () => {
    props.setPage("checkout")
  }
  const cartitems = props.cart.items.map(item => {
    return <CartItem 
              key={item.cartId} 
              item={item}
              incrementItem={incrementItem}
              decrementItem={decrementItem} 
              setcart={removeFromCart}/>
  })
  return(
    <div>
    <h3>Your Cart</h3>
    { props.cart.items.length === 0 ? 
      <span className="empty-cart">No Items in cart</span>
    :
      <div className="cart-items">
        {cartitems}
        <div className="cart-list-item text-right">
        <span className="subtotal">Subtotal:</span><span> ₦{props.cart.totalAmount.toFixed(2)} </span>
        </div>
        <div className="cart-list-item"><button className="btn btn-outline-secondary" onClick={handleOrderStatus}>CheckOut</button></div>
      </div>
    }
    </div>
  )
}

export default Cart
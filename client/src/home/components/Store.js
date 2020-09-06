import React, {useState, useEffect} from 'react'
import Header from './Header'
import Menu from './Menu'
import Order from './Order'
import Complete from './Complete'
import Review from './Review'
import SetOrderType from './SetOrderType'
import {getMenuItems} from '../../data/connection'

const cartitem = {
  items: [],
  totalAmount: 0.0,
  status: false
}
const Store = (props) => {
  const [page, setPage] = useState('menu')
  const [ menuItems, setMenuItems] = useState([])
  const [ myCart, setCart] = useState(cartitem)
  const [myOrder, setOrder] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [orderType, setOrderType] = useState("")

   const resetApp = () => {
    setPage("menu")
    setCart({
      items: [],
      totalAmount: 0.0,
      status: false
    })
    setOrder({})
  }
  useEffect(() => {
    getMenuItems()
      .then(data => {
        setMenuItems(data.data)
      })
      setIsLoading(false)
  }, [])
  
  if( page === 'menu'){
    return(
      <div className="wrapper">
      <Header text={"Quick Service Menu"}/>
      {
        orderType === "" ?
        <SetOrderType  setOrderType={setOrderType} /> 
        :
        <Menu menuItems={menuItems} setPage={setPage} cart={myCart} setCart={setCart} isLoading={isLoading}/> 
      }
      </div>
    )
  }
  if( page === 'checkout'){
    return(
      <div className="wrapper">
      <Header text={"Checkout"}/>
      <Order cart={myCart} setOrder={setOrder} setPage={setPage} myOrder={myOrder} orderType={orderType}/>
      </div>
    )
  }
  if( page === 'review'){
    return(
      <div className="wrapper">
      <Header text={"Review Order"}/>
      <Review myOrder={myOrder} setOrder={setOrder} setPage={setPage} />
      </div>
    )
  }
  if( page === 'complete'){
    return(
      <div className="wrapper">
      <Header text={"Order Complete"}/>
      <Complete myOrder={myOrder} resetApp={resetApp}/>
      </div>
    )
  }
}

export default Store
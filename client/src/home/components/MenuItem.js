import React, {useState, useEffect} from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const MenuItem = (props) => {
  
  const [showOptions, setShowOptions] = useState(false)
  const [menuOptions, setMenuOptions] = useState([])

  useEffect(() => {
    let modOptions = props.menuitem.options.map( op => {
      let n = {...op}
      n.selected = false
      return n
    })
    setMenuOptions(modOptions)
  },[])

  const addToCart = (e) => {
    e.preventDefault()
    let options = menuOptions.filter( op => op.selected === true)
    let item ={
      objectNum: props.menuitem.object_num,
      name: props.menuitem.name,
      price: props.menuitem.price,
      count: 1,
    }
    let optionsAmount = 0
    if(options.length !== 0) { 
      item.options = options
      let initialValue = 0;
      optionsAmount = item.options.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price
        ,initialValue
      );
    }
    item.optionsAmount = optionsAmount
    item.cartId = Date.now()
    props.setcart( prevcart => {
        let newcart = { ...prevcart}
        // let isItemInCart = false
        // newcart.items.map(previtem => {
        //   if (item.objectNum === previtem.objectNum){
        //       previtem.count += 1
        //       previtem.price += item.price
        //       isItemInCart = true
        //    } 
        //    return item
        // })
        // if (!isItemInCart) { newcart.items.push(item) }
        newcart.totalAmount += (item.price + item.optionsAmount)
        newcart.items.push(item)
        return newcart
    })
    if(showOptions===true) {setShowOptions(!showOptions)}
  }

  const handleInputChange = (e) => {
    let {name} = e.target
    setMenuOptions(prev => {
      let modOptions = [...prev]
      let searchItem = modOptions.findIndex(item => item.name === name)
      modOptions[searchItem].selected = !modOptions[searchItem].selected
      return modOptions
    })
  }

  const menuOptionsList = menuOptions.map( op => {
    return (
      <div key={op.id} className="option">
      <label className="pl-2 pr-2 d-block">  
      <input
        name={op.name}            
        type="checkbox"
        className="mr-2"
        checked={op.selected}
        onChange={handleInputChange} 
        />
        <span>{op.name}</span> <span className="text-muted small">₦{op.price}</span>
      {/* {`${op.name}`} ₦{op.price} */}
    </label>
    </div>
    )
  })

  const handleShowOptions = (e) => {
    props.menuitem.options.length === 0 ? addToCart(e) : setShowOptions(!showOptions)
  }
  return(
    
    <div className="menu-list-item">
      <div id={props.menuitem.object_num} className="row align-items-center">
        <div className="name col-sm-6 col-5 mb-2 mb-sm-0">
        {props.menuitem.name}
        {/* { props.menuitem.options.length === 0 ? null : <span className="small ml-2" onClick={() => setShowOptions(!showOptions)}>Options</span> } */}
        {/* { props.menuitem.options.length === 0 ? null : <span className="small ml-2" onClick={() => setShowOptions(!showOptions)}>Options</span> } */}   
        </div>
        <div className="col-sm-6 col-7 text-right">
          <span className="mr-2 price">₦{props.menuitem.price}</span>

          {/* <button className="btn btn-outline-secondary btn-sm" onClick={addToCart}>Add to Cart</button> */}
          <button className="btn btn-outline-secondary btn-sm" onClick={handleShowOptions}>Add to Cart</button>

        </div>
      </div>
      <Modal
          isOpen={showOptions}
          // onAfterOpen={afterOpenModal}
          className="mymodal"
          overlayClassName="mymodal-overlay"
          onRequestClose={() => setShowOptions(false)}
          // style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="">
            <div className="menu-options">
              <div className="header text-center">Select Any Extra Items</div>
              {menuOptionsList}
            </div>
            <button className="btn btn-secondary btn-block rounded-0" onClick={addToCart}>Add to Cart</button> 
        </div>
        </Modal>
    </div>
    
  )

}

export default MenuItem
import React, {useState} from 'react'
import MenuItem from './MenuItem'
import FILTER_MAP from './FilterMap'
import FilterButton from './FilterButton'
import Cart from './Cart'

const FILTER_NAMES = Object.keys(FILTER_MAP);

const Menu = (props) => {
  
  const [filter, setFilter] = useState('All');

  const menucomponents = props.menuItems.filter(FILTER_MAP[filter]).map( item => {
    return <MenuItem 
      key={item.id}
      menuitem={item}
      setcart={props.setCart}
    />
  })

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton key={name} name={name} isPressed={name === filter} setFilter={setFilter}/>
  ));
  return(
    <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="cat-filter">
          {filterList}
        </div>
      </div>
      <div className="col-md-8">
        <div className="main">
          <div className="menu-list">
            {menucomponents}
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="cart">
          <Cart cart={props.cart} setcart={props.setCart} menuitems={props.menuItems} setPage={props.setPage} />
        </div>
      </div>
    </div>
    </div>
    
   
  )
}

export default Menu
import React from 'react'

const MenuType = (props) => {
  const menuTypeList = props.menutype.map(item => (<li key={item.id}>{item.name}</li>))
  return(
    <div className="col-md-12">
      <h3>Menu Types</h3>
        <ul>
          {menuTypeList}
        </ul>
    </div>
  )
}

export default MenuType
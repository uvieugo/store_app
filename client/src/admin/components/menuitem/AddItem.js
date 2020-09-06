import React from 'react'

const AddItem = (props) => {
  const menuclassoptions = props.menuclass.map( item => {
    return ( <option key={item.id} value={item.name}>{item.name}</option>)
  })
  const handleChange = (e) => {
    let {name, value} = e.target
    props.setMenuItem( prev => {
      let newItem = {...prev}
      if(name === "price"){
        newItem[name] = value === "" ? 0 : parseInt( value )
      }
      else{
        newItem[name] = value
      }
      return newItem
    })
  }
  return (
    <div className="card">
          <div className="card-body">
            <div className="form">
              <div className="form-group">
              <label htmlFor="name">Menu Item Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="form-control"
                  placeholder="Item Name"
                  value={props.menuItem.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="object_num">Menu Item Object Number</label>
                <input 
                  type="text" 
                  name="object_num"
                  className="form-control"
                  placeholder="Micros Object Num"
                  value={props.menuItem.object_num}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Menu Item Price</label>
                <input 
                  type="text" 
                  name="price"
                  className="form-control"
                  placeholder="Item Price"
                  value={props.menuItem.price}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <select name="menu_class" value={props.menuItem.menu_class} onChange={handleChange} className="custom-select">
                  {menuclassoptions}
                </select>
              </div>
              <div className="">
                <button className="btn btn-primary btn-sm mr-1" onClick={props.handleClick}>{props.isUpdate ? "Update Menu Item" : "Add Menu Item" }</button>
                <button className="btn btn-secondary btn-sm" onClick={props.handleCancel} style={ props.isUpdate ? {} :{display: "none"}  }>Cancel</button>
              </div>
            </div>
          </div>  
        </div>
  )
}

export default AddItem
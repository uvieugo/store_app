import React, {useState} from 'react'
// import {updateMenuItem, getMenuItems, addMenuItem} from '../../../data/connection'
// const defMenuItem = {
//   name: "",
//   object_num: "",
//   menu_class: "",
//   price: 0
// }
const AddItem = (props) => {
  const menuclassoptions = props.menuclass.map( item => {
    return ( <option key={item.id} value={item.name}>{item.name}</option>)
  })
  const handleChange = (e) => {
    let {name, value} = e.target
    props.setMenuItem( prev => {
      let newItem = {...prev}
      if(name === "price"){
        newItem[name] = parseInt( value )
      }
      else{
        newItem[name] = value
      }
      return newItem
    })
  }
  // const handleClick = (e) =>{
  //   e.preventDefault()
  //   if (Object.values(props.menuItem).includes("")){
  //       alert('please complete the form')
  //       return
  //   }
  //   if(props.isUpdate){
  //     updateMenuItem(props.menuItem).then(response =>{
  //       if(response.status === 200 && response.statusText === 'OK'){
  //         console.log(response.data)
  //         console.log('debug')
  //         getMenuItems().then(result => props.setmenuitems(result.data))
  //       }
  //       props.setMenuItem(defMenuItem)
  //       props.setIsUpdate( prev => !prev )
  //     })
  //   }else{
  //     addMenuItem(props.menuItem).then(response =>{
  //       if(response.status === 201 && response.statusText === 'Created'){
  //         console.log(response.data)
  //         props.setmenuitems(prev => {
  //           let newData = [...prev]
  //           newData.push(response.data)
  //           return newData
  //         })
  //         props.setMenuItem(defMenuItem)
  //       }
  //     })
  //   }
  // }

  // const handleCancel = () => {
  //   props.setIsUpdate( prev => !prev )
  //   props.setMenuItem(defMenuItem)
  // }
  return (
    <div className="card">
          <div className="card-body">
            <div className="form">
              <div className="form-group">
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
              <div className="col">
                <button className="btn btn-secondary" onClick={props.handleClick}>{props.isUpdate ? "Update Menu Item" : "Add Menu Item" }</button>
                <button className="btn btn-secondary" onClick={props.handleCancel} style={ props.isUpdate ? {} :{display: "none"}  }>Cancel</button>
              </div>
            </div>
          </div>  
        </div>
  )
}

export default AddItem
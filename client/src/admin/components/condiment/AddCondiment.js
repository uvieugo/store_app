import React from 'react'
import {getCondiments, addCondiment, updateCondiment} from '../../../data/connection'
import toastr from 'toastr'
const AddCondiment = (props) => {
  const defCondiment = {
    name: "",
    object_num: "",
    price: 0
  }
  
  const handleChange = (e) => {
    let {name, value} = e.target
    props.setCondiment( prev => {
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

  const handleCancel = () => {
    props.setIsUpdate( prev => !prev )
    props.setCondiment(defCondiment)
  }

  const handleClick = (e) =>{
    e.preventDefault()
    if (Object.values(props.condiment).includes("")){
        alert('please complete the form')
        return
    }
    if (props.isUpdate){
      updateCondiment(props.condiment).then(response =>{
        if(response.status === 200 && response.statusText === 'OK'){
          getCondiments().then(result => props.setCondiments(result.data))
        }
        props.setCondiment(defCondiment)
        props.setIsUpdate( prev => !prev )
        toastr.info("Successfully Updated")
      })
    }else{
      addCondiment(props.condiment).then(response =>{
        if(response.status === 201 && response.statusText === 'Created'){
          props.setCondiments(prev => {
            let newData = [...prev]
            newData.push(response.data)
            return newData
          })
          toastr.info("Successfully Added")
          props.setCondiment(defCondiment)
        }
      })
    }
  }

  return(
    <div className="card">
          <div className="card-body">
            <div className="form">
              <div className="form-group">
                <label htmlFor="name">Condiment Name</label>
                <input
                id="name"
                type="text" 
                name="name"
                className="form-control"
                placeholder="Item Name"
                value={props.condiment.name}
                onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="object_num">POS Object Number</label>
                <input
                  id="object_num"
                  type="text" 
                  name="object_num"
                  className="form-control"
                  placeholder="Micros Object Num"
                  value={props.condiment.object_num}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  type="text" 
                  name="price"
                  className="form-control"
                  placeholder="Item Price"
                  value={props.condiment.price}
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <button className="btn btn-primary btn-sm mr-1" onClick={handleClick}>{props.isUpdate ? "Update Condiment": "Add Condiment" }</button>
                <button className="btn btn-secondary btn-sm" onClick={handleCancel} style={ props.isUpdate ? {} :{display: "none"}  }>Cancel</button>
              </div>
            </div>
          </div>  
        </div>
  )
}

export default AddCondiment
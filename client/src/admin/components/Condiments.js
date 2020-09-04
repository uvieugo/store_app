import React, {useState, useMemo} from 'react'
import {getCondiments, addCondiment, updateCondiment} from '../../data/connection'
// import { useTable } from 'react-table'
import Table from './Table'

const Condiments = (props) => {

  const defCondiment = {
    name: "",
    object_num: "",
    price: 0
  }
  const [condiment, setCondiment] = useState(defCondiment)

  const [isUpdate, setIsUpdate] = useState(false)

  const columns = useMemo( 
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        isVisible: false
      },
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Object Num',
        accessor: 'object_num'
      },
      {
        Header: 'Price',
        accessor: 'price'
      }
    ], [isUpdate]
  )
  const data = useMemo( () => props.condiments, [props.condiments])

  const handleChange = (e) => {
    let {name, value} = e.target
    setCondiment( prev => {
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

  const handleClick = (e) =>{
    e.preventDefault()
    if (Object.values(condiment).includes("")){
        alert('please complete the form')
        return
    }
    if (isUpdate){
      updateCondiment(condiment).then(response =>{
        // console.log(response.statusText)
        // console.log(response.status)
        if(response.status === 200 && response.statusText === 'OK'){
          console.log(response.data)
          console.log('debug')
          getCondiments().then(result => props.setcondiments(result.data))
        }
        setCondiment(defCondiment)
        setIsUpdate( prev => !prev )
      })
    }else{
      addCondiment(condiment).then(response =>{
        if(response.status === 201 && response.statusText === 'Created'){
          console.log(response.data)
          props.setcondiments(prev => {
            let newData = [...prev]
            newData.push(response.data)
            return newData
          })
          setCondiment(defCondiment)
        }
      })
    }
  }

  const handleCancel = () => {
    setIsUpdate( prev => !prev )
    setCondiment(defCondiment)
  }

  return(
    <div className="row">
      <div className="col-md-4">
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
            value={condiment.name}
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
            value={condiment.object_num}
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
            value={condiment.price}
            onChange={handleChange}
          />
            </div>
            <div className="col">
            <button className="btn btn-secondary" onClick={handleClick}>{isUpdate ? "Update Menu Item": "Add Menu Item" }</button>
            <button className="btn btn-secondary" onClick={handleCancel} style={ isUpdate ? {} :{display: "none"}  }>Cancel</button>
            </div>
          </div>
        </div>  
      </div>
      </div>
      <div className="col-md-8">
      <div className="card">
        <div className="card-body">
        <Table columns={columns} data={data} setCondiment={setCondiment} setIsUpdate={setIsUpdate} isUpdate={isUpdate}/>
        </div>
      </div>
      </div>   
    </div>
  )
}

export default Condiments
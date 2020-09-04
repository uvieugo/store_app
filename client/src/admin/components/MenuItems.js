import React, {useState, useMemo, useEffect} from 'react'
import {addMenuItem, updateMenuItem, getMenuItems} from '../../data/connection'
import Table from './Table'
import AddItem from './menuitem/AddItem'
import AddOption from './menuitem/AddOption'

const MenuItem = (props) => {
  const defMenuItem = {
    name: "",
    object_num: "",
    menu_class: "",
    price: 0
  }
  const [isUpdate, setIsUpdate] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [menuItem, setMenuItem] = useState(defMenuItem)
  const [optionsFor, setOptionsFor] = useState("")
  const [menuOptions, setMenuOptions] = useState([])
  const data = useMemo (() => props.menuitems, [props.menuitems])

  const columns = useMemo( () =>  [
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
    accessor: 'object_num',
  },
  {
    Header: 'Price',
    accessor: 'price',

  },
  {
    Header: 'Menu Class',
    accessor: 'menu_class',
  }
  ],[isUpdate])
  
  const handleClick = (e) =>{
    e.preventDefault()
    if (Object.values(menuItem).includes("")){
        alert('please complete the form')
        return
    }
    if(isUpdate){
      updateMenuItem(menuItem).then(response =>{
        if(response.status === 200 && response.statusText === 'OK'){
          getMenuItems().then(result => props.setmenuitems(result.data))
        }
        setMenuItem(defMenuItem)
        setIsUpdate( prev => !prev )
      })
    }else{
      addMenuItem(menuItem).then(response =>{
        if(response.status === 201 && response.statusText === 'Created'){
          props.setmenuitems(prev => {
            let newData = [...prev]
            newData.push(response.data)
            return newData
          })
          setMenuItem(defMenuItem)
        }
      })
    }
  }
  const handleCancel = () => {
    setIsUpdate( prev => !prev )
    setMenuItem(defMenuItem)
  }

  const handleModalShow = (row) => {
    setShowModal(true)
    setOptionsFor(row.original)
    setMenuOptions(row.original.options)
    // console.log(row.original)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const optionsList = menuOptions.map( option => {
    return (<li key={option.id}>{option.name}</li>)
  })
  return(
    <div className="row">
      <div className="col-md-4">
        <AddItem 
          menuclass={props.menuclass}
          menuItem={menuItem}
          setMenuItem={setMenuItem}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
          setmenuitems={props.setmenuitems}
          handleClick={handleClick}
          handleCancel={handleCancel}
        />
        {showModal &&
          <div className="card">
            <div className="card-header">
              Option for {optionsFor.name}
            </div>
            <div className="card-body">
              Options available
              <ul>
              {optionsList}
              </ul>
              <AddOption condiments={props.condiments} menuitem={optionsFor} setmenuitems={props.setmenuitems}/>
            </div>
          </div>
        }
      </div>
      <div className="col-md-8">
      <div className="card">
        <div className="card-body">
        <Table 
          columns={columns} 
          data={data} 
          setCondiment={setMenuItem} 
          setIsUpdate={setIsUpdate} 
          isUpdate={isUpdate} 
          handleModalShow={handleModalShow}
          />
        </div>
      </div>
      </div>   
    </div>
  )
}

export default MenuItem
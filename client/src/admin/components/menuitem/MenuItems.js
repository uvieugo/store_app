import React, {useState, useMemo} from 'react'
import {addMenuItem, updateMenuItem, getMenuItems} from '../../../data/connection'
import Table from './Table'
import AddItem from './AddItem'
import MenuOption from './MenuOption'
import Modal from 'react-modal'
import toastr from 'toastr'

Modal.setAppElement('#root')

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
        toastr.info("Please Compete the form")
        return
    }
    if(isUpdate){
      updateMenuItem(menuItem).then(response =>{
        if(response.status === 200 && response.statusText === 'OK'){
          getMenuItems().then(result => props.setmenuitems(result.data))
        }
        setMenuItem(defMenuItem)
        setIsUpdate( prev => !prev )
        toastr.info("Successfully Updated")
      })
    }else{
      addMenuItem(menuItem).then(response =>{
        if(response.status === 201 && response.statusText === 'Created'){
          props.setmenuitems(prev => {
            let newData = [...prev]
            newData.push(response.data)
            return newData
          })
          toastr.info("Successfully Added")
          setMenuItem(defMenuItem)
        }
      })
    }
  }
  const handleCancel = () => {
    setIsUpdate( prev => !prev )
    setMenuItem(defMenuItem)
  }

  const removeOption = (e) => {
    e.preventDefault()
    let option_id = e.target.attributes.option_id.value
    console.log(option_id)
    console.log(props.menuitem)
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
        <Modal
          isOpen={showModal}
          className="mymodal"
          overlayClassName="mymodal-overlay"
          onRequestClose={() => setShowModal(false)}
          contentLabel="Example Modal"
        >
        <MenuOption condiments={props.condiments} menuitem={optionsFor} setmenuitems={props.setmenuitems} />
        </Modal>
        {/* {showModal &&
          <MenuOption condiments={props.condiments} menuitem={optionsFor} setmenuitems={props.setmenuitems} />
        } */}
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
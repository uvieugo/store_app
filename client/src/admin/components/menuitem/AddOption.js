import React, {useState} from 'react'
import {addMenuOption, handleError} from '../../../data/connection'
import toastr from 'toastr'

const AddOption = (props) => {
  const [option, setOption] = useState("")
  const options = props.condiments.map(c => {
    return ( <option key={c.id} value={c.id}>{c.name}</option>)
  })
  const handleChange = (e) => {
    let {value} = e.target
    setOption(value)
  }
  const handleClick = () => {
    let newOption = {
      menu_item_id: props.menuitem.id,
      condiment_id: option
    }
    addMenuOption(newOption)
    .then(response =>{
      if(response.status === 201 && response.statusText === 'Created'){
        props.setmenuitems( prev => {
          let modItems = [...prev]
          modItems.map( item => {
            if(item.id === props.menuitem.id){
              item.options.push(response.data)
              toastr.info(`${response.data.name} added as option for ${item.name}`)
            }
            return item
          })
          return modItems
        })
      }else{
        toastr.info(`There was a problem adding the option, Contact your administrator`)
      }
    }).catch(response => toastr.info('Option not added'))
  }
  return(
    <>
    <select name="menu_class" value={option} onChange={handleChange} className="custom-select">
      {options}
    </select>
    <button className="btn btn-primary" onClick={handleClick}>Add Option</button>
    </>
  )
}

export default AddOption
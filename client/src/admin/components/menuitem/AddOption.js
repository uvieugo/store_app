import React, {useState} from 'react'
import {addMenuOption, getMenuItems} from '../../../data/connection'

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
    // console.log(newOption)
    addMenuOption(newOption).then(response =>{
      if(response.status === 201 && response.statusText === 'Created'){
        // console.log(result)
        getMenuItems().then(result => props.setmenuitems(result.data))
      }
    })
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
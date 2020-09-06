import React from 'react'
import AddOption from './AddOption'
import {removeMenuOption} from '../../../data/connection'
import { Button, Image, List } from 'semantic-ui-react'

const MenuOption = (props) => {
  
  const removeOption = (e) => {
    e.preventDefault()
    let option_id = parseInt(e.target.attributes.option_id.value)
    removeMenuOption(option_id).then(response => {
      props.setmenuitems( prev => {
        let modItems = [...prev]
        modItems.map( item => {
          if(item.id === props.menuitem.id){
            item.options = item.options.filter(option =>  option.option_id !== option_id )
          }
          return item
        })
        return modItems
      })
    })
  }
  const optionsList = props.menuitem.options.map( option => {
    return (
      <li key={option.id} className="list-group-item">{option.name} <button className="btn btn-sm btn-danger float-right" onClick={removeOption} option_id={option.option_id}>Remove</button></li>
    )
  })
  return(
    <div className="card">
      <div className="card-header">
        Option for {props.menuitem.name}
      </div>
    <div className="card-body">
      <ul className="list-group">
          {optionsList}
      </ul>
          
        <AddOption condiments={props.condiments} menuitem={props.menuitem} setmenuitems={props.setmenuitems}/>
      </div>
    </div>
  )
}

export default MenuOption
import React, {useState} from 'react'
import {addMenuClass, handleError} from '../../data/connection'
const MenuClass = (props) => {
  const [formData, setFormData] = useState("")

  const handleChange = (e) => {
    setFormData(e.target.value)
  }
  const handleClick = (e) =>{
    e.preventDefault()
    addMenuClass(formData).then(response =>{
      if(response.status === 201 && response.statusText === 'Created'){
        console.log(response.data)
        props.setmenuclass(prev => {
          let newData = [...prev]
          newData.push(response.data)
          return newData
        })
        setFormData("")
      }
    }).catch(error => handleError(error))
  }

  const menuClassList = props.menuclass.map(item => (<li key={item.id}>{item.name}</li>))
  return (
    <div className="row menuclass">
      <div className="col-md-6">
        <h3>Menu Classes</h3>
          <ul>
            {menuClassList}
          </ul>
      </div>
      <div className="col-md-6">
        <input 
          name="name"
          value={formData}
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
        >Add Menu Class</button>
      </div>
    </div>
  )
}

export default MenuClass
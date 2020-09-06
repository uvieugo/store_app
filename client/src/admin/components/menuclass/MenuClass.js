import React, {useState} from 'react'
import {addMenuClass, handleError} from '../../../data/connection'
import toastr from 'toastr'
const MenuClass = (props) => {
  const [formData, setFormData] = useState("")

  const handleChange = (e) => {
    setFormData(e.target.value)
  }
  const handleClick = (e) =>{
    e.preventDefault()
    addMenuClass(formData).then(response =>{
      if(response.status === 201 && response.statusText === 'Created'){
        toastr.info(`Add Menu Class ${response.data.name}`)
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

  const menuClassList = props.menuclass.map(item => (<li key={item.id} className="list-group-item">{item.name}</li>))
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <ul className="list-group mb-3">
            {menuClassList}
            </ul>
            <div className="form-group">
              <input 
                name="name"
                value={formData}
                onChange={handleChange}
                className="form-control"
              />
              <button
                onClick={handleClick}
                className="btn btn-primary btn-sm mt-2"
              >Add Menu Class
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuClass
import React, {useState, useMemo} from 'react'
import {addCondiment} from '../../data/connection'
import DataTable from 'react-data-table-component';

const Condiments = (props) => {
  //onRowClicked
  const data = props.condiments.map( c => {
    let newitem = {...c}
    newitem.isSelected = false
    return newitem
  })
  const columns = useMemo( () => 
    [
      {
        cell: (row) => <button onClick={(e) => {e.preventDefault(); handleTableSelect(row)}}>Edit</button>,
        // cell: (row) => <button onClick={handleTableSelect} id={row.ID}>Action</button>,
        // ignoreRowClick: false,
        // allowOverflow: true,
        button: false,
        sortable: false,
        name: 'action',
        selector: 'id'

      },
      {
        name: 'Name',
        selector: 'name',
        sortable: true,
      },
      {
        name: 'Object Num',
        selector: 'object_num',
        sortable: true,
        right: true,
      },
      {
        name: 'Price',
        selector: 'price',
        sortable: true,
        right: true,
      }
      ]

  )
  
  const defCondiment = {
    name: "",
    object_num: "",
    price: 0
  }
  const [condiment, setCondiment] = useState(defCondiment)

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


  const handleTableSelect = (row) => {
    row.isSelected = !row.isSelected
    console.log('Selected Rows: ', row);
    // console.log('hello')
  }
  return(
    <div className="row">
    <div className="col-md-12">
    <div className="card">
      <div className="card-body">
        <div className="form-row">
          <div className="col">
          <input 
          type="text" 
          name="name"
          className="form-control"
          placeholder="Item Name"
          value={condiment.name}
          onChange={handleChange}
        />
          </div>
          <div className="col">
          <input 
          type="text" 
          name="object_num"
          className="form-control"
          placeholder="Micros Object Num"
          value={condiment.object_num}
          onChange={handleChange}
        />
          </div>
          <div className="col">
          <input 
          type="text" 
          name="price"
          className="form-control"
          placeholder="Item Price"
          value={condiment.price}
          onChange={handleChange}
        />
          </div>
          <div className="col">
          <button className="btn btn-secondary" onClick={handleClick}>Add Menu Item</button>
          </div>
        </div>
      </div>  
    </div>
    </div>
      <div className="col-md-12">
      <div className="card">
        <div className="card-body">
        <DataTable
        title="Menu Items"
        columns={columns}
        data={data}
        pagination={true}
        // selectableRows={true}
        // selectableRowsNoSelectAll={true}
        // selectableRowsHighlight
        // selectableRowsComponent={MySelect}
        // onSelectedRowsChange={handleTableSelect}
        // Clicked
        // Selected={() => alert('welcome')}
        // onRowClicked={handleTableSelect}
        // selectableRowSelected={handleTableSelect}
        // selectableRowSelected={(row) => row.isSelected}
        />
        </div>
      </div>
      </div>   
    </div>
  )
}


class MySelect extends React.Component {
  render() {
    return (
      <button>test</button>
    )
  }
}

export default Condiments
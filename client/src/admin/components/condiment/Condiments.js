import React, {useState, useMemo} from 'react'
import Table from './Table'
import AddCondiment from './AddCondiment'
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
    ], []
  )
  const data = useMemo( () => props.condiments, [props.condiments])

  return(
    <div className="row">
      <div className="col-md-4">
        <AddCondiment setCondiments={props.setCondiments} condiment={condiment} setCondiment={setCondiment} isUpdate={isUpdate} setIsUpdate={setIsUpdate}/>
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
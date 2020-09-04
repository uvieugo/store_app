import React, {useState} from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const emptyFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address1: "",
  address2: ""
}

const OrderForm = (props) => {
  const [inputData, setInputData] = useState(emptyFormData)

  const handleChange = (e) => {
    let {name,value} = e.target
    setInputData( prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      props.handleOrder(inputData)
  }

  return(
    <Form onSubmit={handleSubmit}>
    <Form.Row>
      <Form.Group className="col-sm-6" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" onChange={handleChange} name="firstName" value={inputData.firstName}/>
      </Form.Group>

      <Form.Group className="col-sm-6" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" onChange={handleChange} name="lastName" value={inputData.lastName}/>
      </Form.Group>

      <Form.Group className="col-sm-6" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" onChange={handleChange} name="email" value={inputData.email}/>
      </Form.Group>

      <Form.Group className="col-sm-6" controlId="Phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone Number" onChange={handleChange} name="phone" value={inputData.phone} />
      </Form.Group>
    </Form.Row>

    <Form.Group controlId="address1">
      <Form.Label>Address 1</Form.Label>
      <Form.Control placeholder="Address 1" onChange={handleChange} name="address1" value={inputData.address1}/>
    </Form.Group>

    <Form.Group controlId="address2">
      <Form.Label>Address 2</Form.Label>
      <Form.Control placeholder="Address 2" onChange={handleChange} name="address2" value={inputData.address2}/>
    </Form.Group>            

    <Button variant="secondary" size="lg" type="submit">
      Order Now
    </Button>
  </Form>
  )
}

export default OrderForm
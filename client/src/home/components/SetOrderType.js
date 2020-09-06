import React from 'react'

const SetOrderType = (props) => {

  return(
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <button type="button" onClick={() => props.setOrderType('dinein')} className="btn btn-primary btn-lg btn-block">Dine In</button>
          <button type="button" onClick={() => props.setOrderType('takeout')} className="btn btn-primary btn-lg btn-block">Take Out</button>
          <button type="button" onClick={() => props.setOrderType('delivery')} className="btn btn-primary btn-lg btn-block">Delivery</button>
        </div>
      </div>

    </div>
  )
}

export default SetOrderType
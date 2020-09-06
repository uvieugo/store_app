import React from 'react'
const ContentArea = (props) => {
  return(
    <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">{props.pageTitle}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            {props.activePage}
          </div>
        </div>
      </div>
  )
}

export default ContentArea
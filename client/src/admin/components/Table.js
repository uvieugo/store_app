import React, { useState} from 'react'
import { useTable, usePagination, useSortBy, useRowSelect, useRowState } from 'react-table'
import Button from 'react-bootstrap/Button'
import MyModal from './MyModal'

const Table = (props) => {
  const [showModal, setShowModal] = useState(false)
  const { columns, data} = props
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize},} = useTable({ columns, data, initialState: { pageIndex: 0, hiddenColumns: ["id"] }, }, useSortBy, usePagination, 
      useRowSelect, useRowState,
    hooks => {
      hooks.visibleColumns.push(columns => [
        ...columns,
        {
          Cell: ({ row }) => (
            <>
            <button onClick={() => rowSelect(row)} disabled={props.isUpdate} >Edit</button>
            <Button variant="primary" onClick={() => props.handleModalShow(row)} data={row}>
                Add Options
            </Button>
            </>
          ),
        },  
      ])
    })
    const rowSelect = (row) => {
      console.log(row)
      props.setIsUpdate(prev => !prev)
      console.log(props.isUpdate)
      props.setCondiment({...row.values})
    }
    const handleModalShow = () => {
      props.setShowModal(true)
    }
    const handleModalClose = () => {
      props.setShowModal(false)
    }
    return(
    <>
    <table {...getTableProps()} className="table table-bordered mt-2 mb-2">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())} >
                      {column.render('Header')}
                      <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                    </th>
                  ))}
                </tr>
              ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map(row => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return (
                          <td {...cell.getCellProps()} >
                            {cell.render('Cell')}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
                
                </tbody>
            </table>
        

      <div className="row">
        <div className="col-md-6 col">
            <div className="page-item">
            <select
            className="custom-select w-25"
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
            </div>
        </div>
        <div className="col-md-6 col">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item">
              <button onClick={() => gotoPage(0)} className="page-link" disabled={!canPreviousPage}>First</button>
                {/* <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a> */}
              </li>
              {/* {pageOptions.map( p => <li class="page-item"><a class="page-link" href="#">{p+1}</a></li> )} */}
              {/* <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li> */}
              <li className="page-item">
              <button onClick={() => previousPage()} className="page-link" disabled={!canPreviousPage}>Previous</button>{' '}
              </li>
              <li className="page-item">
              <button onClick={() => nextPage()} className="page-link" disabled={!canNextPage}>Next</button>{' '}
              </li>
              <li className="page-item">
              <button onClick={() => gotoPage(pageCount - 1)} className="page-link" disabled={!canNextPage}>Last</button>{' '}
                {/* <a className="page-link" href="#">Next</a> */}
              </li>
            </ul>
          </nav>
        </div>
        <MyModal show={showModal} onHide={handleModalClose}/>
      </div>

      </>
  )
}

export default Table
import React, {useState, useEffect} from 'react'
import {getMenuClasses, getCondiments, getMenuItems} from '../data/connection'
import MenuClass from './components/menuclass/MenuClass'
import MenuItem from './components/menuitem/MenuItems'
import Login from './components/Login'
import './admin.css'
import 'admin-lte/dist/css/adminlte.css'
import '../css/toastr.min.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ContentArea from './components/ContentArea'
import Dashboard from './components/dashboard/Dashboard'
import Condiments from './components/condiment/Condiments'
import MyLoader from './Loader'
window.$ = window.jQuery = require('jquery')
require('admin-lte')

const Admin = () => {
  // const addBodyClass = className => document.body.classList.add("className");

  const [isLoading, setIsLoading] = useState(true)
  const [menuClass, setMenuClass] = useState([])
  const [menuItems, setMenuItems] = useState([])
  const [condiments, setCondiments] = useState([])
  const [isLoggedIn, setIsloggedIn] = useState()
  const [activePage, setActivePage] = useState()
  const [selectPage, setSelectPage] = useState()
  const [pageTitle, setPageTitle] = useState("")
  
  useEffect( () => {
    // document.body.classList.add("sidebar-mini")
    document.body.classList.add("layout-fixed")
  })
  useEffect(() => {
    if (localStorage.getItem('auth_token')){
      setIsloggedIn(true)
    }else{
      setIsloggedIn(false)
    }
  }, [])

  useEffect(() => {
    if( isLoggedIn ) {
    Promise.all([getMenuClasses(), getMenuItems(),getCondiments()])
    .then(function (results) {
      // console.log(results[0].data, results[1].data)
      setMenuClass(results[0].data)
      setMenuItems(results[1].data)
      setCondiments(results[2].data)
      setIsLoading(false)
    })
    }else{
    }
  },[isLoggedIn])

  useEffect( () => {
    switch (selectPage) {
      case "menuclass":
        setActivePage(<MenuClass menuclass={menuClass} setmenuclass={setMenuClass} />)
        setPageTitle("Menu Classes")
        break;
      case "condiments":
        setActivePage(<Condiments condiments={condiments} setCondiments={setCondiments}/>)
        setPageTitle("Condiments")
        break;
      case "menuitems":
          setActivePage(<MenuItem pageTitle="Menu Items" menuitems={menuItems} condiments={condiments} setmenuitems={setMenuItems} menuclass={menuClass}/>)
          setPageTitle("Menu Items")
          break;
      default:
        setActivePage(<Dashboard />)
        break;
    }
  },[selectPage, menuItems, condiments, menuClass])

  

  if(isLoggedIn === true){
    if(isLoading){
      return (<MyLoader />)
    }else{
      return (
        <div className="wrapper">
            <Header setIsloggedIn={setIsloggedIn}/>
            <Sidebar setSelectPage={setSelectPage}/>
            <ContentArea activePage={activePage} pageTitle={pageTitle}/>
        </div>
      )
    }
  }else if(isLoggedIn === false){
    return (<Login setIsloggedIn={setIsloggedIn} />)
  }
  return(
    null
  )
}

export default Admin
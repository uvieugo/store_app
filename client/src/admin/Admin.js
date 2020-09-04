import React, {useState, useEffect} from 'react'
import {getMenuClasses, getCondiments, getMenuItems} from '../data/connection'
import MenuClass from './components/MenuClass'
import MenuItem from './components/MenuItems'
import Login from './components/Login'
import './admin.css'
import 'admin-lte/dist/css/adminlte.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ContentArea from './components/ContentArea'
import Dashboard from './components/Dashboard'
import Condiments from './components/Condiments'
// import MenuType from './components/MenuType'

const Admin = () => {
  // const [isLoading, setIsLoading] = useState(true)
  const [menuClass, setMenuClass] = useState([])
  // const [menuType, setMenuType] = useState([])
  const [menuItems, setMenuItems] = useState([])
  const [condiments, setCondiments] = useState([])
  const [isLoggedIn, setIsloggedIn] = useState()
  const [activePage, setActivePage] = useState()
  const [selectPage, setSelectPage] = useState()
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
    })
    }else{
    }
  },[isLoggedIn])

  useEffect( () => {
    switch (selectPage) {
      case "menuclass":
        setActivePage(<MenuClass menuclass={menuClass} setmenuclass={setMenuClass} />)
        break;
      case "condiments":
        setActivePage(<Condiments condiments={condiments} setcondiments={setCondiments}/>)
        break;
      case "menuitems":
          setActivePage(<MenuItem menuitems={menuItems} condiments={condiments} setmenuitems={setMenuItems} menuclass={menuClass}/>)
          break;
      default:
        setActivePage(<Dashboard />)
        break;
    }
  },[selectPage, menuItems, condiments, menuClass])

  

  if(isLoggedIn === true){
    return (
      <div className="wrapper">
      <Header setIsloggedIn={setIsloggedIn}/>
      <Sidebar setSelectPage={setSelectPage}/>
      <ContentArea activePage={activePage}/>
    </div>
      
    )
   
  }else if(isLoggedIn === false){
    return (<Login setIsloggedIn={setIsloggedIn} />)
  }
  return(
    null
  )
}

export default Admin
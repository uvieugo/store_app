import React from 'react'

const Sidebar = (props) =>{
  const handleClick = (e) => {
    e.preventDefault()
    let newpage = e.target.attributes.href.value
    props.setSelectPage(newpage)
  }
  return (
    
 <aside className="main-sidebar sidebar-dark-primary elevation-4">

<a href="test" className="brand-link  text-center">
     <span className="brand-text font-weight-bold">ADMIN</span>
 </a>

 <div className="sidebar">
     <nav className="mt-2">
         <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
             <li className="nav-item">
                 <a href="menuclass" className="nav-link" onClick={handleClick}>
                    Menu Class
                 </a>
             </li>
             <li className="nav-item">
                 <a href="condiments" className="nav-link" onClick={handleClick}>
                        Condiments
                 </a>
             </li>
             <li className="nav-item">
                 <a href="menuitems" className="nav-link" onClick={handleClick}>

                        Menu Items

                 </a>
             </li>
         </ul>
     </nav>
 </div>
</aside>
  )
}

export default Sidebar
import React from 'react'
import '../Sidebar/sidebar.css'
import Searchbar from './Searchbar'
import Menu from './Menu'

export const Sidebar = () => {
  return (
    <div className='sidebar'>

        {/* logo */}
        <div className="logo">Dashboard</div>

        {/* searchbar */}
        <Searchbar/>

        {/* main menu */}
        <p className='main_menu'>Main Menu</p>
        <Menu/>
    </div>
  )
}

import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { RiHome7Fill } from "react-icons/ri";
import { MdTask } from "react-icons/md";
import {FaCartShopping} from "react-icons/fa6";
import {IoCalendarOutline} from "react-icons/io5";
import {HiOutlineMail} from "react-icons/hi";
import {BsChatSquareText} from "react-icons/bs";
import {GoProjectRoadmap} from "react-icons/go";
import {IoDocumentTextOutline} from "react-icons/io5";
import {CgNotes} from "react-icons/cg";
import {TiContacts} from "react-icons/ti";



function Menu() {
    
    const menuItems = [
        {name: 'Dashboard', path: '/', icon: <RiHome7Fill/>},
        {name: 'Task', path: '/', icon: <MdTask/>},
        {name: 'E-commerce', path: '/', icon: <FaCartShopping/>},
        {name: 'Calendar', path: '/', icon: <IoCalendarOutline/>},
        {name: 'Mail', path: '/', icon: <HiOutlineMail/>},
        {name: 'Chat', path: '/', icon: <BsChatSquareText/>},
        {name: 'Projects', path: '/', icon: <GoProjectRoadmap/>},
        {name: 'File Manager', path: '/', icon: <IoDocumentTextOutline/>},
        {name: 'Notes', path: '/', icon: <CgNotes/>},
        {name: 'Contacts', path: '/', icon: <TiContacts/>}
    ]
  
    return (
    <div className='menu'>
        <ul>
            {menuItems.map((item) => (
                <li key={item.path} className='menu_list'>
                    {/* <Link to={item.path}><span className='icon'>{item.icon}</span><span className='menu_item'>{item.name}</span></Link> */}
                
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                        `menu_link ${isActive ? 'active_link' : ''}`
                        }
                    >
                        <span className='icon'>{item.icon}</span>
                        <span className='menu_item'>{item.name}</span>
                    </NavLink>

                </li>
            ))}
        </ul>
    </div>
  )
}

export default Menu
import React, { useEffect, useRef, useState } from 'react'
import '../Dashboard/dashboard.css'
import { VscListFlat } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";
import Card from './Card';
import StatisticsGraph from './StatisticsGraph';
import ActivityGraph from './ActivityGraph';
import Charttest from './Chartest';
import Statsgraph from './Statsgraph';
import Analyticsgraph from './Analyticsgraph';
import Mycard from './Mycard';
import Salesgraph from './Salesgraph';

export const Dashboard = () => {

  const [isOpen, setIsOpen] = useState(false)

  const wrapperRef = useRef(null)

  useEffect(() => {

    function handleClickOutside(event) {

      if(wrapperRef.current && !wrapperRef.current.contains(event.target)){
        setIsOpen(false)
      }

    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }

  }, [])

  // download code
  const handleDownload = () => {
    window.print()
  }

  return (

    <div className='dashboard'>

      {/* top bar */}
       <header className='dashboard_top'>

          <div className='d_icon'><VscListFlat/></div>

          <div className='right_side'>

              {/* searchbar */}
              <div className='searchbar' ref={wrapperRef}> {!isOpen ? (

                <button onClick={() => setIsOpen(true)}><IoSearch/></button>) : (
                  <input
                    type="text"
                    placeholder="Search..."
                    autoFocus
                    className="border border-gray-300 rounded px-2 py-1 focus:outline-none"
                  />
                )} </div>

              <div className='notification'><GoBell/></div>

              <div className='profile'>

                  <div className='profile_image'><IoPersonCircleOutline/></div>
                  <div className='profile_name'>John Doe</div>

              </div>

          </div>

       </header>

       {/* overview */}
       <div className="overview">

            <div className="overview_top">

                <div><h2>Overview</h2></div>
                
                <div className="right">

                    <div className='download'>
                       <button onClick={() => handleDownload()}><BsDownload/></button>
                    </div>

                    <div className="days">

                      <select id="days">
                        <option value="volvo">Last 7 days</option>
                        <option value="saab">Last 30 days</option>
                        <option value="opel">Last 6 months</option>
                        <option value="audi">Last 12 months</option>
                      </select>

                    </div>

                </div>

            </div>
       </div>

       {/* cards */}
       <Card/>

       {/* Graphs */}
       <div className='graph flex'>
            <Statsgraph/>
            <Analyticsgraph/>
       </div>

       {/* My card */}
       <div className="mycard_sales flex">
            <Mycard/>
            <Salesgraph/>
       </div>


    </div>
  )
}

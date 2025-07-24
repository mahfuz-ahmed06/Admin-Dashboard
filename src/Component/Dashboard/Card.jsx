import React from 'react'
import { FaDollarSign } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";

export default function Card() {
  return (
    <div className='cards'>

        <div className="card">

            <div className="details">
                <h4>Total Profit</h4>
                <p><span className='dollar'>$14.500</span><span className='percentage'><FaArrowUpLong/>50.8%</span></p>
            </div>
            <div className="card_img"><FaDollarSign/></div>

        </div>

        <div className="card">

            <div className="details">
                <h4>Total Sales</h4>
                <p><span className='dollar'>26.800K</span><span className='percentage'><FaArrowUpLong/>50.8%</span></p>
            </div>
            <div className="card_img"><FaDollarSign/></div>

        </div>

        <div className="card">

            <div className="details">
                <h4>New Users</h4>
                <p><span className='dollar'>8.300K</span><span className='percentage'><FaArrowUpLong/>50.8%</span></p>
            </div>
            <div className="card_img"><FaDollarSign/></div>

        </div>

    </div>
  )
}

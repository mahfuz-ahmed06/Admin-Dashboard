import React from 'react'
import { BiLogoMastercard } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";

export default function Mycard() {
  return (
    <div className='mycard'>

        <div className="top flex">
            <h4>My Card</h4>
            <p><BiLogoMastercard/> 5880 **** **** 7659</p>
        </div>

        <div className='details flex'>
            <div className="left">
                {/* <img src="https://images.unsplash.com/photo-1635322595399-634507a2fdfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60" alt="visa card" width='300'/> */}
                {/* <img src="https://images.unsplash.com/photo-1635322595399-634507a2fdfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60" alt="Green Visa Card" width="300" /> */}
                <img src='https://www.ucb.com.bd/images/cards/business-credit-card.png' alt='Card'/>

            </div>

            <div className="middle">
                <p>Card Type:</p>
                <p>Card Holder:</p>
                <p>Expires:</p>
                <p>Card Number:</p>
                <p>Total Balance:</p>
                <p>Total Debt:</p>
            </div>

            <div className="right">
                <p>Visa</p>
                <p>John Doe</p>
                <p>12/19</p>
                <p>5880 5122 3090 5469</p>
                <p>80,700.00</p>
                <p>8250.00</p>
            </div>
        </div>

        <div className="bottom flex">

            <div className="left">
                <button type="button" className='flex acb'><span style={{marginRight: '4px'}}><FaPlus/></span>  Add Card</button>
            </div>

            <div className="right">
                <button type="button">Pay Debt</button>
                <button type="button" className='cancel_btn'>Cancel</button>
            </div>

        </div>
    </div>
  )
}

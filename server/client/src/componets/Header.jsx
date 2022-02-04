import React from 'react'
import Account_icon from "./Images/account-icon.svg"
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
           <div className="header">
               <li><Link to="/" >Home</Link></li>
               <li><Link to="/about">TV Shows</Link></li>
               <li><Link to="#">Movies</Link></li>
               <li><Link to="https://www.google.co.in/" target="_blank">news&Popular</Link></li>
               {/* <a href='https://www.google.co.in/' target='_blank'>visit</a> */}
               <li><Link to="#">My list</Link></li>
               <li><Link to="/login" className='accont-mob'>Account</Link></li>
               
               <Link to="/Login"><img src={Account_icon} className='account-icon' alt="" /></Link>
               </div>
        </>
    )
}

export default Header

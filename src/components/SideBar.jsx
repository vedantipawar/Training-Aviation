import React, { useState } from 'react';
import './Sidebar.css';
import {

    FaUserAlt,
    FaCircle,
    FaBars

}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/about",
            name:"My Account",
            icon:<FaUserAlt/>
            
        },
        {
            path:"/",
            name:"Dashboard",
            icon:<FaCircle/>
        },        
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaCircle/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCircle/>
        }   
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "400px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
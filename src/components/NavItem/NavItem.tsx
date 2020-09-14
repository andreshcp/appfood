import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavItem.css';

interface NavItemProps {
    title: String;
}

function NavItem({title}:NavItemProps) {
    return (
         <NavLink
         className="navItem"
         to={`/${title.toLocaleLowerCase()}`}
         activeStyle={{color: 'white', borderBottom: '3px solid solid #0BC6E3'}}
         >
             {title} 
         </NavLink>
    )
}
export default NavItem;

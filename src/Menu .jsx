import React from 'react'
import {NavLink} from "react-router-dom"
const Menu = ()=>{
    return(<>
    <NavLink  exact activeClassName="active_class"to="/">About us </NavLink>
    <NavLink  exact activeClassName="active_class"to="/Contact">Contact us </NavLink>
    </>)
}

export default Menu;
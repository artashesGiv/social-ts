import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './NavbarItem.module.scss'
import {navbarElementType} from '../../../redux/state'

const NavbarItem = (props: navbarElementType) => {
   return (
      <div className={`${s.item} ${s.active}`}>
         <NavLink to={props.link} activeClassName={s.active}>{props.name}</NavLink>
      </div>
   )
}

export default NavbarItem
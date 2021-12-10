import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './NavbarItem.module.scss'

type navbarElementType = {
   name: string
   link: string
}

const NavbarItem = (props: navbarElementType) => {
   return (
      <div className={`${s.item} ${s.active}`}>
         <NavLink to={props.link} activeClassName={s.active}>{props.name}</NavLink>
      </div>
   )
}

export default NavbarItem
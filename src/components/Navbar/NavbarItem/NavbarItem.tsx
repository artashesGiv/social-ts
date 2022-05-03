import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './../Navbar.module.scss'

type navbarElementType = {
   name: string
   link: string
}

const NavbarItem = (props: navbarElementType) => {
   return (
      <NavLink to={props.link} className={s.item} activeClassName={s.active}>{props.name}</NavLink>
   )
}

export default NavbarItem
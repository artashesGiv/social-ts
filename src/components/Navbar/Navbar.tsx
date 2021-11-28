import React from 'react'
import s from './Navbar.module.scss'
import {navbarType} from '../../redux/store'
import NavbarItem from './NavbarItem/NavbarItem'

type navbarPropsType = {
   state: navbarType
}

export const Navbar = (props: navbarPropsType) => {
   let navbarElements = props.state.elements
      .map(el => <NavbarItem key={el.name} name={el.name} link={el.link}/>)

   return (
      <nav className={s.nav}>
         {navbarElements}
      </nav>
   )
}
import React from 'react'
import s from './Navbar.module.scss'
import NavbarItem from './NavbarItem/NavbarItem'
import {NavbarPropsType} from './NavbarContainer'

export const Navbar = ({elements, ...props}: NavbarPropsType) => {
   let navbarElements = elements
      .map(el => <NavbarItem key={el.name} name={el.name} link={el.link}/>)

   return (
      <nav className={s.nav}>
         {navbarElements}
      </nav>
   )
}
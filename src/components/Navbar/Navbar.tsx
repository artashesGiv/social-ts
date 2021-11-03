import React from 'react'
import s from './Navbar.module.scss'
import {navbarType} from '../../redux/state'
import NavbarItem from './NavbarItem/NavbarItem'

type navbarPropsType = {
   state: navbarType
}

const Navbar = (props: navbarPropsType) => {

   let navbarElements = props.state.elements
      .map(el => <NavbarItem name={el.name} link={el.link}/>)

   return (
      <nav className={s.nav}>
         {navbarElements}
      </nav>
   )
}

export default Navbar
import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.scss'
import {HeaderPropsType} from './HeaderContainer'

export const Header = (props: HeaderPropsType) => {
   return (
      <header className={s.header}>
         <img src="https://pbs.twimg.com/profile_images/1063925348205821958/DlGcxdOl_400x400.jpg" alt="logo"/>

         <div className={s.loginBlock}>
            {props.isAuth
               ? props.login
               : <NavLink to={'login'}>
                  Login
               </NavLink>
            }
         </div>
      </header>
   )
}
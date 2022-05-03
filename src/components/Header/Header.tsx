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
                  ? <div><span>{props.login}</span><button className={s.logoutBtn} onClick={props.logout}>logout</button></div>
                  : <NavLink to={'login'}>
                     LOGIN
                  </NavLink>
               }
            </div>
         </header>
   )
}
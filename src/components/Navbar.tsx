import React from 'react'
import s from './Navbar.module.css'

console.log(s)

const Navbar = () => {
   return <nav className={s.nav}>
      <div className={s.item}>
         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
         <a>Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
         <a>Messages</a>
      </div>
      <div className={s.item}>
         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
         <a>News</a>
      </div>
      <div className={s.item}>
         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
         <a>Music</a>
      </div>
      <div className={s.item}>
         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
         <a>Settings</a>
      </div>
   </nav>
}

export default Navbar
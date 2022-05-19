import React from 'react'
import {userType} from '../../../redux/Users/types'
import {NavLink} from 'react-router-dom'
import s from './UserPromoSmall.module.scss'
import userPhoto from '../../../assets/images/80x80.png'


type UserPromoPropsType = {
   user: userType
}

export const UserPromoSmall: React.FC<UserPromoPropsType> = ({user}) => {
   return (
      <div className={s.user}>
         <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small || userPhoto} alt={'avatar'}/>
         </NavLink>
         <div>
            <NavLink to={'/profile/' + user.id}>
               {user.name}
            </NavLink>
         </div>
      </div>
   )
}

import {userType} from '../../../redux/Users/types'
import React from 'react'
import s from './UserPromoLarge.module.scss'
import {NavLink} from 'react-router-dom'
import userPhoto from '../../../assets/images/80x80.png'
import {FollowButton} from '../FollowButton/FollowButton'

type UserPromoPropsType = {
   user: userType
   followingInProgress: number[]
   follow: (id: number) => void
   unfollow: (id: number) => void
}
export const UserPromoLarge: React.FC<UserPromoPropsType> = ({user, follow, unfollow, followingInProgress}) => {
   return (
      <div className={s.user}>
         <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small || userPhoto} alt={'avatar'} className={s.avatar}/>
         </NavLink>
         <div>
            <NavLink to={'/profile/' + user.id}>
               {user.name}
            </NavLink>
            <div>{user.status?.slice(0, 60)}</div>
         </div>
         <div className={s.button}>
            <FollowButton followed={user.followed} userId={user.id} followingInProgress={followingInProgress}
                          follow={follow} unfollow={unfollow}/>
         </div>
      </div>
   )
}
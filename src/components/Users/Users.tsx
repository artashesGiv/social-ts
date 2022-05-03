import React from 'react'
import s from './Users.module.scss'
import userPhoto from '../../assets/images/80x80.png'
import {UsersPropsType} from './UsersContainer'
import {NavLink} from 'react-router-dom'
import {Paginator} from '../common/Paginator/Paginator'

type UsersPropsTypeFunc = {
   usersProps: UsersPropsType
   onPageChanged: (pageNumber: number) => void
}

export const Users = ({usersProps, onPageChanged}: UsersPropsTypeFunc) => {


   const {
      usersPage,
      followUser,
      unfollowUser,
   } = usersProps

   const {
      users,
      pageSize,
      followingInProgress,
      totalUsersCount,
      currentPage,
   } = usersPage

   const follow = (id: number) => {
      followUser(id)
   }

   const unfollow = (id: number) => {
      unfollowUser(id)
   }

   return (
      <div className={s.users}>
         <Paginator onPageChanged={onPageChanged} currentPage={currentPage} pageSize={pageSize}
                    totalItemsCount={totalUsersCount} portionSize={25}/>
         {
            users.map(u => {
               return (
                  <div key={u.id} className={s.user}>
                     <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small || userPhoto} alt={'avatar'}/>
                     </NavLink>
                     <NavLink to={'/profile/' + u.id}>
                        {u.name}
                     </NavLink>
                     <div className={s.button}>
                        {
                           u.followed
                              ? <button disabled={followingInProgress.some(id => id === u.id)}
                                        onClick={() => unfollow(u.id)}>unfollow</button>

                              : <button disabled={followingInProgress.some(id => id === u.id)}
                                        onClick={() => follow(u.id)}>follow</button>
                        }
                     </div>
                  </div>
               )
            })
         }
      </div>
   )
}
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


   return (
      <div className={s.users}>
         <Paginator onPageChanged={onPageChanged} currentPage={currentPage} pageSize={pageSize}
                    totalItemsCount={totalUsersCount} portionSize={30}/>
         {
            users.map(u => {
               return (
                  <div key={u.id}>
                     <span>
                        <div>
                           <NavLink to={'/profile/' + u.id}>
                              <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt={'avatar'}/>
                           </NavLink>
                        </div>
                        <div>
                           {
                              u.followed
                                 ? <button disabled={followingInProgress.some(id => id === u.id)}
                                           onClick={() => unfollowUser(u.id)}>unfollow</button>

                                 : <button disabled={followingInProgress.some(id => id === u.id)}
                                           onClick={() => followUser(u.id)}>follow</button>
                           }
                        </div>
                     </span>
                     <span>
                        <span>
                           <div>{u.name}</div>
                           <div>{u.status}</div>
                        </span>
                        <span>
                           <div>{'u.location.country'}</div>
                           <div>{'u.location.city'}</div>
                        </span>
                     </span>
                  </div>
               )
            })
         }
      </div>
   )
}

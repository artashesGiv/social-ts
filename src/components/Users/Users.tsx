import React from 'react'
import s from './Users.module.scss'
import userPhoto from '../../assets/images/80x80.png'
import {UsersPropsType} from './UsersContainer'
import {NavLink} from 'react-router-dom'

type UsersPropsTypeFunc = {
   usersProps: UsersPropsType
   onPageChanged: (pageNumber: number) => void
}

export const Users = ({usersProps, onPageChanged}: UsersPropsTypeFunc) => {

   let pagesCount = Math.ceil(usersProps.usersPage.totalUsersCount / usersProps.usersPage.pageSize)
   let pages = Array.from(Array(pagesCount).keys()).map(x => ++x)

   return (
      <div className={s.users}>
         <div>
            {pages.map(p =>
               <span key={p}
                     onClick={() => onPageChanged(p)}
                     className={usersProps.usersPage.currentPage === p ? s.selectedPage : ''}>{p + ' '}
               </span>)}
         </div>
         {
            usersProps.usersPage.users.map(u => {
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
                                 ? <button disabled={usersProps.usersPage.followingInProgress.some(id => id === u.id)}
                                           onClick={() => usersProps.unfollowUser(u.id)}>unfollow</button>

                                 : <button disabled={usersProps.usersPage.followingInProgress.some(id => id === u.id)}
                                           onClick={() => usersProps.followUser(u.id)}>follow</button>
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

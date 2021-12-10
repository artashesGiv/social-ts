import React from 'react'
import s from './Users.module.scss'
import userPhoto from '../../assets/images/80x80.png'
import { UsersPropsType } from './UsersContainer'

type UsersPropsTypeFunc = {
   usersProps: UsersPropsType
   onPageChanged: (pageNumber: number) => void
}

export const Users = ({usersProps, onPageChanged, ...props}: UsersPropsTypeFunc) => {

   let pagesCount = Math.ceil(usersProps.usersPage.totalUsersCount / usersProps.usersPage.pageSize)
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   return (
      <div className={s.users}>
         <div>
            {pages.map(p => <span onClick={() => onPageChanged(p)}
                                  className={usersProps.usersPage.currentPage === p ? s.selectedPage : undefined}>{p} </span>)}
         </div>
         {
            usersProps.usersPage.users.map(u => {
               return (
                  <div key={u.id}>
                     <span>
                        <div>
                           <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt={'avatar'}/>
                        </div>
                        <div>
                           {
                              u.followed
                                 ? <button onClick={() => usersProps.unfollow(u.id)}>unfollow</button>
                                 : <button onClick={() => usersProps.follow(u.id)}>follow</button>
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

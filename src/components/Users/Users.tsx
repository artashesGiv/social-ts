import React from 'react'
import s from './Users.module.scss'
import userPhoto from '../../assets/images/80x80.png'
import {UsersPropsType} from './UsersContainer'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

type UsersPropsTypeFunc = {
   usersProps: UsersPropsType
   onPageChanged: (pageNumber: number) => void
}

export const Users = ({usersProps, onPageChanged}: UsersPropsTypeFunc) => {

   let pagesCount = Math.ceil(usersProps.usersPage.totalUsersCount / usersProps.usersPage.pageSize)
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   return (
      <div className={s.users}>
         <div>
            {pages.map((p, id) => <span key={id} onClick={() => onPageChanged(p)}
                                        className={usersProps.usersPage.currentPage === p ? s.selectedPage : undefined}>{p} </span>)}
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
                                 ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                       withCredentials: true,
                                       headers: {
                                          'API-KEY': '91a7ff3a-e232-4dc0-85e8-2f35ca14e9d6',
                                       },
                                    }).then(response => {
                                       if (response.data.resultCode === 0) {
                                          console.log(response)
                                          usersProps.unfollow(u.id)
                                       }
                                    })

                                 }}>unfollow</button>
                                 : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                       withCredentials: true,
                                       headers: {
                                          'API-KEY': '91a7ff3a-e232-4dc0-85e8-2f35ca14e9d6',
                                       },
                                    }).then(response => {
                                       if (response.data.resultCode === 0) {
                                          console.log(response)
                                          usersProps.follow(u.id)
                                       }
                                    })

                                 }}>follow</button>
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

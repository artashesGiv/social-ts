import React from 'react'
import {UsersPropsType} from './UsersContainer'
import s from './Users.module.scss'
import {v1} from 'uuid'

export const Users = ({setUsers, unfollow, follow, usersPage, ...props}: UsersPropsType) => {

   if (usersPage.users.length === 0) {
      setUsers([
         {
            id: v1(),
            photoURL: 'https://i.pinimg.com/originals/b3/a6/32/b3a632a5547d22c553075514add449db.jpg',
            fullName: 'Nikolay',
            status: 'statusNik',
            location: {city: 'Pyatigorsk', country: 'Russia'},
            followed: true,
         },
         {
            id: v1(),
            photoURL: 'https://i.pinimg.com/originals/b3/a6/32/b3a632a5547d22c553075514add449db.jpg',
            fullName: 'Anna',
            status: 'statusAn',
            location: {city: 'Pyatigorsk', country: 'Russia'},
            followed: false,
         },
         {
            id: v1(),
            photoURL: 'https://i.pinimg.com/originals/b3/a6/32/b3a632a5547d22c553075514add449db.jpg',
            fullName: 'Vasiliy',
            status: 'statusVs',
            location: {city: 'Volgograd', country: 'Russia'},
            followed: true,
         },
         {
            id: v1(),
            photoURL: 'https://i.pinimg.com/originals/b3/a6/32/b3a632a5547d22c553075514add449db.jpg',
            fullName: 'Tanya',
            status: 'statusTn',
            location: {city: 'Volgograd', country: 'Russia'},
            followed: false,
         },
      ])
   }

   return (
      <div className={s.users}>
         {
            usersPage.users.map(u => {
               return (
                  <div key={u.id}>
                     <span>
                        <div>
                           <img src={u.photoURL} alt={'avatar'}/>
                        </div>
                        <div>
                           {
                              u.followed
                                 ? <button onClick={() => unfollow(u.id)}>unfollow</button>
                                 : <button onClick={() => follow(u.id)}>follow</button>
                           }
                        </div>
                     </span>
                     <span>
                        <span>
                           <div>{u.fullName}</div>
                           <div>{u.status}</div>
                        </span>
                        <span>
                           <div>{u.location.country}</div>
                           <div>{u.location.city}</div>
                        </span>
                     </span>
                  </div>
               )
            })
         }
      </div>
   )
}

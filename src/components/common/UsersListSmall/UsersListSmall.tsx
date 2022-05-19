import React from 'react'
import {userType} from '../../../redux/Users/types'
import {UserPromoSmall} from '../UserPromo/UserPromoSmall'
import {NavLink} from 'react-router-dom'

type UsersListSmallPropsType = {
   list: userType[]
   count?: number
}

export const UsersListSmall: React.FC<UsersListSmallPropsType> = React.memo(({list, count = 10}) => {
   const listForMap = list.length > count ? list.slice(0, count) : list
   return (
      <>
         {listForMap.map(u => {
            return <UserPromoSmall key={u.id} user={u}/>
         })}
         {
            count <= list.length &&
           <NavLink to={'/friends'}>
             Показать все...
           </NavLink>
         }
      </>
   )
})
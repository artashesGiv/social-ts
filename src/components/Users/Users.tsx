import React from 'react'
import s from './Users.module.scss'
import {UsersPropsType} from './UsersContainer'
import {Paginator} from '../common/Paginator/Paginator'
import {UserPromoLarge} from '../common/UserPromo/UserPromoLarge'

type UsersPropsTypeFunc = {
   usersProps: UsersPropsType
   onPageChanged: (pageNumber: number) => void
}

export const Users: React.FC<UsersPropsTypeFunc> = React.memo(({usersProps, onPageChanged}) => {

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
                    totalItemsCount={totalUsersCount} portionSize={25}/>
         {
            users.map(u => {
               return <UserPromoLarge key={u.id} user={u} follow={followUser} unfollow={unfollowUser}
                                      followingInProgress={followingInProgress}/>
            })
         }
      </div>
   )
})


import React from 'react'
import s from './FollowButton.module.scss'
import plus from './../../../assets/images/plus.png'
import minus from './../../../assets/images/minus.png'

type FollowButtonPropsType = {
   userId: number
   followed: boolean
   width?: string
   followingInProgress: number[]
   follow: (id: number) => void
   unfollow: (id: number) => void
}
export const FollowButton: React.FC<FollowButtonPropsType> = React.memo(({
                                                                            followingInProgress,
                                                                            follow,
                                                                            unfollow,
                                                                            userId,
                                                                            followed,
                                                                            width,
                                                                         }) => {
   return (
      <div className={s.button}>
         {
            followed
               ? <button disabled={followingInProgress.some(id => id === userId)}
                         onClick={() => unfollow(userId)} style={{width: width}}>
                  <img src={minus} alt="-"/>
                  Удалить из подписок
               </button>

               : <button disabled={followingInProgress.some(id => id === userId)}
                         onClick={() => follow(userId)} style={{width: width}}>
                  <img src={plus} alt="+"/>
                  Подписаться
               </button>
         }
      </div>
   )
})


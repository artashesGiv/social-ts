import React from 'react'
import s from './Post.module.scss'
import {useSelector} from 'react-redux'
import {AppStateType} from '../../../../redux/reduxStore'
import {profileType} from '../../../../redux/Propfile/types'

type PropsPost = {
   id: string
   message: string
   likesCount: number
}

export const Post = (props: PropsPost) => {

   const profile = useSelector<AppStateType, profileType>(state => state.profilePage.profile)

   return (
      <div className={s.item}>
         <div className={s.header}>
            <img src={profile.photos.small || 'https://dummyimage.com/50x50&text=avatar'} alt="avatar"/>
            <span>{profile.fullName}</span>
         </div>
         <div className={s.content}>
            {props.message}
         </div>
         <div className={s.footer}>
            <span> &#10084; {props.likesCount}</span>
         </div>
      </div>
   )
}
import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {MyPostContainer} from './MyPosts/MyPostsContainer'

type ProfilePropsType = {}

export const Profile = (props: ProfilePropsType) => {
   return (
      <div>
         <ProfileInfo/>
         <MyPostContainer/>
      </div>
   )
}
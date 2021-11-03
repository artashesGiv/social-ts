import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import {profilePageType} from '../../redux/state'

type profilePropsType = {
   state: profilePageType
}

const Profile = (props: profilePropsType) => {

   return (
      <div>
         <ProfileInfo/>
         <MyPosts posts={props.state.posts}/>
      </div>
   )
}

export default Profile
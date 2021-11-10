import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import {addPostType, profilePageType} from '../../redux/state'

type profilePropsType = {
   state: profilePageType
   addPost: addPostType
}

const Profile = (props: profilePropsType) => {

   return (
      <div>
         <ProfileInfo/>
         <MyPosts posts={props.state.posts} addPost={props.addPost}/>
      </div>
   )
}

export default Profile
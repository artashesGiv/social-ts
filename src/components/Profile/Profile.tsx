import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import {addPostType, profilePageType, updateNewPostTextType} from '../../redux/state'

type profilePropsType = {
   state: profilePageType
   addPost: addPostType
   updateNewPostText: updateNewPostTextType
}

const Profile = (props: profilePropsType) => {

   return (
      <div>
         <ProfileInfo/>
         <MyPosts
            posts={props.state.posts}
            newPostText={props.state.newTextPost}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
         />
      </div>
   )
}

export default Profile
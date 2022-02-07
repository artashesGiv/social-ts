import React from 'react'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {ProfilePropsType} from './ProfileContaner'
import {MyPosts} from './MyPosts/MyPosts'

export const Profile = ({profilePage, updateTextPost, addPost}: ProfilePropsType) => {

   return (
      <div>
         <ProfileInfo profile={profilePage.profile}/>
         <MyPosts posts={profilePage.posts} newTextPost={profilePage.newTextPost} updateTextPost={updateTextPost}
                  addPost={addPost}
         />
      </div>
   )
}
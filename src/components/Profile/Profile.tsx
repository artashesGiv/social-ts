import React from 'react'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {MyPosts} from './MyPosts/MyPosts'
import {initialStateProfileType} from '../../redux/Propfile/types'

type ProfileProps = {
   profilePage: initialStateProfileType
   isOwner: boolean
   addPost: (postText: string) => void
   updateUserStatus: (status: string) => void
   savePhoto: (photo: File) => void
}

export const Profile = ({profilePage, addPost, updateUserStatus, isOwner, savePhoto}: ProfileProps) => {

   return (
      <div>
         <ProfileInfo profile={profilePage.profile} status={profilePage.status} updateStatus={updateUserStatus} isOwner={isOwner} savePhoto={savePhoto}/>
         <MyPosts posts={profilePage.posts} addPost={addPost}/>
      </div>
   )
}
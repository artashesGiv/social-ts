import React from 'react'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {MyPosts} from './MyPosts/MyPosts'
import {initialStateProfileType} from '../../redux/Propfile/types'
import s from './Profile.module.scss'

type ProfileProps = {
   profilePage: initialStateProfileType
   isOwner: boolean
   addPost: (postText: string) => void
   updateUserStatus: (status: string) => void
   savePhoto: (photo: File) => void
   saveProfile: (profile: any) => void
}

export const Profile = ({profilePage, addPost, updateUserStatus, isOwner, savePhoto, saveProfile}: ProfileProps) => {

   return (
      <div className={s.profilePage}>
         <ProfileInfo profile={profilePage.profile} status={profilePage.status} updateStatus={updateUserStatus}
                      isOwner={isOwner} savePhoto={savePhoto} saveProfile={saveProfile}/>
         <MyPosts posts={profilePage.posts} addPost={addPost}/>
      </div>
   )
}
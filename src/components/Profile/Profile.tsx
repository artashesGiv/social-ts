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
   followUser: (userId: number) => void
   unfollowUser: (userId: number) => void
   followingInProgress: number[]
   userId: number
}

export const Profile = ({
                           profilePage,
                           addPost,
                           updateUserStatus,
                           isOwner,
                           savePhoto,
                           saveProfile,
                           unfollowUser,
                           followUser,
                           followingInProgress,
                           userId,
                        }: ProfileProps) => {

   return (
      <div className={s.profilePage}>
         <ProfileInfo profile={profilePage.profile} status={profilePage.status} updateStatus={updateUserStatus}
                      isOwner={isOwner} savePhoto={savePhoto} saveProfile={saveProfile}
                      subscriptions={profilePage.friends} followUser={followUser} unfollowUser={unfollowUser}
                      followingInProgress={followingInProgress} userId={userId} followed={profilePage.followed}/>
         <MyPosts posts={profilePage.posts} addPost={addPost} isOwner={isOwner} owner={profilePage.profile.fullName}/>
      </div>
   )
}
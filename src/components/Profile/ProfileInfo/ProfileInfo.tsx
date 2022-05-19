import React, {ChangeEvent, useState} from 'react'
import s from './ProfileInfo.module.scss'
import {Preloader} from '../../common/Preloader/Preloader'
import {ContactsProfileType, profileType} from '../../../redux/Propfile/types'
import {EditableSpan} from '../../common/EditableSpan/EditableSpan'
import ProfileDataFormFromRedux, {FormProfileDataType} from './ProfileDataForm'
import {FileInput} from '../../common/FileInput/FileInput'
import {userType} from '../../../redux/Users/types'
import {UsersListSmall} from '../../common/UsersListSmall/UsersListSmall'
import {FollowButton} from '../../common/FollowButton/FollowButton'
import {NavLink} from 'react-router-dom'

type ProfileInfoPropsType = {
   profile: profileType
   status: string
   updateStatus: (status: string) => void
   isOwner: boolean
   userId: number
   followed: boolean
   subscriptions: userType[]
   followingInProgress: number[]
   savePhoto: (photo: File) => void
   saveProfile: (profile: any) => any
   followUser: (userId: number) => void
   unfollowUser: (userId: number) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                               profile,
                                                               status, updateStatus,
                                                               isOwner,
                                                               savePhoto,
                                                               saveProfile,
                                                               subscriptions,
                                                               followUser, unfollowUser,
                                                               followingInProgress,
                                                               userId,
                                                               followed,
                                                            }) => {
   const [editMode, setEditMode] = useState(false)
   const {photos, fullName} = profile

   const onSubmit = (values: FormProfileDataType) => {
      saveProfile(values).then(() => {
         setEditMode(false)
      })
   }

   const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.files) {
         savePhoto(e.currentTarget.files[0])
      }
   }

   if (!profile) {
      return <Preloader/>
   } else {
      return (
         <div className={s.profile}>
            <div className={s.main}>
               <img src={photos.large || 'https://dummyimage.com/300x300&text=avatar'} alt={'avatar'}/>
               {
                  isOwner
                     ? <FileInput fileSelected={onMainPhotoSelected} buttonText={'Изменить фото'}/>
                     : <FollowButton width={'100%'} userId={userId} followed={followed} followingInProgress={followingInProgress} follow={followUser}
                                     unfollow={unfollowUser}/>
               }
               {
                  isOwner &&
                 <>
                   <NavLink to={'/friends'} style={{textDecoration: 'none'}}>
                     <h3>Подписки</h3>
                   </NavLink>
                   <UsersListSmall list={subscriptions} count={6}/>
                 </>
               }
            </div>
            <div className={s.info}>
               <h2>{fullName}</h2>
               {
                  isOwner
                     ?
                     <EditableSpan className={s.status} value={status} updateValue={updateStatus}
                                   defaultValue={'установить статус'}/>
                     : <span>{status}</span>
               }
               <hr/>
               {!editMode
                  ? <ProfileData profile={profile} isOwner={isOwner} toEditMode={() => setEditMode(true)}/>
                  : <ProfileDataFormFromRedux onSubmit={onSubmit} initialValues={profile}/>}
            </div>
         </div>
      )
   }
}


type ProfileDataPropsType = {
   profile: profileType
   isOwner: boolean
   toEditMode: () => void
}
const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, toEditMode}) => {
   const {lookingForAJob, lookingForAJobDescription, aboutMe} = profile
   return (
      <div className={s.profileData}>
         {lookingForAJob &&
           <>
             <div>
               <div style={{color: 'green', fontWeight: 'bold'}}>{'В поисках работы'}</div>
               <div>{lookingForAJobDescription}</div>
             </div>
             <hr/>
           </>
         }

         <Contacts contacts={profile.contacts}/>
         <hr/>
         {aboutMe && <div>{aboutMe}</div>}
         {isOwner && <button className={s.editButton} onClick={toEditMode}>Редактировать</button>}
      </div>
   )
}
const Contacts: React.FC<{ contacts: ContactsProfileType }> = ({contacts}) => {
   const {vk, instagram, mainLink, youtube, website, twitter, facebook, github} = contacts
   return (
      <div>
         <div>
            <h4>Контакты:</h4>
            <div>
               GitHub: {<a href={github?.toString()} rel="noreferrer" target={'_blank'}>{github}</a> || '-----'}
            </div>
            <div>
               VK: {<a href={vk?.toString()} rel="noreferrer" target={'_blank'}>{vk}</a> || '-----'}
            </div>
            <div>
               Facebook: {<a href={facebook?.toString()}
                             rel="noreferrer" target={'_blank'}>{facebook}</a> || '-----'}
            </div>
            <div>
               Instagram: {<a href={instagram?.toString()}
                              rel="noreferrer" target={'_blank'}>{instagram}</a> || '-----'}
            </div>
            <div>
               Twitter: {<a href={twitter?.toString()} rel="noreferrer"
                            target={'_blank'}>{twitter}</a> || '-----'}
            </div>
            <div>
               Website: {<a href={website?.toString()} rel="noreferrer"
                            target={'_blank'}>{website}</a> || '-----'}
            </div>
            <div>
               YouTube: {<a href={youtube?.toString()} rel="noreferrer"
                            target={'_blank'}>{youtube}</a> || '-----'}
            </div>
            <div>
               Email: {<a href={mainLink?.toString()} rel="noreferrer"
                          target={'_blank'}>{mainLink}</a> || '-----'}
            </div>
         </div>
      </div>
   )
}




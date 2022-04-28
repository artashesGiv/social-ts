import React, {ChangeEvent, useState} from 'react'
import s from './ProfileInfo.module.scss'
import {Preloader} from '../../common/Preloader/Preloader'
import {ContactsProfileType, profileType} from '../../../redux/Propfile/types'
import {EditableSpan} from '../../common/EditableSpan/EditableSpan'
import ProfileDataFormFromRedux, {FormProfileDataType} from './ProfileDataForm'

type ProfileInfoPropsType = {
   profile: profileType
   status: string
   updateStatus: (status: string) => void
   isOwner: boolean
   savePhoto: (photo: File) => void
   saveProfile: (profile: any) => any
}

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}: ProfileInfoPropsType) => {

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
               {isOwner && <input className={s.changePhoto} type={'file'} onChange={onMainPhotoSelected}/>}
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
const ProfileData = ({profile, isOwner, toEditMode}: ProfileDataPropsType) => {
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

const Contacts = ({contacts}: { contacts: ContactsProfileType }) => {
   const {vk, instagram, mainLink, youtube, website, twitter, facebook, github} = contacts
   return (
      <div>
         <div>
            <h4>Контакты:</h4>
            <div>
               GitHub: {<a href={github?.toString()} target={'_blank'}>{github}</a> || '-----'}
            </div>
            <div>
               VK: {<a href={vk?.toString()} target={'_blank'}>{vk}</a> || '-----'}
            </div>
            <div>
               Facebook: {<a href={facebook?.toString()}
                             target={'_blank'}>{facebook}</a> || '-----'}
            </div>
            <div>
               Instagram: {<a href={instagram?.toString()}
                              target={'_blank'}>{instagram}</a> || '-----'}
            </div>
            <div>
               Twitter: {<a href={twitter?.toString()} target={'_blank'}>{twitter}</a> || '-----'}
            </div>
            <div>
               Website: {<a href={website?.toString()} target={'_blank'}>{website}</a> || '-----'}
            </div>
            <div>
               YouTube: {<a href={youtube?.toString()} target={'_blank'}>{youtube}</a> || '-----'}
            </div>
            <div>
               Email: {<a href={mainLink?.toString()}
                          target={'_blank'}>{mainLink}</a> || '-----'}
            </div>
         </div>
      </div>
   )
}


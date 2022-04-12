import React, {ChangeEvent} from 'react'
import s from './ProfileInfo.module.scss'
import {Preloader} from '../../common/Preloader/Preloader'
import {profileType} from '../../../redux/Propfile/types'
import {EditableSpan} from '../../common/EditableSpan/EditableSpan'

type ProfileInfoPropsType = {
   profile: profileType
   status: string
   updateStatus: (status: string) => void
   isOwner: boolean
   savePhoto: (photo: File) => void
}

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: ProfileInfoPropsType) => {

   const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.files) {
         savePhoto(e.currentTarget.files[0])
      }
   }

   if (!profile) {
      return <Preloader/>
   } else {
      const {lookingForAJob, fullName, photos, contacts, aboutMe, lookingForAJobDescription} = profile
      const contactsLink = Object.values(contacts)
      return (
         <div>
            <div className={s.descriptionBlock}>
               <div><h2>{fullName}</h2></div>
               <div className={s.personalBlock}>
                  <img src={photos.large || 'https://dummyimage.com/200x300&text=avatar'} alt={'avatar'}/>
                  {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                  <div>
                     {
                        isOwner
                        ? <EditableSpan value={status} updateValue={updateStatus} defaultValue={'Установить статус'}/>
                        : <span>{status}</span>
                     }
                     <h3>Контакты</h3>
                     <ul>
                        {contactsLink.map((c, id) => {
                           return c && (
                              <li key={id}>
                                 <a href={c}>{c}</a>
                              </li>
                           )
                        })}
                     </ul>
                     <div>{lookingForAJob ? lookingForAJobDescription : ''}</div>
                     <div>{aboutMe}</div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
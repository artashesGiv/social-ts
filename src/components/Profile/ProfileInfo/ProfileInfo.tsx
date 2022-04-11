import React from 'react'
import s from './ProfileInfo.module.scss'
import {Preloader} from '../../common/Preloader/Preloader'
import {profileType} from '../../../redux/Propfile/types'
import {ProfileStatusHooks} from './ProfileStatusHooks'

type ProfileInfoPropsType = {
   profile: profileType
   status: string
   updateStatus: (status: string) => void
}

export const ProfileInfo = ({profile, status, updateStatus}: ProfileInfoPropsType) => {
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
                  <div>{photos.large ? <img src={photos.large} alt={'avatar'}/> :
                     <img src="https://dummyimage.com/200x300&text=avatar" alt={'avatar'}/>}
                  </div>
                  <div>
                     <ProfileStatusHooks status={status} updateStatus={updateStatus}/>
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
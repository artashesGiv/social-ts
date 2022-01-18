import React from 'react'
import s from './ProfileInfo.module.scss'
import {Preloader} from '../../common/Preloader/Preloader'
import {profileType} from '../../../redux/Propfile/types'

type ProfileInfoPropsType = {
   profile: profileType
}

export const ProfileInfo = ({profile}: ProfileInfoPropsType) => {
   if (!profile) {
      return <Preloader/>
   } else {
      const {lookingForAJob, fullName, photos, contacts, aboutMe, lookingForAJobDescription} = profile
      const contactsLink = Object.values(contacts)
      return (
         <div>
            <div>
               <img
                  src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                  alt="bg"/>
            </div>
            <div className={s.descriptionBlock}>
               <div><h2>{fullName}</h2></div>
               <div className={s.personalBlock}>
                  <div>{photos.large ? <img src={photos.large} alt={'avatar'}/> :
                     <img src="https://dummyimage.com/200x300&text=avatar" alt={'avatar'}/>}</div>
                  <div>
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
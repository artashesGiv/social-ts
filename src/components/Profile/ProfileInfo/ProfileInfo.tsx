import React from 'react'
import s from './ProfileInfo.module.scss'
import {profileType} from '../../../redux/profileReducer'
import {Preloader} from '../../common/Preloader/Preloader'

type ProfileInfoPropsType = {
   profile: profileType
}

export const ProfileInfo = ({profile}: ProfileInfoPropsType) => {
   if (!profile) {
      return <Preloader/>
   } else {
      const {lookingForAJob, fullName, photos, contacts} = profile
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
                  <div><img src={photos.large} alt={'avatar'}/></div>
                  <div>
                     <h3>Контакты</h3>
                     <ul>
                        {contactsLink.map(c => {
                           return c && <li>{c}</li>
                        })}
                     </ul>
                     <div>{lookingForAJob ? 'В поиске работы' : 'Уже работаю'}</div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
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
      return (
         <div>
            <div>
               <img
                  src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                  alt="bg"/>
            </div>
            <div className={s.descriptionBlock}>
               <img src={profile.photos.large} alt={'avatar'}/>
               ava + description
            </div>
         </div>
      )
   }
}
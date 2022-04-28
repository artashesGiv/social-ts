import React from 'react'
import s from './ProfileInfo.module.scss'
import {Input, Textarea} from '../../common/FormsControls/FormsControls'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

export type FormProfileDataType = {
   github: string | null
   vk: string | null
   facebook: string | null
   instagram: string | null
   twitter: string | null
   website: string | null
   youtube: string | null
   mainLink: string | null
   userId: number | null
   lookingForAJob: boolean | null
   lookingForAJobDescription: string | null
   fullName: string | null
}

const ProfileDataForm = ({handleSubmit, error}: InjectedFormProps<FormProfileDataType>) => {

   return (
      <form onSubmit={handleSubmit}  className={s.profileData}>
         {
            error && <div>{error}</div>
         }
         <div>
            <h3>Общие:</h3>
            <div>
               Full Name: <Field placeholder={'Full Name'} name={'fullName'} component={Input}/>
            </div>
            <div>
               Looking for a job: <Field name={'lookingForAJob'} component={Input} type={'checkbox'}/>
               Looking for a job description: <Field placeholder={'description'} name={'lookingForAJobDescription'}
                                                     component={Textarea}/>
            </div>
            <div>
               AboutMe: <Field placeholder={'About me'} name={'aboutMe'} component={Textarea}/>
            </div>
         </div>
         <div>
            <h3>Контакты:</h3>
            <div>
               GitHub: <Field placeholder={'GitGub'} name={'contacts.github'} component={Input}/>
            </div>
            <div>
               VK: <Field placeholder={'VK'} name={'contacts.vk'} component={Input}/>
            </div>
            <div>
               Facebook: <Field placeholder={'Facebook'} name={'contacts.facebook'} component={Input}/>
            </div>
            <div>
               Instagram: <Field placeholder={'Instagram'} name={'contacts.instagram'} component={Input}/>
            </div>
            <div>
               Twitter: <Field placeholder={'Twitter'} name={'contacts.twitter'} component={Input}/>
            </div>
            <div>
               Website: <Field placeholder={'Website'} name={'contacts.website'} component={Input}/>
            </div>
            <div>
               YouTube: <Field placeholder={'YouTube'} name={'contacts.youtube'} component={Input}/>
            </div>
            <div>
               MainLink: <Field placeholder={'MailLink'} name={'contacts.mainLink'} component={Input}/>
            </div>
         </div>
         <button className={s.editButton}>save</button>
      </form>
   )
}

const ProfileDataFormFromRedux = reduxForm<FormProfileDataType>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormFromRedux
import React from 'react'
import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {DialogsPropsType} from './DialogsContainer'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Textarea} from '../common/FormsControls/FormsControls'
import {maxLength, required} from '../../utils/validators/validators'

export const Dialogs = (props: DialogsPropsType) => {

   let dialogsElements = props.dialogsPage.dialogs
      .map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
   let messagesElements = props.dialogsPage.messages
      .map(m => <Message key={m.id} id={m.id} message={m.message}/>)

   const sendMessage = (values: FormDataType) => {
      props.addMessage(values.messageText)
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            <div>{messagesElements}</div>
            <div className={s.input}>
               <SendMessage onSubmit={sendMessage}/>
            </div>
         </div>
      </div>
   )
}

type FormDataType = {
   messageText: string
}

const maxLength30 = maxLength()

const SendMessage = reduxForm<FormDataType>({form: 'sendMessage'})(
   (props: InjectedFormProps<FormDataType>) => {

      const {handleSubmit} = props

      return (
         <form onSubmit={handleSubmit}>
            <div>
               <Field placeholder={'Your message text'} name={'messageText'} component={Textarea} validate={[required, maxLength30]}/>
            </div>
            <div>
               <button>SEND</button>
            </div>
         </form>
      )
   },
)
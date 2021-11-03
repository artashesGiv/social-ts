import React from 'react'
import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {dialogsPageType} from '../../redux/state'

type dialogsPropsType = {
   state: dialogsPageType
}

const Dialogs = (props: dialogsPropsType) => {

   let dialogsElements = props.state.dialogs
      .map(d => <DialogItem id={d.id} name={d.name}/>)
   let messagesElements = props.state.messages
      .map(m => <Message id={m.id} message={m.message}/>)


   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
      </div>
   )
}

export default Dialogs

import React from 'react'
import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {DialogsPropsType} from './DialogsContainer'

export const Dialogs = (props: DialogsPropsType) => {

   let dialogsElements = props.dialogsPage.dialogs
      .map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
   let messagesElements = props.dialogsPage.messages
      .map(m => <Message key={m.id} id={m.id} message={m.message}/>)

   const newMessageElement = React.createRef<HTMLTextAreaElement>()

   const addMessage = () => {
      props.addMessage()
   }

   const onMessageChange = () => {
      if (newMessageElement.current) {
         let text = newMessageElement.current.value
         props.updateTextMessage(text)
      }
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            <div>{messagesElements}</div>
            <div className={s.input}>
               <textarea
                  onChange={onMessageChange}
                  ref={newMessageElement}
                  value={props.dialogsPage.newTextMessage}
               />
               <button onClick={addMessage}>send</button>
            </div>
         </div>
      </div>
   )
}

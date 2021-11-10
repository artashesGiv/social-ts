import React from 'react'
import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {addMessageType, dialogsPageType} from '../../redux/state'

type dialogsPropsType = {
   state: dialogsPageType
   addMessage: addMessageType
}

const Dialogs = (props: dialogsPropsType) => {

   let dialogsElements = props.state.dialogs
      .map(d => <DialogItem id={d.id} name={d.name}/>)
   let messagesElements = props.state.messages
      .map(m => <Message id={m.id} message={m.message}/>)

   const newMessageElement = React.createRef<HTMLTextAreaElement>()

   const addMessage = () => {
      if (newMessageElement.current) {
         let text = newMessageElement.current.value
         props.addMessage(text)
         newMessageElement.current.value = ''
      }
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
         <div className={s.input}>
            <textarea ref={newMessageElement}/>
            <button onClick={addMessage}>send</button>
         </div>
      </div>
   )
}

export default Dialogs

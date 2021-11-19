import React from 'react'
import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {actionsTypes, dialogsPageType} from '../../redux/state'
import {addMessageAC, updateTextMessageAC} from '../../redux/dialogsReducer'

type dialogsPropsType = {
   state: dialogsPageType
   dispatch: (action: actionsTypes) => void
}

const Dialogs = (props: dialogsPropsType) => {

   let dialogsElements = props.state.dialogs
      .map(d => <DialogItem id={d.id} name={d.name}/>)
   let messagesElements = props.state.messages
      .map(m => <Message id={m.id} message={m.message}/>)

   const newMessageElement = React.createRef<HTMLTextAreaElement>()

   const addMessage = () => {
      if (newMessageElement.current) {
         props.dispatch(addMessageAC())
      }
   }

   const onMessageChange = () => {
      if (newMessageElement.current) {
         let text = newMessageElement.current.value
         props.dispatch(updateTextMessageAC(text))
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
                  value={props.state.newTextMessage}
               />
               <button onClick={addMessage}>send</button>
            </div>
         </div>
      </div>
   )
}

export default Dialogs

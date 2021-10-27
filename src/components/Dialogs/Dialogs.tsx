import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.scss'


// --------------------------DialogItem-----------------------------------
type PropsDialogItemType = {
   id: number
   name: string
}

const DialogItem = (props: PropsDialogItemType) => {
   return (
      <div className={s.dialog + ' ' + s.active}>
         <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
      </div>
   )
}

// ------------------------------Message-------------------------------
type MessagePropsType = {
   id: number
   message: string
}

const Message = (props: MessagePropsType) => {
   return (
      <div className={s.message}>{props.message}</div>
   )
}

// ------------------------------Dialogs-------------------------------
type DialogsPropsType = {}

const Dialogs = (props: DialogsPropsType) => {
   // bll -------------------------------------
   let dialogs = [
      {id: 1, name: 'Artashes'},
      {id: 2, name: 'Karina'},
      {id: 3, name: 'Maksim'},
      {id: 4, name: 'Marina'},
      {id: 5, name: 'David'},
   ]

   let messages = [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'Hello'},
      {id: 3, message: 'Yo'},
      {id: 4, message: 'How are you'},
   ]

   let dialogsElements = dialogs
      .map(d => <DialogItem id={d.id} name={d.name}/>)
   let messagesElements = messages
      .map(m => <Message id={m.id} message={m.message}/>)


   // ui ----------------------------------------
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

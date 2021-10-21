import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.scss'


// --------------------------DialogItem-----------------------------------
type PropsDialogItemType = {
   id: string
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
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            <DialogItem id="1" name="Artashes"/>
            <DialogItem id="2" name="Karina"/>
            <DialogItem id="3" name="Maksim"/>
            <DialogItem id="4" name="Marina"/>
            <DialogItem id="5" name="David"/>
         </div>
         <div className={s.messages}>
            <Message message="Hi"/>
            <Message message="Hello"/>
            <Message message="Yo"/>
            <Message message="How are you"/>
         </div>
      </div>
   )
}

export default Dialogs

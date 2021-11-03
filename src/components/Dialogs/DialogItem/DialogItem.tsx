import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './DialogItem.module.scss'

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

export default DialogItem
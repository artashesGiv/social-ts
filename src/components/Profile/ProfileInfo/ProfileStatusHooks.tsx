import React, {ChangeEvent, useEffect, useState} from 'react'

type ProfileStatusPropsType = {
   status: string
   updateStatus: (status: string) => void
}

export const ProfileStatusHooks = (props: ProfileStatusPropsType) => {

   const [editMode, setEditMode] = useState<boolean>(false)
   const [status, setStatus] = useState<string>(props.status)

   const activateEditMode = () => setEditMode(true)
   const deactivateEditMode = () => {
      setEditMode(false)
      props.updateStatus(status)
   }
   const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value)
   }

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   return (
      <div>
         {
            !editMode &&
           <div>
             <span onDoubleClick={activateEditMode}>{props.status || 'Установить статус'}</span>
           </div>
         }
         {
            editMode &&
           <div>
             <input value={status} onBlur={deactivateEditMode} autoFocus={true}
                    onChange={onStatusChange}/>
           </div>
         }
      </div>
   )
}

import React, {ChangeEvent, useEffect, useState} from 'react'

type ProfileStatusPropsType = {
   value: string
   defaultValue: string
   updateValue: (status: string) => void
   className?: string
}

export const EditableSpan = (props: ProfileStatusPropsType) => {

   const [editMode, setEditMode] = useState<boolean>(false)
   const [value, setValue] = useState<string>(props.value)

   const activateEditMode = () => setEditMode(true)
   const deactivateEditMode = () => {
      setEditMode(false)
      props.updateValue(value)
   }
   const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value)
   }

   useEffect(() => {
      setValue(props.value)
   }, [props.value])

   return (
      <div className={props.className}>
         {
            !editMode &&
           <div onClick={activateEditMode}>
             <span>{props.value || props.defaultValue}</span>
           </div>
         }
         {
            editMode &&
           <div>
             <input value={value} onBlur={deactivateEditMode} autoFocus={true}
                    onChange={onValueChange}/>
           </div>
         }
      </div>
   )
}

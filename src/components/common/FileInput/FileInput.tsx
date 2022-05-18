import React, {ChangeEvent} from 'react'
import change from './../../../assets/images/change.png'
import s from './FileInput.module.scss'

type FileInputPropsType = {
   fileSelected: (e: ChangeEvent<HTMLInputElement>) => void
   buttonText?: string
}

export const FileInput: React.FC<FileInputPropsType> = ({fileSelected, buttonText}) => {
   return (
      <div className={s.wrapper}>
         <input className={s.fileInput} id={'input_file'} type={'file'} onChange={fileSelected}/>
         <label className={s.button} htmlFor={'input_file'}>
            <span className={s.icon}><img src={change} alt={'change'}/></span>
            <span className={s.buttonText}>{buttonText || 'Выберите файл'}</span>
         </label>
      </div>
   )
}

import {DetailedHTMLProps, HTMLAttributes} from 'react'
import s from './FormsControls.module.scss'
import {WrappedFieldMetaProps} from 'redux-form/lib/Field'

type InputType<T> = {
   input: DetailedHTMLProps<HTMLAttributes<T>, T>
}

type InputPropsType = {
   meta: WrappedFieldMetaProps
   children: any
}

const FormControl = (props: InputPropsType) => {
   const hasError = props.meta.touched && props.meta.error
   return (
      <div className={s.formControl + ' ' + (hasError && s.error)}>
         <div>
            {props.children}
         </div>
         {hasError && <span>{props.meta.error}</span>}
      </div>
   )
}

export const Input = (props: InputPropsType & InputType<HTMLInputElement>) => {
   const {input, ...restProps} = props
   return <FormControl {...props}><input {...input} {...restProps} className={s.input}/></FormControl>
}

export const Textarea = (props: InputPropsType & InputType<HTMLTextAreaElement>) => {
   const {input, ...restProps} = props
   return <FormControl {...props}><textarea {...input} {...restProps} className={s.textarea}/></FormControl>
}

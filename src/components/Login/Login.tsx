import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from '../common/FormsControls/FormsControls'
import {required} from '../../utils/validators/validators'

export const Login = () => {
   const onSubmit = (values: FormDataType) => {
      console.log(values)
   }

   return (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
      </div>
   )
}

type FormDataType = {
   login: string
   password: string
   rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {

   const {handleSubmit} = props

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <Field placeholder={'Login'} name={'login'} component={Input} validate={[required]}/>
         </div>
         <div>
            <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]}/>
         </div>
         <div>
            <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
         </div>
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
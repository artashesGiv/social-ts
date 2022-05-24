import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from '../common/FormsControls/FormsControls'
import {required} from '../../utils/validators/validators'
import {connect} from 'react-redux'
import {login} from '../../redux/Auth/authReduser'
import {initialStateAuthType} from '../../redux/Auth/types'
import {AppStateType} from '../../redux/reduxStore'
import {Redirect} from 'react-router-dom'
import s from './Login.module.scss'

const Login = (props: LoginPropsType) => {
   const onSubmit = (values: FormDataType) => {
      props.login(values.login, values.password, values.rememberMe)
   }

   if (props.auth.isAuth) {
      return <Redirect to={'/profile'}/>
   }

   return (
      <div className={s.wrapper}>
         <div className={s.content}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
         </div>
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
      <form onSubmit={handleSubmit} className={s.form}>
         <div>
            <Field placeholder={'Login'} name={'login'} component={Input} validate={[required]}/>
         </div>
         <div>
            <Field placeholder={'Password'} name={'password'} type={'password'} component={Input}
                   validate={[required]}/>
         </div>
         {props.error &&
           <div className={s.formError}>
              {props.error}
           </div>}
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


type LoginPropsType = MapSateToPropsType & MapDispatchToPropsType
type MapSateToPropsType = {
   captchaUrl: string | null
   auth: initialStateAuthType
}
type MapDispatchToPropsType = {
   login: (email: string, password: string, rememberMe: boolean) => void
}


const mapStateToProps = (state: AppStateType): MapSateToPropsType => ({
   captchaUrl: state.auth.captchaUrl,
   auth: state.auth,
})

export default connect(mapStateToProps, {login})(Login)
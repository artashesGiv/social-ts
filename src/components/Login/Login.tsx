import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from '../common/FormsControls/FormsControls'
import {required} from '../../utils/validators/validators'
import {connect} from 'react-redux'
import {login} from '../../redux/Auth/authReduser'
import {initialStateAuthType} from '../../redux/Auth/types'
import {AppStateType} from '../../redux/reduxStore'
import {Redirect} from 'react-router-dom'

const Login = (props: LoginPropsType) => {
   const onSubmit = (values: FormDataType) => {
      props.login(values.login, values.password, values.rememberMe)
   }

   if (props.auth.isAuth) {
      return <Redirect to={'/profile'}/>
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
            <Field placeholder={'Password'} name={'password'} type={'password'} component={Input}
                   validate={[required]}/>
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


type LoginPropsType = MapSateToPropsType & MapDispatchToPropsType
type MapSateToPropsType = {
   auth: initialStateAuthType
}
type MapDispatchToPropsType = {
   login: (email: string, password: string, rememberMe: boolean) => void
}


const mapStateToProps = (state: AppStateType): MapSateToPropsType => ({
   auth: state.auth,
})

export default connect(mapStateToProps, {login})(Login)
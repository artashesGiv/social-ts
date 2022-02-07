import React, {ComponentType} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {AppStateType} from '../redux/reduxStore'

type mapSateToPropsRedirectType = {
   isAuth: boolean
}

const mapSateToPropsRedirect = (state: AppStateType): mapSateToPropsRedirectType => {
   return {
      isAuth: state.auth.isAuth,
   }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

   const AuthRedirect = (props: mapSateToPropsRedirectType) => {
      const {isAuth, ...restProps} = props
      if (!isAuth) return <Redirect to={'/login'}/>
      return <Component {...restProps as T}/>
   }

   return connect(mapSateToPropsRedirect)(AuthRedirect)
}

import {initialStateAuthType} from './types'
import {authAPI} from '../../api/api'
import {Dispatch} from 'redux'
import {stopSubmit} from 'redux-form'

const initialState: initialStateAuthType = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
}

export const authReducer = (state: initialStateAuthType = initialState, action: actionTypes): initialStateAuthType => {
   switch (action.type) {
      case 'SET-USER-DATA':
         return {
            ...state,
            ...action.payload,
         }
      default: {
         return state
      }
   }
}

type actionTypes = ReturnType<typeof setAuthUserData> | ReturnType<typeof stopSubmit>

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
   type: 'SET-USER-DATA',
   payload: {
      userId,
      email,
      login,
      isAuth,
   },
} as const)


export const authMe = () => (dispatch: Dispatch<actionTypes>) => {
   return authAPI.authMe().then(res => {
      if (res.data.resultCode === 0) {
         const {id, email, login} = res.data.data
         dispatch(setAuthUserData(id, email, login, true))
      }
   })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<actionTypes>) => {
   authAPI.login(email, password, rememberMe).then(res => {
      if (res.data.resultCode === 0) {
         // @ts-ignore
         dispatch(authMe())
      } else {
         const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some Error'
         dispatch(stopSubmit('login', {_error: message}))
      }
   })
}
export const logout = () => (dispatch: Dispatch<actionTypes>) => {
   authAPI.logout().then(res => {
      if (res.data.resultCode === 0) {
         dispatch(setAuthUserData(null, null, null, false))
      }
   })
}
import {initialStateAuthType} from './types'
import {authAPI, securityAPI} from '../../api/api'
import {Dispatch} from 'redux'
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'auth/SET-USER-DATA'
const SET_CAPTCHA_URL = 'auth/SET-CAPTCHA-URL'

const initialState: initialStateAuthType = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   captchaUrl: null,
}

export const authReducer = (state: initialStateAuthType = initialState, action: actionTypes): initialStateAuthType => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.payload,
         }
      case SET_CAPTCHA_URL:
         return {
            ...state,
            ...action.payload
         }
      default: {
         return state
      }
   }
}

type actionTypes = ReturnType<typeof setAuthUserData>
   | ReturnType<typeof stopSubmit>
   | ReturnType<typeof setCaptchaUrl>

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
   type: SET_USER_DATA,
   payload: {
      userId,
      email,
      login,
      isAuth,
   },
} as const)

export const setCaptchaUrl = (captchaUrl: string) => ({
   type: SET_CAPTCHA_URL,
   payload: {
      captchaUrl,
   },
})

export const authMe = () => async (dispatch: Dispatch<actionTypes>) => {
   let res = await authAPI.authMe()

   if (res.data.resultCode === 0) {
      const {id, email, login} = res.data.data
      dispatch(setAuthUserData(id, email, login, true))
   }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<actionTypes>) => {
   const res = await authAPI.login(email, password, rememberMe)
   if (res.data.resultCode === 0) {
      // @ts-ignore
      dispatch(authMe())
   } else {
      if (res.data.resultCode === 10) {
         // @ts-ignore
         dispatch(getCaptchaUrl())
      }
      const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some Error'
      dispatch(stopSubmit('login', {_error: message}))
   }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch<actionTypes>) => {
   const res = await securityAPI.getCaptchaUrl()
   dispatch(setCaptchaUrl(res.data.url))
}

export const logout = () => async (dispatch: Dispatch<actionTypes>) => {
   const res = await authAPI.logout()
   if (res.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
   }
}
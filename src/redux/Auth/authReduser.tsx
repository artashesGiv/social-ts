import {initialStateAuthType} from './types'
import {authAPI} from '../../api/api'

const initialState: initialStateAuthType = {
   userId: null,
   email: null,
   login: null,
   isAuth: false
}

export const authReducer = (state: initialStateAuthType = initialState, action: actionType): initialStateAuthType => {
   switch (action.type) {
      case 'SET-USER-DATA':
         return {
            ...state,
            ...action.data,
            isAuth: true
         }
      default: {
         return state
      }
   }
}

type actionType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: number, email: string, login: string) => ({
   type: 'SET-USER-DATA',
   data: {
      userId,
      email,
      login,
   },
} as const)

export const authMe = () => {
   return (dispatch: any) => {
      authAPI.authMe().then(data => {
         if (data.resultCode === 0) {
            const {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login))
         }
      })
   }
}
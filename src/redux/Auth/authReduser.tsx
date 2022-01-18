import {initialStateAuthType} from './types'

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
import {initialStateAppType} from './types'
import {Dispatch} from 'redux'
import {authMe} from '../Auth/authReduser'

const initialState: initialStateAppType = {
   initialized: false,
}

export const appReducer = (state: initialStateAppType = initialState, action: actionTypes): initialStateAppType => {
   switch (action.type) {
      case 'INITIALIZED-SUCCESS':
         return {
            ...state,
            initialized: true,
         }
      default: {
         return state
      }
   }
}

type actionTypes = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => ({type: 'INITIALIZED-SUCCESS'} as const)
export const initializeApp = () => (dispatch: Dispatch<actionTypes>) => {
   // @ts-ignore
   Promise.all([dispatch(authMe())]).then(() => {
      setTimeout(() => {
         dispatch(initializedSuccess())
      }, 1000)
   })
}
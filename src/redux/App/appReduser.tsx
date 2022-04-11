import {initialStateAppType} from './types'
import {Dispatch} from 'redux'
import {authMe} from '../Auth/authReduser'

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS'

const initialState: initialStateAppType = {
   initialized: false,
}

export const appReducer = (state: initialStateAppType = initialState, action: actionTypes): initialStateAppType => {
   switch (action.type) {
      case INITIALIZED_SUCCESS:
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
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)
export const initializeApp = () => async (dispatch: Dispatch<actionTypes>) => {
   // @ts-ignore
   const promise = dispatch(authMe())

   await Promise.all([promise]).then(() => {
      dispatch(initializedSuccess())
   })
}
import {combineReducers, createStore} from '@reduxjs/toolkit'
import {profileReducer} from './profileReducer'
import {dialogsReducer} from './dialogsReducer'
import {navbarReducer} from './navbarReducer'

export const rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   navBar: navbarReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)



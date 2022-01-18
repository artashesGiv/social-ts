import {combineReducers, createStore} from '@reduxjs/toolkit'
import {navbarReducer} from './Navbar/navbarReducer'
import {usersReducer} from './Users/usersReducer'
import {profileReducer} from './Propfile/profileReducer'
import {dialogsReducer} from './Dialogs/dialogsReducer'
import {authReducer} from './Auth/authReduser'

export const rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   navBar: navbarReducer,
   usersPage: usersReducer,
   auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)

//@ts-ignore
window.store = store


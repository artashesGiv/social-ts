import {combineReducers, createStore} from '@reduxjs/toolkit'
import {navbarReducer} from './Navbar/navbarReducer'
import {usersReducer} from './usersReducer'
import {profileReducer} from './Propfile/profileReducer'
import {dialosReducer} from './Dialogs/dialosReducer'

export const rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialosReducer,
   navBar: navbarReducer,
   usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)



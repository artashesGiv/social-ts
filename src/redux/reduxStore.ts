import {applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit'
import {navbarReducer} from './Navbar/navbarReducer'
import {usersReducer} from './Users/usersReducer'
import {profileReducer} from './Propfile/profileReducer'
import {dialogsReducer} from './Dialogs/dialogsReducer'
import {authReducer} from './Auth/authReduser'
import thunkMiddleware from 'redux-thunk'

export const rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   navBar: navbarReducer,
   usersPage: usersReducer,
   auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store


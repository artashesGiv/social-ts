import {applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit'
import {navbarReducer} from './Navbar/navbarReducer'
import {usersReducer} from './Users/usersReducer'
import {profileReducer} from './Propfile/profileReducer'
import {dialogsReducer} from './Dialogs/dialogsReducer'
import {authReducer} from './Auth/authReduser'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from './App/appReduser'

export const rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   navBar: navbarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store


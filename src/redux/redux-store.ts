import {combineReducers, createStore} from '@reduxjs/toolkit'
import {profileReducer} from './profileReducer'
import {dialogsReducer} from './dialogsReducer'
import {navbarReducer} from './navbarReducer'
import {usersReducer} from './usersReducer'

export const rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   navBar: navbarReducer,
   usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)



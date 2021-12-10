import {combineReducers, createStore} from '@reduxjs/toolkit'
import {addPostAC, profileReducer, updateNewTextPostAC} from './profileReducer'
import {addMessageAC, dialogsReducer, updateTextMessageAC} from './dialogsReducer'
import {navbarReducer} from './navbarReducer'
import {
   followAC,
   setCurrentPageAC,
   setTotalUsersCountAC,
   setUsersAC,
   toggleIsFetchingAC,
   unfollowAC,
   usersReducer,
} from './usersReducer'

export const rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   navBar: navbarReducer,
   usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)

// actions-type
export type actionsTypes =
   ReturnType<typeof addPostAC>
   | ReturnType<typeof updateNewTextPostAC>
   | ReturnType<typeof addMessageAC>
   | ReturnType<typeof updateTextMessageAC>
   | ReturnType<typeof followAC>
   | ReturnType<typeof unfollowAC>
   | ReturnType<typeof setUsersAC>
   | ReturnType<typeof setCurrentPageAC>
   | ReturnType<typeof setTotalUsersCountAC>
   | ReturnType<typeof toggleIsFetchingAC>


import {AppStateType} from '../reduxStore'
import {createSelector} from 'reselect'
import {initialStateUsersType} from './types'

export const getUsersPage = (state: AppStateType) => {
   return state.usersPage
}

export const getUsersPageSuper = createSelector(getUsersPage, (usersPage: initialStateUsersType) => {
   return usersPage
})
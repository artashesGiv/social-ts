import {AppStateType} from '../reduxStore'

export const getUsersPage = (state: AppStateType) => {
   return state.usersPage
}
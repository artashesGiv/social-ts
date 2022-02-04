import {initialStateUsersType, usersType} from './types'
import {usersAPI} from '../../api/api'
import {Dispatch} from 'redux'

const initialStateUsers: initialStateUsersType = {
   users: [],
   pageSize: 50,
   totalUsersCount: 20,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [],
}

export const usersReducer = (state: initialStateUsersType = initialStateUsers, action: actionsTypes): initialStateUsersType => {
   switch (action.type) {
      case 'FOLLOW':
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return {...u, followed: true}
               }
               return u
            }),
         }
      case 'UNFOLLOW':
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return {...u, followed: false}
               }
               return u
            }),
         }
      case 'SET-USERS':
         return {...state, users: action.users}
      case 'SET-CURRENT-PAGE':
         return {...state, currentPage: action.currentPage}
      case 'SET-TOTAL-USERS-COUNT':
         return {...state, totalUsersCount: action.totalUsers}
      case 'TOGGLE-IS-FETCHING':
         return {...state, isFetching: action.isFetching}
      case 'TOGGLE-IS-FETCHING-PROGRESS':
         return {
            ...state, followingInProgress: action.followingInProgress
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id !== action.userId),
         }
      default:
         return state
   }
}

type actionsTypes = ReturnType<typeof follow>
   | ReturnType<typeof unfollow>
   | ReturnType<typeof setUsers>
   | ReturnType<typeof setCurrentPage>
   | ReturnType<typeof setTotalUsersCount>
   | ReturnType<typeof toggleIsFetching>
   | ReturnType<typeof toggleIsFetchingProgress>

export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: Array<usersType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsers: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalUsers} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleIsFetchingProgress = (followingInProgress: boolean, userId: number) => ({
   type: 'TOGGLE-IS-FETCHING-PROGRESS',
   followingInProgress,
   userId,
} as const)

export const getUsers = (currentPage: number, pageSize: number) => {

   return (dispatch: any) => { // fixed any

      dispatch(toggleIsFetching(true))
      usersAPI.getUsers(currentPage, pageSize).then(data => {
         dispatch(toggleIsFetching(false))
         dispatch(setUsers(data.items))
         dispatch(setTotalUsersCount(data.totalCount))
         dispatch(setCurrentPage(currentPage))
      })
   }

}

export const followUser = (userId: number) => {
   return (dispatch: any) => {
      dispatch(toggleIsFetchingProgress(true, userId))
      usersAPI.followUser(userId)
         .then(data => {
         if (data.resultCode === 0) {
            dispatch(follow(userId))
         }
         dispatch(toggleIsFetchingProgress(false, userId))
      })
   }
}


export const unfollowUser = (userId: number) => {
   return (dispatch: Dispatch<actionsTypes>) => {
      dispatch(toggleIsFetchingProgress(true, userId))
      usersAPI.unfollowUser(userId)
         .then(data => {
         if (data.resultCode === 0) {
            dispatch(unfollow(userId))
         }
         dispatch(toggleIsFetchingProgress(false, userId))
      })
   }
}
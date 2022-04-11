import {initialStateUsersType, usersType} from './types'
import {usersAPI} from '../../api/api'
import {Dispatch} from 'redux'

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET-USERS'
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING'
const TOGGLE_IS_FETCHING_PROGRESS = 'users/TOGGLE-IS-FETCHING-PROGRESS'


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
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return {...u, followed: true}
               }
               return u
            }),
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return {...u, followed: false}
               }
               return u
            }),
         }
      case SET_USERS:
         return {...state, users: action.users}
      case SET_CURRENT_PAGE:
         return {...state, currentPage: action.currentPage}
      case SET_TOTAL_USERS_COUNT:
         return {...state, totalUsersCount: action.totalUsers}
      case TOGGLE_IS_FETCHING:
         return {...state, isFetching: action.isFetching}
      case TOGGLE_IS_FETCHING_PROGRESS:
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

export const follow = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<usersType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsers: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsers} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleIsFetchingProgress = (followingInProgress: boolean, userId: number) => ({
   type: TOGGLE_IS_FETCHING_PROGRESS,
   followingInProgress,
   userId,
} as const)

export const getUsers = (currentPage: number, pageSize: number) => {

   return (dispatch: any) => { // fixed any

      dispatch(toggleIsFetching(true))
      usersAPI.getUsers(currentPage, pageSize).then(response => {
         dispatch(toggleIsFetching(false))
         dispatch(setUsers(response.data.items))
         dispatch(setTotalUsersCount(response.data.totalCount))
         dispatch(setCurrentPage(currentPage))
      })
   }

}

export const followUser = (userId: number) => {
   return (dispatch: any) => {
      dispatch(toggleIsFetchingProgress(true, userId))
      usersAPI.followUser(userId)
         .then(response => {
         if (response.data.resultCode === 0) {
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
         .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(unfollow(userId))
         }
         dispatch(toggleIsFetchingProgress(false, userId))
      })
   }
}
import {actionsTypes} from './redux-store'

// export type locationType = {
//    city: string
//    country: string
// }

export type photoType = {
   small: any
   large: any
}

export type usersType = {
   name: string
   id: number
   photos: photoType
   status: string
   followed: boolean
}

export type initialStateUsersType = {
   users: Array<usersType>
   pageSize: number
   totalUsersCount: number
   currentPage: number
}

const initialStateUsers: initialStateUsersType = {
   users: [],
   pageSize: 5,
   totalUsersCount: 20,
   currentPage: 1
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
         return {...state, currentPage: action.currenPage}
      case 'SET-TOTAL-USERS-COUNT':
         return {...state, totalUsersCount: action.totalUsers}
      default:
         return state
   }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<usersType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPageAC = (currenPage: number) => ({type: 'SET-CURRENT-PAGE', currenPage} as const)
export const setTotalUsersCountAC = (totalUsers: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalUsers} as const)

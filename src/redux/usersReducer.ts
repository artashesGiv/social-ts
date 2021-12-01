import {actionsTypes} from './redux-store'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type locationType = {
   city: string
   country: string
}

export type usersType = {
   id: string
   photoURL: string
   fullName: string
   status: string
   location: locationType
   followed: boolean
}

export type initialStateUsersType = {
   users: Array<usersType>
}

const initialStateUsers = {
   users: [

   ],
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
         return {...state, users: [...state.users, ...action.users]}
      default:
         return state
   }
}

export const followAC = (userId: string) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<usersType>) => ({type: SET_USERS, users} as const)

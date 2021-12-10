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
   isFetching: boolean
}

const initialStateUsers: initialStateUsersType = {
   users: [],
   pageSize: 5,
   totalUsersCount: 20,
   currentPage: 1,
   isFetching: false,
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
      case 'TOGGLE-IS-FETCHING':
         return {...state, isFetching: action.isFetching}
      default:
         return state
   }
}

type actionsTypes = ReturnType<typeof follow>
   | ReturnType<typeof unfollow>
   | ReturnType<typeof setUsers>
   | ReturnType<typeof setCurrentPage>
   | ReturnType<typeof setTotalUsersCount>
   | ReturnType < typeof toggleIsFetching>

export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: Array<usersType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currenPage: number) => ({type: 'SET-CURRENT-PAGE', currenPage} as const)
export const setTotalUsersCount = (totalUsers: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalUsers} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)

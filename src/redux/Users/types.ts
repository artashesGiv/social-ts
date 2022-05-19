export type userType = {
   name: string
   id: number
   photos: {
      small: string
      large: string
   }
   status: string
   followed: boolean
}

export type initialStateUsersType = {
   users: Array<userType>
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFetching: boolean
   followingInProgress: number[]
}


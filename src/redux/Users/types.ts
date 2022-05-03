
type photosType = {
   small: string
   large: string
}

export type userType = {
   name: string
   id: number
   photos: photosType
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


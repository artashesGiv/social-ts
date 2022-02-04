
type photosType = {
   small: string
   large: string
}

export type usersType = {
   name: string
   id: number
   photos: photosType
   status: string
   followed: boolean
}

export type initialStateUsersType = {
   users: Array<usersType>
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFetching: boolean
   followingInProgress: number[]
}


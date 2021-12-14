export type profileType = {
   aboutMe: string | null
   contacts: {
      facebook: string | null
      website: string | null
      vk: string | null
      twitter: string | null
      instagram: string | null
      youtube: string | null
      github: string | null
      mainLink: string | null
   }
   lookingForAJob: boolean
   lookingForAJobDescription: string | null
   fullName: string | null
   userId: number
   photos: {
      small: string
      large: string
   }
} | null

export type postType = {
   id: string
   post: string
   like: number
}

export type initialStateProfileType = {
   profile: profileType
   posts: postType[]
   newTextPost: string
}

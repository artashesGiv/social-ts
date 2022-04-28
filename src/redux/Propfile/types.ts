export type profileType = {
   aboutMe: string | null
   contacts: ContactsProfileType
   lookingForAJob: boolean
   lookingForAJobDescription: string | null
   fullName: string | null
   userId: number
   photos: {
      small: string
      large: string
   }
}

export type ContactsProfileType = {
   facebook: string | null
   website: string | null
   vk: string | null
   twitter: string | null
   instagram: string | null
   youtube: string | null
   github: string | null
   mainLink: string | null
}

export type postType = {
   id: string
   post: string
   like: number
}

export type initialStateProfileType = {
   profile: profileType
   posts: postType[]
   status: string
}
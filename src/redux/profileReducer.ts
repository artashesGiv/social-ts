import {v1} from 'uuid'

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

const initialStateProfile: initialStateProfileType = {
   profile: {
      aboutMe: null,
      contacts: {
         facebook: null,
         website: null,
         vk: null,
         twitter: null,
         instagram: null,
         youtube: null,
         github: null,
         mainLink: null,
      },
      lookingForAJob: false,
      lookingForAJobDescription: null,
      fullName: null,
      userId: 0,
      photos: {
         small: '',
         large: '',
      },
   },
   posts: [
      {id: v1(), post: 'Hi. how are you!', like: 15},
      {id: v1(), post: 'Hello', like: 20},
      {id: v1(), post: 'My posts', like: 6},
      {id: v1(), post: 'How are you', like: 76},
   ],
   newTextPost: '',
}

export const profileReducer = (state: initialStateProfileType = initialStateProfile, action: actionsTypes): initialStateProfileType => {
   switch (action.type) {
      case 'ADD-POST':
         const newPost: postType = {
            id: v1(),
            post: state.newTextPost,
            like: 0,
         }
         return {
            ...state,
            posts: [newPost, ...state.posts],
            newTextPost: '',
         }
      case 'UPDATE-TEXT-POST':
         return {
            ...state,
            newTextPost: action.newTextPost,
         }
      case 'SET-USER-PROFILE':
         return {
            ...state, profile: action.profile,
         }
      default:
         return state
   }
}

type actionsTypes =
   ReturnType<typeof addPost>
   | ReturnType<typeof updateTextPost>
   | ReturnType<typeof setUserProfile>

export const addPost = () => ({type: 'ADD-POST'} as const)
export const updateTextPost = (newTextPost: string) => ({
   type: 'UPDATE-TEXT-POST',
   newTextPost,
} as const)
export const setUserProfile = (profile: profileType) => ({
   type: 'SET-USER-PROFILE',
   profile,
} as const)
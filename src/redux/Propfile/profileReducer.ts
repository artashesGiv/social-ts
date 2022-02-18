import {v1} from 'uuid'
import {initialStateProfileType, postType, profileType} from './types'
import {profileAPI} from '../../api/api'
import {Dispatch} from 'redux'

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
   status: '',
}

export const profileReducer = (state: initialStateProfileType = initialStateProfile, action: actionsTypes): initialStateProfileType => {
   switch (action.type) {
      case 'ADD-POST':
         const newPost: postType = {
            id: v1(),
            post: action.textPost,
            like: 0,
         }
         return {
            ...state,
            posts: [newPost, ...state.posts],
         }
      case 'SET-USER-PROFILE':
         return {
            ...state, profile: action.profile,
         }
      case 'SET-USER-STATUS':
         return {
            ...state,
            status: action.status,
         }
      default:
         return state
   }
}

type actionsTypes =
   ReturnType<typeof addPost>
   | ReturnType<typeof setUserProfile>
   | ReturnType<typeof setUserStatus>

export const addPost = (textPost: string) => ({type: 'ADD-POST', textPost} as const)

export const setUserProfile = (profile: profileType) => ({
   type: 'SET-USER-PROFILE',
   profile,
} as const)

export const setUserStatus = (status: string) => ({
   type: 'SET-USER-STATUS',
   status,
} as const)

export const getUserProfile = (userId: string) => {
   return (dispatch: Dispatch<actionsTypes>) => {
      profileAPI.getProfile(userId).then(response => {
         dispatch(setUserProfile(response.data))
      })
   }
}

export const getUserStatus = (userId: string) => {
   return (dispatch: Dispatch<actionsTypes>) => {
      profileAPI.getStatus(userId).then(response => {
         dispatch(setUserStatus(response.data))
      })
   }
}

export const updateUserStatus = (status: string) => {
   return (dispatch: Dispatch<actionsTypes>) => {
      profileAPI.updateStatus(status).then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
         }
      })
   }
}
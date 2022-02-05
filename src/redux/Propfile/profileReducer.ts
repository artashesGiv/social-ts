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

export const getUserProfile = (userId: string) => {
   return (dispatch: Dispatch<actionsTypes>) => {
      profileAPI.getProfile(userId).then(response => {
         dispatch(setUserProfile(response.data))
      })
   }
}
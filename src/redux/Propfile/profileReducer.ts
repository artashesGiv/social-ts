import {v1} from 'uuid'
import {initialStateProfileType, postType, profileType} from './types'
import {profileAPI} from '../../api/api'
import {Dispatch} from 'redux'

const ADD_POST = 'profile/ADD-POST'
const DELETE_POST = 'profile/DELETE-POST'
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_USER_STATUS = 'profile/SET-USER-STATUS'
const SET_USER_PHOTO = 'profile/SET-USER-PHOTO'

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
      case ADD_POST:
         const newPost: postType = {
            id: v1(),
            post: action.textPost,
            like: 0,
         }
         return {
            ...state,
            posts: [newPost, ...state.posts],
         }
      case DELETE_POST:
         return {
            ...state,
            posts: state.posts.filter(p => p.id !== action.postId),
         }
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile,
         }
      case SET_USER_STATUS:
         return {
            ...state,
            status: action.status,
         }
      case SET_USER_PHOTO:
         return {
            ...state,
            profile: {
               ...state.profile,
               photos: action.photos,
            },
         }

      default:
         return state
   }
}

type actionsTypes =
   ReturnType<typeof addPost>
   | ReturnType<typeof setUserProfile>
   | ReturnType<typeof setUserStatus>
   | ReturnType<typeof deletePost>
   | ReturnType<typeof setUserPhoto>

export const addPost = (textPost: string) => ({type: ADD_POST, textPost} as const)
export const deletePost = (postId: string) => ({type: DELETE_POST, postId} as const)

export const setUserProfile = (profile: profileType) => ({
   type: SET_USER_PROFILE,
   profile,
} as const)

export const setUserStatus = (status: string) => ({
   type: SET_USER_STATUS,
   status,
} as const)

export const setUserPhoto = (photos: { large: string, small: string }) => ({
   type: SET_USER_PHOTO,
   photos,
} as const)


export const getUserProfile = (userId: string) => async (dispatch: Dispatch<actionsTypes>) => {
   const res = await profileAPI.getProfile(userId)
   dispatch(setUserProfile(res.data))
}

export const getUserStatus = (userId: string) => async (dispatch: Dispatch<actionsTypes>) => {
   const res = await profileAPI.getStatus(userId)
   dispatch(setUserStatus(res.data))
}

export const updateUserStatus = (status: string) => async (dispatch: Dispatch<actionsTypes>) => {
   const res = await profileAPI.updateStatus(status)
   if (res.data.resultCode === 0) {
      dispatch(setUserStatus(status))
   }
}

export const savePhoto = (photo: File) => async (dispatch: Dispatch<actionsTypes>) => {
   const res = await profileAPI.savePhoto(photo)
   if (res.data.resultCode === 0) {
      const photos = res.data.data
      dispatch(setUserPhoto(photos))
   }
}
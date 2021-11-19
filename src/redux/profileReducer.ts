import {actionsTypes, postType, profilePageType} from './state'
import {v1} from 'uuid'

export const ADD_POST = 'ADD-POST'
export const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST'

export const profileReducer = (state: profilePageType, action: actionsTypes) => {

   switch (action.type) {
      case ADD_POST:
         const newPost: postType = {
            id: v1(),
            post: state.newTextPost,
            like: 0,
         }
         state.posts.push(newPost)
         state.newTextPost = ''
         return state
      case UPDATE_TEXT_POST:
         state.newTextPost = action.newTextPost
         return state
      default:
         return state
   }
}


export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewTextPostAC = (newTextPost: string) => ({
   type: UPDATE_TEXT_POST,
   newTextPost,
} as const)
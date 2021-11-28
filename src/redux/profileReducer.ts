import {actionsTypes} from './store'
import {v1} from 'uuid'

const ADD_POST = 'ADD-POST'
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST'

export type postType = {
   id: string
   post: string
   like: number
}
export type initialStateProfileType = {
   posts: Array<postType>
   newTextPost: string
}

let initialStateProfile = {
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
      case ADD_POST:
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
      case UPDATE_TEXT_POST:
         return {
            ...state,
            newTextPost: action.newTextPost
         }
      default:
         return state
   }
}


export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewTextPostAC = (newTextPost: string) => ({
   type: UPDATE_TEXT_POST,
   newTextPost,
} as const)
import {v1} from 'uuid'

export type postType = {
   id: string
   post: string
   like: number
}
export type initialStateProfileType = {
   posts: Array<postType>
   newTextPost: string
}

let initialStateProfile: initialStateProfileType = {
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
            newTextPost: action.newTextPost
         }
      default:
         return state
   }
}

type actionsTypes =
   ReturnType<typeof addPost>
   | ReturnType<typeof updateTextPost>

export const addPost = () => ({type: 'ADD-POST'} as const)
export const updateTextPost = (newTextPost: string) => ({
   type: 'UPDATE-TEXT-POST',
   newTextPost,
} as const)
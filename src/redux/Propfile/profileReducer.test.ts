import {addPost, deletePost, profileReducer} from './profileReducer'
import {initialStateProfileType} from './types'
import {v1} from 'uuid'

const state: initialStateProfileType = {
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


it('new post should be added to the top of the post list', () => {
   // 1. start data
   const newPostText = 'new post'
   const action = addPost(newPostText)

   // 2. action
   let newState = profileReducer(state, action)

   // 3. expectation
   expect(newState.posts.length).toBe(5)
   expect(newState.posts[0].post).toBe(newPostText)
   expect(newState.posts[0].like).toBe(0)
})

it('after deleting length of post should be decrement', () => {
   // 1. start data
   const postId = state.posts[0].id
   const action = deletePost(postId)

   // 2. action
   let newState = profileReducer(state, action)

   // 3. expectation
   expect(newState.posts.length).toBe(3)
})

it('after deleting length of post shouldn`t be decrement if it id is incorrect', function () {
   // 1. start data
   const incorrectPostId = '1000'
   const action = deletePost(incorrectPostId)

   // 2. action
   let newState = profileReducer(state, action)

   // 3. expectation
   expect(newState.posts.length).toBe(4)
})
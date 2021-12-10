import {v1} from 'uuid'
import {addPostAC, profileReducer} from './profileReducer'
import  {dialogsReducer} from './dialogsReducer'

// ================Типы===================
//profile types
type postType = {
   id: string
   post: string
   like: number
}
type profilePageType = {
   posts: Array<postType>
   newTextPost: string
}

// dialogs types
type dialogType = {
   id: string
   name: string
}
type messageType = {
   id: string
   message: string
}
type dialogsPageType = {
   dialogs: Array<dialogType>
   messages: Array<messageType>
   newTextMessage: string
}

// navbar types
export type navbarElementType = {
   name: string
   link: string
}
type navbarType = {
   elements: Array<navbarElementType>
}

// state type
type stateType = {
   profilePage: profilePageType
   dialogsPage: dialogsPageType
   navbar: navbarType
}

// dispatchType
type dispatchType = (action: actionsTypes) => void

// store type
type storeType = {
   _state: stateType
   _onChange: () => void

   subscribe: (observer: () => void) => void
   getState: () => stateType
   dispatch: dispatchType
}
// --------------- action type --------------
type actionsTypes =
   ReturnType<typeof addPostAC>
// ================Store===================
const store: storeType = {
   _state: {
      profilePage: {
         posts: [
            {id: v1(), post: 'Hi. how are you!', like: 15},
            {id: v1(), post: 'Hello', like: 20},
            {id: v1(), post: 'My posts', like: 6},
            {id: v1(), post: 'How are you', like: 76},
         ],
         newTextPost: '',
      },
      dialogsPage: {
         dialogs: [
            {id: v1(), name: 'Artashes'},
            {id: v1(), name: 'Karina'},
            {id: v1(), name: 'Maksim'},
            {id: v1(), name: 'Marina'},
            {id: v1(), name: 'David'},
         ],
         messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'Hello'},
            {id: v1(), message: 'Yo'},
            {id: v1(), message: 'How are you'},
         ],
         newTextMessage: '',
      },
      navbar: {
         elements: [
            {name: 'Profile', link: '/profile'},
            {name: 'Dialogs', link: '/dialogs'},
            {name: 'News', link: '/news'},
            {name: 'Music', link: '/music'},
            {name: 'Settings', link: '/settings'},
            {name: 'Friends', link: '/friends'},
         ],
      },
   },
   _onChange() {
   },

   subscribe(rerenderEntireTree: () => void) {
      this._onChange = rerenderEntireTree                // pattern observer
   },
   getState() {
      return this._state
   },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

      this._onChange()
   },
}
import {v1} from 'uuid'

//profile types
export type postType = {
   id: string
   post: string
   like: number
}
export type profilePageType = {
   posts: Array<postType>
}

// dialogs types
export type dialogType = {
   id: string
   name: string
}
export type messageType = {
   id: string
   message: string
}
export type dialogsPageType = {
   dialogs: Array<dialogType>
   messages: Array<messageType>
}

// navbar types
export type navbarElementType = {
   name: string
   link: string
}
export type navbarType = {
   elements: Array<navbarElementType>
}

// state type
export type stateType = {
   profilePage: profilePageType
   dialogsPage: dialogsPageType
   navbar: navbarType
}

export let state: stateType = {
   profilePage: {
      posts: [
         {id: v1(), post: 'Hi. how are you!', like: 15},
         {id: v1(), post: 'Hello', like: 20},
         {id: v1(), post: 'My posts', like: 6},
         {id: v1(), post: 'How are you', like: 76},
      ],
   },
   dialogsPage: {
      dialogs: [
         {id: v1(), name: 'Artashes'},
         {id: v1(), name: 'Karina'},
         {id: v1(), name: 'Maksim'},
         {id: v1(), name: 'Marina'},
         {id: v1(), name: 'David'},
         {id: v1(), name: 'David'},
         {id: v1(), name: 'David'},
         {id: v1(), name: 'David'},
         {id: v1(), name: 'David'},
         {id: v1(), name: 'David'},
         {id: v1(), name: 'David'},
      ],
      messages: [
         {id: v1(), message: 'Hi'},
         {id: v1(), message: 'Hello'},
         {id: v1(), message: 'Yo'},
         {id: v1(), message: 'How are you'},
      ],
   },
   navbar: {
      elements: [
         {name: 'Profile', link: '/profile'},
         {name: 'Dialogs', link: '/dialogs'},
         {name: 'News', link: '/news'},
         {name: 'Music', link: '/music'},
         {name: 'Settings', link: '/settings'},
         {name: 'Friends', link: '/friends'},
      ]

   }
}
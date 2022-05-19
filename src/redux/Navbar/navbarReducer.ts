import {initialStateType} from './types'

const initialState: initialStateType = {
   elements: [
      // {name: 'News', link: '/news'},
      {name: 'Profile', link: '/profile'},
      {name: 'Dialogs', link: '/dialogs'},
      {name: 'Friends', link: '/friends'},
      {name: 'Users', link: '/users'},
      // {name: 'Music', link: '/music'},
      // {name: 'Settings', link: '/settings'},
   ],
}

export const navbarReducer = (state: initialStateType = initialState, action: actionsTypes) => {
   return state
}

type actionsTypes = {}
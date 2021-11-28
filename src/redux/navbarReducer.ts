import {actionsTypes, navbarType} from './store'

let initialState = {
   elements: [
      {name: 'Profile', link: '/profile'},
      {name: 'Dialogs', link: '/dialogs'},
      {name: 'News', link: '/news'},
      {name: 'Music', link: '/music'},
      {name: 'Settings', link: '/settings'},
      {name: 'Friends', link: '/friends'},
   ],
}

export const navbarReducer = (state: navbarType = initialState, action: actionsTypes) => {
   return state
}
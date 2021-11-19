import {actionsTypes, dialogsPageType, messageType} from './state'
import {v1} from 'uuid'

export const ADD_MESSAGE = 'ADD-MESSAGE'
export const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE'

export const dialogsReducer = (state: dialogsPageType, action: actionsTypes) => {

   switch (action.type) {
      case ADD_MESSAGE:
         const newMessage: messageType = {
            id: v1(),
            message: state.newTextMessage,
         }
         state.messages.push(newMessage)
         state.newTextMessage = ''
         return state
      case UPDATE_TEXT_MESSAGE:
         state.newTextMessage = action.newTextMessage
         return state
      default:
         return state
   }
}

export const addMessageAC = () => ({type: ADD_MESSAGE} as const)
export const updateTextMessageAC = (newTextMessage: string) => ({
   type: UPDATE_TEXT_MESSAGE,
   newTextMessage,
} as const)
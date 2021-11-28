import {actionsTypes} from './store'
import {v1} from 'uuid'

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE'

export type dialogType = {
   id: string
   name: string
}
export type messageType = {
   id: string
   message: string
}

export type initialStateDialogsType = {
   dialogs: Array<dialogType>
   messages: Array<messageType>
   newTextMessage: string
}

const initialStateDialogs = {
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
}

export const dialogsReducer = (state: initialStateDialogsType = initialStateDialogs, action: actionsTypes): initialStateDialogsType => {
   switch (action.type) {
      case ADD_MESSAGE:
         const newMessage: messageType = {
            id: v1(),
            message: state.newTextMessage,
         }
         return {
            ...state,
            messages: [...state.messages, newMessage],
            newTextMessage: '',
         }
      case UPDATE_TEXT_MESSAGE:
         return {
            ...state,
            newTextMessage: action.newTextMessage,
         }
      default:
         return state
   }
}

export const addMessageAC = () => ({type: ADD_MESSAGE} as const)
export const updateTextMessageAC = (newTextMessage: string) => ({
   type: UPDATE_TEXT_MESSAGE,
   newTextMessage,
} as const)
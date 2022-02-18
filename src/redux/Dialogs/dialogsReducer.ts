import {v1} from 'uuid'
import {initialStateDialogsType, messageType} from './types'

const initialStateDialogs: initialStateDialogsType = {
   dialogs: [
      {id: v1(), name: 'Anastasia'},
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
}

export const dialogsReducer = (state: initialStateDialogsType = initialStateDialogs, action: actionsTypes): initialStateDialogsType => {
   switch (action.type) {
      case 'ADD-MESSAGE':
         const newMessage: messageType = {
            id: v1(),
            message: action.textMessage,
         }
         return {
            ...state,
            messages: [...state.messages, newMessage],
         }

      default:
         return state
   }
}

type actionsTypes =
   ReturnType<typeof addMessage>

export const addMessage = (textMessage: string) => ({type: 'ADD-MESSAGE', textMessage} as const)
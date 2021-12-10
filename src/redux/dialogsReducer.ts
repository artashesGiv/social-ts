import {v1} from 'uuid'

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
   newTextMessage: '',
}

export const dialogsReducer = (state: initialStateDialogsType = initialStateDialogs, action: actionsTypes): initialStateDialogsType => {
   switch (action.type) {
      case 'ADD-MESSAGE':
         const newMessage: messageType = {
            id: v1(),
            message: state.newTextMessage,
         }
         return {
            ...state,
            messages: [...state.messages, newMessage],
            newTextMessage: '',
         }
      case 'UPDATE-TEXT-MESSAGE':
         return {
            ...state,
            newTextMessage: action.newTextMessage,
         }
      default:
         return state
   }
}

type actionsTypes =
   ReturnType<typeof addMessage>
   | ReturnType<typeof updateTextMessage>

export const addMessage = () => ({type: 'ADD-MESSAGE'} as const)
export const updateTextMessage = (newTextMessage: string) => ({
   type: 'UPDATE-TEXT-MESSAGE',
   newTextMessage,
} as const)
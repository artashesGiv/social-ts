// state type
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


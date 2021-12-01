import {addMessageAC, initialStateDialogsType, updateTextMessageAC} from '../../redux/dialogsReducer'
import {Dialogs} from './Dialogs'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'
import {Dispatch} from '@reduxjs/toolkit'

type mapStateToPropsType = {
   dialogsPage: initialStateDialogsType
}

type mapDispatchToPropsType = {
   addMessage: () => void
   onMessageChange: (text: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
   return {
      dialogsPage: state.dialogsPage,
   }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
   return {
      addMessage: () => {
         dispatch(addMessageAC())
      },
      onMessageChange: (text) => {
         let action = updateTextMessageAC(text)
         dispatch(action)
      },
   }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

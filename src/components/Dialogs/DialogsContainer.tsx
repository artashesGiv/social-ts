import {addMessage, initialStateDialogsType, updateTextMessage} from '../../redux/dialogsReducer'
import {Dialogs} from './Dialogs'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'

type mapStateToPropsType = {
   dialogsPage: initialStateDialogsType
}

type mapDispatchToPropsType = {
   addMessage: () => void
   updateTextMessage: (text: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
   return {
      dialogsPage: state.dialogsPage,
   }
}

export const DialogsContainer = connect(mapStateToProps, {addMessage, updateTextMessage})(Dialogs)

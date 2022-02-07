import {ComponentType} from 'react'
import {addMessage, updateTextMessage} from '../../redux/Dialogs/dialogsReducer'
import {Dialogs} from './Dialogs'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/reduxStore'
import {initialStateDialogsType} from '../../redux/Dialogs/types'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'

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

export default compose<ComponentType>(
   connect(mapStateToProps, {addMessage, updateTextMessage}),
   withAuthRedirect,
)(Dialogs)
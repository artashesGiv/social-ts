import {ComponentType} from 'react'
import {addMessage} from '../../redux/Dialogs/dialogsReducer'
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
   addMessage: (textMessage: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
   return {
      dialogsPage: state.dialogsPage,
   }
}

export default compose<ComponentType>(
   connect(mapStateToProps, {addMessage}),
   withAuthRedirect,
)(Dialogs)
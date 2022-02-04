import React from 'react'
import {initialStateAuthType} from '../../redux/Auth/types'
import {Header} from './Header'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/reduxStore'
import {authMe} from '../../redux/Auth/authReduser'

class HeaderContainer extends React.Component<HeaderPropsType, initialStateAuthType> {

   componentDidMount() {
      this.props.authMe()
   }

   render() {
      return <Header {...this.props}/>
   }
}


type mapSateToPropsType = {
   isAuth: boolean
   login: string | null
}

type mapDispatchToPropsType = {
   authMe: () => void
}

export type HeaderPropsType = mapSateToPropsType & mapDispatchToPropsType

const mapSateToProps = (state: AppStateType): mapSateToPropsType => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
})

export default connect(mapSateToProps, {authMe})(HeaderContainer)
import React from 'react'
import {initialStateAuthType} from '../../redux/Auth/types'
import {Header} from './Header'
import axios from 'axios'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/reduxStore'
import {setAuthUserData} from '../../redux/Auth/authReduser'

class HeaderContainer extends React.Component<HeaderPropsType, initialStateAuthType> {

   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
         withCredentials: true,
      }).then(response => {
         if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data
            this.props.setAuthUserData(id, email, login)
         }
      })
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
   setAuthUserData: (userId: number, email: string, login: string) => void
}

export type HeaderPropsType = mapSateToPropsType & mapDispatchToPropsType

const mapSateToProps = (state: AppStateType): mapSateToPropsType => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login
})

export default connect(mapSateToProps, {setAuthUserData})(HeaderContainer)
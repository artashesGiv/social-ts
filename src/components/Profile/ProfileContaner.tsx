import React, {ComponentType} from 'react'
import {Profile} from './Profile'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/reduxStore'
import {
   addPost,
   getUserProfile,
   getUserStatus,
   updateUserStatus,
} from '../../redux/Propfile/profileReducer'
import {initialStateProfileType} from '../../redux/Propfile/types'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {compose} from 'redux'

class ProfileContainer extends React.Component<ProfilePropsType, initialStateProfileType> {

   componentDidMount() {
      const userId = this.props.match.params.userId || '21110'
      this.props.getUserProfile(userId)
      this.props.getUserStatus(userId)
   }


   render() {
      return (
         <Profile {...this.props}/>
      )
   }
}

type mapSateToPropsType = {
   profilePage: initialStateProfileType
}

type mapDispatchToPropsType = {
   addPost: (postText: string) => void
   getUserProfile: (userId: string) => void
   getUserStatus: (userId: string) => void
   updateUserStatus: (status: string) => void
}

type routParams = {
   userId: string
}

export type ProfilePropsType = mapSateToPropsType & mapDispatchToPropsType & RouteComponentProps<routParams>

const mapSateToProps = (state: AppStateType): mapSateToPropsType => {
   return {
      profilePage: state.profilePage,
   }
}

export default compose<ComponentType>(
   connect(mapSateToProps, {addPost, getUserProfile, getUserStatus, updateUserStatus}),
   withRouter,
   // withAuthRedirect,
)(ProfileContainer)
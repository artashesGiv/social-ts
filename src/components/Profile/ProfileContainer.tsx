import React, {ComponentType} from 'react'
import {Profile} from './Profile'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/reduxStore'
import {
   addPost,
   getUserProfile,
   getUserStatus, savePhoto,
   updateUserStatus,
} from '../../redux/Propfile/profileReducer'
import {initialStateProfileType} from '../../redux/Propfile/types'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {initialStateAuthType} from '../../redux/Auth/types'

class ProfileContainer extends React.Component<ProfilePropsType, initialStateProfileType> {

   refreshProfile() {
      const userId = this.props.match.params.userId || '21110'
      this.props.getUserProfile(userId)
      this.props.getUserStatus(userId)
   }

   componentDidMount() {
      this.refreshProfile()
   }

   componentDidUpdate(prevProps: ProfilePropsType) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
         this.refreshProfile()
      }
   }


   render() {
      return (
         <Profile isOwner={!this.props.match.params.userId}
                  profilePage={this.props.profilePage}
                  savePhoto={this.props.savePhoto}
                  addPost={this.props.addPost}
                  updateUserStatus={this.props.getUserStatus}
         />
      )
   }
}

type mapSateToPropsType = {
   profilePage: initialStateProfileType
   auth: initialStateAuthType
}

type mapDispatchToPropsType = {
   addPost: (postText: string) => void
   getUserProfile: (userId: string) => void
   getUserStatus: (userId: string) => void
   updateUserStatus: (status: string) => void
   savePhoto: (photo: File) => void
}

type routParams = {
   userId: string
}

export type ProfilePropsType = mapSateToPropsType & mapDispatchToPropsType & RouteComponentProps<routParams>

const mapSateToProps = (state: AppStateType): mapSateToPropsType => {
   return {
      profilePage: state.profilePage,
      auth: state.auth,
   }
}

export default compose<ComponentType>(
   connect(mapSateToProps, {addPost, getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
   withRouter,
   withAuthRedirect,
)(ProfileContainer)
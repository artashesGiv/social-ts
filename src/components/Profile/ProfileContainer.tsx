import React, {ComponentType} from 'react'
import {Profile} from './Profile'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/reduxStore'
import {
   addPost,
   getFollowedStatus,
   getUserProfile,
   getUserStatus,
   savePhoto,
   saveProfile,
   updateUserStatus,
} from '../../redux/Propfile/profileReducer'
import {initialStateProfileType} from '../../redux/Propfile/types'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {initialStateAuthType} from '../../redux/Auth/types'
import {followUser, getUsers, unfollowUser} from '../../redux/Users/usersReducer'
import {Preloader} from '../common/Preloader/Preloader'

class ProfileContainer extends React.Component<ProfilePropsType, initialStateProfileType> {

   refreshProfile() {
      let userId = +this.props.match.params.userId
      if (!userId) {
         this.props.auth.userId
            ? userId = this.props.auth.userId
            : this.props.history.push('/login')
      }
      this.props.getUsers(1, 100, true)
      this.props.getUserProfile(userId)
      this.props.getFollowedStatus(userId)
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
         <>
            {this.props.profilePage.isFetching ? <Preloader/> : null}
            <Profile isOwner={!this.props.match.params.userId}
                     profilePage={this.props.profilePage}
                     savePhoto={this.props.savePhoto}
                     addPost={this.props.addPost}
                     updateUserStatus={this.props.updateUserStatus}
                     saveProfile={this.props.saveProfile}
                     followUser={this.props.followUser}
                     unfollowUser={this.props.unfollowUser}
                     followingInProgress={this.props.followingInProgress}
                     userId={+this.props.match.params.userId}
            />
         </>
      )
   }
}

type mapSateToPropsType = {
   profilePage: initialStateProfileType
   auth: initialStateAuthType
   followingInProgress: number[]
}

type mapDispatchToPropsType = {
   addPost: (postText: string) => void
   getUserProfile: (userId: number) => void
   getUserStatus: (userId: number) => void
   updateUserStatus: (status: string) => void
   savePhoto: (photo: File) => void
   saveProfile: (profile: any) => void
   getUsers: (currentPage: number, pageSize: number, isFriends: boolean) => void
   followUser: (userId: number) => void
   unfollowUser: (userId: number) => void
   getFollowedStatus: (userId: number) => void
}

type routParams = {
   userId: string
}

export type ProfilePropsType = mapSateToPropsType & mapDispatchToPropsType & RouteComponentProps<routParams>

const mapSateToProps = (state: AppStateType): mapSateToPropsType => {
   return {
      profilePage: state.profilePage,
      auth: state.auth,
      followingInProgress: state.usersPage.followingInProgress,
   }
}

export default compose<ComponentType>(
   connect(mapSateToProps, {
      addPost,
      getUserProfile,
      getUserStatus,
      updateUserStatus,
      savePhoto,
      saveProfile,
      getUsers,
      followUser,
      unfollowUser,
      getFollowedStatus,
   }),
   withRouter,
   withAuthRedirect,
)(ProfileContainer)
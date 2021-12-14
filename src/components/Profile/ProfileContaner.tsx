import React from 'react'
import {Profile} from './Profile'
import axios from 'axios'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'
import {addPost, setUserProfile, updateTextPost} from '../../redux/Propfile/profileReducer'
import {initialStateProfileType, profileType} from '../../redux/Propfile/types'
import {RouteComponentProps, withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component<ProfilePropsType, initialStateProfileType> {

   componentDidMount() {
      const userId = this.props.match.params.userId || '2'
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
         this.props.setUserProfile(response.data)
      })
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
   setUserProfile: (profile: profileType) => void
   addPost: () => void
   updateTextPost: (text: string) => void
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

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapSateToProps, {setUserProfile, addPost, updateTextPost})(WithUrlDataContainerComponent)


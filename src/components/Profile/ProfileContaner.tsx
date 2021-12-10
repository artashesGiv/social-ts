import React from 'react'
import {Profile} from './Profile'
import axios from 'axios'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'
import {addPost, initialStateProfileType, profileType, setUserProfile, updateTextPost} from '../../redux/profileReducer'

class ProfileContainer extends React.Component<ProfilePropsType, initialStateProfileType> {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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


export type ProfilePropsType = mapSateToPropsType & mapDispatchToPropsType

const mapSateToProps = (state: AppStateType): mapSateToPropsType => {
   return {
      profilePage: state.profilePage
   }
}

export default connect(mapSateToProps, {setUserProfile, addPost, updateTextPost})(ProfileContainer)
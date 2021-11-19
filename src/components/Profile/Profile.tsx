import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import {actionsTypes, profilePageType} from '../../redux/state'

type profilePropsType = {
   state: profilePageType
   dispatch: (action: actionsTypes) => void
}

const Profile = (props: profilePropsType) => {

   return (
      <div>
         <ProfileInfo/>
         <MyPosts
            posts={props.state.posts}
            newTextPost={props.state.newTextPost}
            dispatch={props.dispatch}
         />
      </div>
   )
}

export default Profile
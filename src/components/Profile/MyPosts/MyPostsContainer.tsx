import {addPostAC, initialStateProfileType, updateNewTextPostAC} from '../../../redux/profileReducer'
import {MyPosts} from './MyPosts'
import {Dispatch} from '@reduxjs/toolkit'
import {connect} from 'react-redux'
import {AppStateType} from '../../../redux/redux-store'

type mapStateToPropsType = {
   profilePage: initialStateProfileType
}

type mapDispatchToPropsType = {
   onPostChange: (text: string) => void
   addPost: () => void
}

export type ProfilePostsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
   return {
      profilePage: state.profilePage
   }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      addPost: () => {
         dispatch(addPostAC())
      },
      onPostChange: (text: string) => {
         let action = updateNewTextPostAC(text)
         dispatch(action)
      },
   }
}
export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

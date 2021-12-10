import {addPost, initialStateProfileType, updateTextPost} from '../../../redux/profileReducer'
import {MyPosts} from './MyPosts'
import {connect} from 'react-redux'
import {AppStateType} from '../../../redux/redux-store'

type mapStateToPropsType = {
   profilePage: initialStateProfileType
}

type mapDispatchToPropsType = {
   addPost: () => void
   updateTextPost: (text: string) => void
}

export type ProfilePostsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
   return {
      profilePage: state.profilePage
   }
}

export const MyPostContainer = connect(mapStateToProps, {addPost, updateTextPost})(MyPosts)

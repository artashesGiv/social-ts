import {connect} from 'react-redux'
import {Users} from './Users'
import {followAC, initialStateUsersType, setUsersAC, unfollowAC, usersType} from '../../redux/usersReducer'
import {Dispatch} from '@reduxjs/toolkit'
import {AppStateType} from '../../redux/redux-store'

type mapSateToPropsType = {
   usersPage: initialStateUsersType
}

type mapDispatchToPropsType = {
   follow: (userId: string) => void
   unfollow: (userId: string) => void
   setUsers: (users: Array<usersType>) => void
}

export type UsersPropsType = mapSateToPropsType & mapDispatchToPropsType

const mapSateToProps = (state: AppStateType): mapSateToPropsType => {
   return {
      usersPage: state.usersPage,
   }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      }
   }
}

export const UsersContainer = connect(mapSateToProps, mapDispatchToProps)(Users)
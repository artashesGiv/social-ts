import {connect} from 'react-redux'
import {
   followAC,
   initialStateUsersType,
   setCurrentPageAC, setTotalUsersCountAC,
   setUsersAC,
   unfollowAC,
   usersType,
} from '../../redux/usersReducer'
import {Dispatch} from '@reduxjs/toolkit'
import {AppStateType} from '../../redux/redux-store'
import React from 'react'
import axios from 'axios'
import {Users} from './Users'

class UsersContainer extends React.Component<UsersPropsType, initialStateUsersType> {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
         this.props.setTotalUsersCount(response.data.totalCount)
      })
   }

   onPageChanged = (pageNumber: number) => {
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
      })
   }
   render = () => {
      return <Users usersProps={this.props} onPageChanged={this.onPageChanged}/>
   }
}

type mapSateToPropsType = {
   usersPage: initialStateUsersType
}

type mapDispatchToPropsType = {
   follow: (userId: number) => void
   unfollow: (userId: number) => void
   setUsers: (users: Array<usersType>) => void
   setCurrentPage: (currentPage: number) => void
   setTotalUsersCount: (totalUsers: number) => void
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
      },
      setCurrentPage: (currentPage) => {
         dispatch(setCurrentPageAC(currentPage))
      },
      setTotalUsersCount: (totalUsers) => {
         dispatch(setTotalUsersCountAC(totalUsers))
      }
   }
}

export default connect(mapSateToProps, mapDispatchToProps)(UsersContainer)
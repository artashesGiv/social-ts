import {connect} from 'react-redux'
import {
   follow,
   initialStateUsersType,
   setCurrentPage, setTotalUsersCount,
   setUsers, toggleIsFetching,
   unfollow,
   usersType,
} from '../../redux/usersReducer'
import {AppStateType} from '../../redux/redux-store'
import React from 'react'
import axios from 'axios'
import {Users} from './Users'
import {Preloader} from '../common/Preloader/Preloader'

class UsersContainer extends React.Component<UsersPropsType, initialStateUsersType> {

   componentDidMount() {
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {
         this.props.toggleIsFetching(false)
         this.props.setUsers(response.data.items)
         this.props.setTotalUsersCount(response.data.totalCount)
      })
   }

   onPageChanged = (pageNumber: number) => {
      this.props.toggleIsFetching(true)
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`).then(response => {
         this.props.toggleIsFetching(false)
         this.props.setUsers(response.data.items)
      })
   }
   render = () => {
      return (
         <>
            {this.props.usersPage.isFetching ? <Preloader/> : null}
            <Users usersProps={this.props} onPageChanged={this.onPageChanged}/>
         </>
      )
   }
}

type mapSateToPropsType = {
   usersPage: initialStateUsersType
}

type mapDispatchToPropsType = {
   follow: (userId: number) => void
   unfollow: (userId: number) => void
   setUsers: (users: usersType[]) => void
   setCurrentPage: (currentPage: number) => void
   setTotalUsersCount: (totalUsers: number) => void
   toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = mapSateToPropsType & mapDispatchToPropsType

const mapSateToProps = (state: AppStateType): mapSateToPropsType => {
   return {
      usersPage: state.usersPage,
   }
}

export default connect(mapSateToProps,
   {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer)
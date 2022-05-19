import React, {ComponentType} from 'react'
import {connect} from 'react-redux'
import {followUser, getUsers, unfollowUser} from '../../redux/Users/usersReducer'
import {AppStateType} from '../../redux/reduxStore'
import {Users} from './Users'
import {Preloader} from '../common/Preloader/Preloader'
import {initialStateUsersType} from '../../redux/Users/types'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'
import {getUsersPageSuper} from '../../redux/Users/usersSelectors'
import {RouteComponentProps, withRouter} from 'react-router-dom'

class UsersContainer extends React.Component<UsersPropsType, initialStateUsersType> {

   componentDidMount() {
      const isFriends = this.props.history.location.pathname === '/friends'
      this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize, isFriends)
   }

   onPageChanged = (pageNumber: number) => {
      const isFriends = this.props.history.location.pathname === '/friends'
      this.props.getUsers(pageNumber, this.props.usersPage.pageSize, isFriends)
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
   getUsers: (currentPage: number, pageSize: number, isFriends: boolean) => void
   followUser: (userId: number) => void
   unfollowUser: (userId: number) => void
}

export type UsersPropsType = mapSateToPropsType & mapDispatchToPropsType & RouteComponentProps

const mapSateToProps = (state: AppStateType): mapSateToPropsType => {
   return {
      usersPage: getUsersPageSuper(state)
   }
}

export default compose<ComponentType>(
   connect(mapSateToProps, {getUsers, followUser, unfollowUser}),
   withRouter,
   withAuthRedirect,
)(UsersContainer)

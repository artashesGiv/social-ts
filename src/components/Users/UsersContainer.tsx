import React, {ComponentType} from 'react'
import {connect} from 'react-redux'
import {getUsers, followUser, unfollowUser} from '../../redux/Users/usersReducer'
import {AppStateType} from '../../redux/reduxStore'
import {Users} from './Users'
import {Preloader} from '../common/Preloader/Preloader'
import {initialStateUsersType} from '../../redux/Users/types'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'
import {getUsersPage} from '../../redux/Users/usersSelectors'

class UsersContainer extends React.Component<UsersPropsType, initialStateUsersType> {

   componentDidMount() {
      this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
   }

   onPageChanged = (pageNumber: number) => {
      this.props.getUsers(pageNumber, this.props.usersPage.pageSize)
   }

   render = () => {
      console.log('render')
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
   getUsers: (currentPage: number, pageSize: number) => any // fixed any
   followUser: (userId: number) => void // fixed any
   unfollowUser: (userId: number) => void // fixed any
}

export type UsersPropsType = mapSateToPropsType & mapDispatchToPropsType

const mapSateToProps = (state: AppStateType): mapSateToPropsType => {
   console.log('map state to props')
   return {
      usersPage: getUsersPage(state)
   }
}

export default compose<ComponentType>(
   connect(mapSateToProps, {getUsers, followUser, unfollowUser}),
   withAuthRedirect,
)(UsersContainer)
